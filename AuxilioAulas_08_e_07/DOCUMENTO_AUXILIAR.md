# Guia Didático de Tutoria Arquitetural (Aulas 07 e 08)

Este material de estudo e tutoria técnica apresenta a fundamentação conceitual, o detalhamento pedagógico de cada componente de software e a análise crítica dos padrões arquiteturais abordados nas Aulas 07 e 08 da disciplina de Arquitetura de Software.

---

# PARTE 1: Aula 07 — Hub de Faturamento em Arquitetura Hexagonal

## 1. O Conceito: O que é a Arquitetura Hexagonal (Ports & Adapters)?

O objetivo primordial desse estilo arquitetural é isolar o **coração do negócio** (domínio, entidades e regras de negócio) de qualquer dependência ou tecnologia externa (frameworks web, bancos de dados relacionais, brokers de mensageria, serviços de e-mail ou protocolos de comunicação).

A arquitetura organiza-se didaticamente em três camadas fundamentais:

* **Núcleo / Domínio (Core):** Onde reside a entidade `Fatura` e suas invariantes de negócio. O domínio é agnóstico em relação à infraestrutura: não possui anotações de frameworks web, não conhece implementações SOAP e não depende de brokers de mensageria.
* **Portas (Ports):** São interfaces na linguagem Java que definem estritamente contratos de comunicação:
  * **Portas de Entrada (In):** Representam os casos de uso oferecidos pelo domínio ao mundo externo (exemplo: a operação de faturar um pedido).
  * **Portas de Saída (Out):** Representam as dependências externas que o domínio necessita para concluir um caso de uso (exemplo: persistência, emissão de boletos, emissão fiscal e envio de e-mails).
* **Adaptadores (Adapters):** São as classes concretas responsáveis por traduzir e implementar os contratos das portas:
  * **Adaptadores de Entrada (Driving):** Recebem eventos ou requisições externas (como o `FaturaController` tratando requisições HTTP REST) e os convertem em chamadas para as portas de entrada do domínio.
  * **Adaptadores de Saída (Driven):** Implementam as portas de saída conectando-se a tecnologias concretas. No cenário didático desta aula, essas saídas são implementadas por meio de adaptadores simulados (*mocks*).

---

## 2. Estrutura Didática dos Componentes de Software (Aula 07)

### 🟢 Camada de Domínio (`domain`)
Representa o núcleo da aplicação, reunindo modelos de dados puros e contratos de portas.

* **`Fatura.java` (Entidade de Domínio):**
  * **Papel Pedagógico:** Centralizar o estado e garantir a integridade dos dados de faturamento.
  * **Responsabilidade:** Mantém os atributos essenciais (`id`, `pedidoId`, `valor`, `emitidoEm`, `codigoBarras`, `chaveAcesso`, `rps` e `hashEmail`).
  * **Regras de Negócio Encarregadas:** Impede a instanciação de faturas sem referência de pedido (`pedidoId <= 0`) ou com valor financeiro inválido (`valor <= 0`). Fornece métodos de mutação controlada de domínio: `inserirBoleto()`, `inserirNotaFiscal()` e `inserirEmail()`.

* **`FaturaService.java` (Porta de Entrada / Input Port):**
  * **Papel Pedagógico:** Formalizar o contrato da regra de negócio para a camada de aplicação.
  * **Responsabilidade:** Define a assinatura `UUID faturarPedido(Long pedidoId, BigDecimal valor)`, estabelecendo o ponto de entrada único para qualquer canal condutor (REST, mensageria ou linha de comando).

* **`BoletoMessaging.java` (Porta de Saída - RF02):**
  * **Papel Pedagógico:** Isolar a regra de emissão bancária da infraestrutura de filas.
  * **Responsabilidade:** Define o contrato `String emitirBoleto(Fatura fatura)`, exigindo que o adaptador de mensageria processe a fatura e retorne a linha digitável do boleto.

* **`NotaFiscalSoapPort.java` (Porta de Saída - RF03):**
  * **Papel Pedagógico:** Desacoplar a comunicação fiscal baseada em Web Services SOAP do núcleo do domínio.
  * **Responsabilidade:** Define o contrato `String emitirNotaFiscal(Fatura fatura)`, obrigando o adaptador a devolver a chave de acesso da nota.

* **`NotificacaoEmailPort.java` (Porta de Saída - RF04):**
  * **Papel Pedagógico:** Desacoplar a notificação de clientes de provedores específicos de e-mail (SMTP).
  * **Responsabilidade:** Define o contrato `String enviarEmail(Fatura fatura)`, exigindo a devolução de um código hash que comprove o envio do conteúdo.

* **`FaturaRepository.java` (Porta de Saída - RF01):**
  * **Papel Pedagógico:** Abstrair o mecanismo de persistência de dados.
  * **Responsabilidade:** Estabelece os contratos `void salvar(Fatura fatura)` e `Optional<Fatura> buscarPorId(UUID id)`. O domínio permanece indiferente se a gravação ocorre em memória, banco H2, PostgreSQL ou NoSQL.

---

### 🔵 Camada de Aplicação (`application`)
Atua como orquestradora dos casos de uso, mediando o domínio e os adaptadores por meio de injeção de dependências.

* **`FaturaServiceImp.java`:**
  * **Papel Pedagógico:** Demonstrar a execução sequencial de um caso de uso orquestrado em arquitetura hexagonal.
  * **Roteiro de Execução:**
    1. Instancia a entidade pura `Fatura` a partir dos dados de entrada.
    2. Aciona a porta de saída de mensageria para emissão de boleto e registra o código de barras retornado.
    3. Aciona a porta de saída SOAP para autorização da nota fiscal e anexa a chave de acesso de 44 dígitos.
    4. Aciona a porta de saída de e-mail e armazena o hash criptográfico gerado.
    5. Persiste a entidade preenchida por meio da porta de repositório.
    6. Devolve o identificador exclusivo (`UUID`) da fatura.

---

### 🟣 Camada de Infraestrutura: Adaptadores de Entrada (`infra/adapters/in`)
Responsável por interceptar a comunicação externa e traduzi-la para os tipos do domínio.

* **`FaturaPostRequest.java` e `FaturaPostResponse.java` (DTOs):**
  * **Papel Pedagógico:** Proteger o domínio contra acoplamento direto com os formatos de serialização JSON da web.
* **`FaturaController.java` (Controlador REST):**
  * **Papel Pedagógico:** Adaptador HTTP condutor (*driving adapter*).
  * **Responsabilidade:** Expõe o endpoint `POST /fatura`, recebe o payload JSON externo, converte os tipos e encaminha a requisição para a porta de entrada `FaturaService`, retornando a resposta com código HTTP 201 Created.

---

### 🟡 Camada de Infraestrutura: Adaptadores de Saída Simulados (`infra/adapters/out`)
Implementações de suporte (*driven adapters*) que satisfazem as necessidades do domínio de forma simulada (*mocks*).

* **`BoletoMessagingMockAdapter.java`:**
  * **Papel Pedagógico:** Simular o envio de mensagens para filas assíncronas (RabbitMQ/Kafka).
  * **Funcionamento:** Gera dinamicamente uma sequência de 47 dígitos numéricos simulando a representação numérica do código de barras bancário.

* **`NotaFiscalSoapMockAdapter.java`:**
  * **Papel Pedagógico:** Simular o retorno de uma chamada de Web Service SOAP junto à SEFAZ.
  * **Funcionamento:** Produz dinamicamente uma cadeia com exatamente 44 dígitos numéricos, atendendo à estrutura oficial exigida para chaves de acesso de NF-e.

* **`NotificacaoEmailMockAdapter.java`:**
  * **Papel Pedagógico:** Simular o processamento de um servidor de envio de mensagens via SMTP.
  * **Funcionamento:** Constrói o corpo textual e calcula um resumo criptográfico SHA-256 do conteúdo, devolvendo o hash hexadecimal para garantir a rastreabilidade da notificação.

* **`FaturaRepositoryMemoryAdapter.java`:**
  * **Papel Pedagógico:** Demonstrar a flexibilidade da arquitetura hexagonal ao fornecer persistência sem obrigar o uso de JPA/Hibernate no modelo de domínio.
  * **Funcionamento:** Armazena e recupera os objetos `Fatura` utilizando um mapa de concorrência (`ConcurrentHashMap`).

---

### 🧪 Camada de Validação e Testes (`src/test`)
* **`FaturaIntegrationTest.java`:**
  * **Papel Pedagógico:** Demonstrar a verificação automatizada de conformidade dos requisitos de negócio.
  * **Critérios Verificados:**
    1. Obtenção do UUID de fatura ao término do fluxo de integração.
    2. Presença e preenchimento da linha digitável do boleto.
    3. Validação do tamanho exato de 44 dígitos da chave de acesso fiscal.
    4. Geração do hash de confirmação de e-mail.
    5. Rejeição com lançamento de exceção para faturas com pedidos ou valores nulos/inválidos.

---

# PARTE 2: Aula 08 — Integração de Vendas (MVC) ao Hub e Análise de Sistemas

## 1. O Conceito: A Integração entre o Padrão MVC e a Arquitetura Hexagonal

Na Aula 08, analisa-se a coexistência de dois padrões arquiteturais distintos dentro de um ecossistema empresarial:
1. **Aplicação de Vendas (Monólito em MVC clássico):** Responsável pela interação com vendedores e clientes, controle de catálogo, estoque local e registro de pedidos de venda.
2. **Hub de Integrações (Arquitetura Hexagonal):** Microsserviço especializado e isolado, encarregado de orquestrar tarefas fiscais, bancárias e de notificação.

No momento em que o operador confirma o fechamento de um pedido na aplicação MVC, inicia-se uma comunicação cliente-servidor síncrona via HTTP REST (`POST /fatura`) contra o Hub Hexagonal (disponibilizado na porta 8081). O identificador de fatura retornado pelo Hub é gravado no registro da venda para assegurar a rastreabilidade transacional entre vendas e faturamento.

---

## 2. Estrutura Didática dos Componentes de Vendas (`Aula-08/mvc`)

### 🟢 Domínio e Persistência de Vendas
* **`Sale.java` (Entidade JPA):**
  * **Papel Pedagógico:** Modelar a tabela de vendas relacionando produtos, quantidades e total financeiro.
  * **Destaque:** Apresenta a coluna `faturaId`, projetada especificamente para armazenar a chave estrangeira lógica devolvida pelo microsserviço de faturamento.
* **`SaleRepository.java` (Repositório Spring Data JPA):**
  * **Papel Pedagógico:** Gerenciar as operações de banco de dados para a entidade `Sale`.

### 🔵 Serviços e Cliente REST de Integração
* **`AppConfig.java`:**
  * **Papel Pedagógico:** Configurar a infraestrutura de rede instanciando o bean `RestTemplate`.
* **`FaturamentoClient.java`:**
  * **Papel Pedagógico:** Atuar como um Adaptador de Saída na aplicação MVC, encapsulando as especificidades da requisição HTTP externa.
  * **Funcionamento:** Constrói os cabeçalhos `application/json`, empacota o ID do pedido e o valor monetário, dispara a requisição contra a URL configurada e faz o parsing seguro da resposta para extrair o `faturaId`.
* **`SaleService.java`:**
  * **Papel Pedagógico:** Centralizar as regras de negócio de venda.
  * **Operações:**
    * `criarPedido`: Checa a disponibilidade no estoque, calcula o valor total da venda e registra o pedido como `ABERTO`.
    * `fecharPedido`: Deduz o saldo do estoque, chama o `FaturamentoClient`, vincula o `faturaId` ao pedido e transita o status da venda para `FECHADO`.

### 🟣 Camada de Controle e Interface (Thymeleaf)
* **`SaleController.java`:**
  * **Papel Pedagógico:** Atender às requisições do navegador, despachar comandos para os serviços e gerenciar mensagens de feedback (sucesso ou falha).
* **`sales.html`:**
  * **Papel Pedagógico:** Visão que permite operar o sistema de vendas, exibindo o status de cada pedido e a identificação visual da fatura emitida no Hub.

### 🧪 Testes Automatizados de Venda
* **`SaleServiceTest.java`:**
  * **Papel Pedagógico:** Demonstrar testes de unidade e integração utilizando dublês de teste (*Mockito*).
  * **Cenários Testados:** Abertura de pedido, fechamento com injeção simulada da resposta do Hub, validação da persistência do `faturaId`, baixa física no estoque e bloqueio para impedir fechamento duplicado.

---

## 3. Análise Arquitetural dos Desafios da Integração Síncrona

Abaixo realiza-se a análise técnica aprofundada dos dois problemas solicitados na atividade, explorando as causas no pedido, a percepção pelo negócio e as soluções da engenharia de software para mitigá-los.

---

### Problema 1: Acoplamento Temporal e Indisponibilidade do Hub (Falha em Cascata)

* **Comportamento no Pedido:**
  Por se tratar de uma chamada síncrona bloqueante, a thread de execução do servidor MVC permanece retida aguardando a resposta de rede do Hub de Faturamento. Se o Hub estiver temporariamente inacessível, lento ou com alta latência em suas próprias dependências, a conexão atinge o tempo limite (*socket timeout*). Como consequência, a transação local da venda é abortada ou fica inconsistente, o pedido não é concluído e o cliente se depara com um erro de processamento (HTTP 500 ou 504).

* **Impacto Percebido pelo Negócio:**
  * **Abandono de Carrinho no Checkout:** O comprador desiste da transação diante da lentidão ou erro, resultando em perda direta de receita financeira.
  * **Dano à Reputação da Marca:** O consumidor perde a segurança na estabilidade do canal de vendas digital da empresa.
  * **Falha em Cascata (Efeito Dominó):** A retenção contínua de threads no servidor de vendas devido à lentidão do Hub pode esgotar o pool de conexões da aplicação principal, paralisando a loja inteira mesmo para operações que não envolviam faturamento.

* **Solução Arquitetural de Engenharia:**
  **Comunicação Assíncrona baseada em Mensageria com os Padrões Transactional Outbox e Circuit Breaker.**

* **Local de Atuação e Justificativa Técnica:**
  A solução atua na **fronteira de comunicação entre a aplicação MVC de Vendas e o Hub de Faturamento**:
  1. **Desacoplamento Temporal:** A aplicação de vendas não mais aguarda a resposta do Hub para concluir o checkout. No momento da compra, a venda registra o pedido e grava um evento de faturamento em uma tabela transacional local (*Transactional Outbox*) dentro da mesma transação de banco.
  2. **Processamento Confiável:** Um componente despachador lê a tabela local e publica o evento em um intermediador de mensagens (como RabbitMQ ou Apache Kafka).
  3. **Resiliência:** O Hub consome os eventos no seu próprio ritmo operacional. Se o Hub passar por uma janela de manutenção ou instabilidade, as mensagens permanecem retidas com segurança na fila, sem afetar a conclusão imediata da compra pelo cliente na ponta web.
  4. **Circuit Breaker:** Enquanto vigorar a chamada HTTP, a inclusão de um disjuntor de circuito impede que novas tentativas de checkout continuem bombardeando um serviço receptor comprovadamente inoperante, acionando planos de contingência (*fallback*).

---

### Problema 2: Falta de Idempotência e Risco de Duplicidade por Retentativas

* **Comportamento no Pedido:**
  Em arquiteturas distribuídas, a falha de comunicação pode ocorrer após a execução do serviço remoto, no trajeto de retorno da resposta. O Hub recebe a requisição, processa o faturamento, gera o boleto e autoriza a nota fiscal com sucesso; contudo, uma instabilidade passageira na rede interrompe a conexão antes que o pacote HTTP 201 alcance o MVC. Diante da ausência de confirmação, a aplicação de vendas (ou o próprio usuário clicando repetidas vezes no botão "Finalizar Pedido") dispara uma nova requisição. Se o Hub não for idempotente, ele tratará o reenvio como uma nova operação, gerando uma **segunda fatura**, um **segundo boleto** e uma **segunda nota fiscal** vinculados a uma única compra real.

* **Impacto Percebido pelo Negócio:**
  * **Cobrança Duplicada ao Consumidor:** O cliente recebe duplicidade de cobranças ou de títulos de pagamento para a mesma mercadoria, gerando contestações imediatas.
  * **Custos Administrativos e Fiscais:** A organização passa a ter de acionar procedimentos manuais de estorno financeiro e cancelamento de notas fiscais junto à administração tributária (SEFAZ), correndo riscos de autuações fiscais caso prazos regulamentares sejam ultrapassados.
  * **Perda de Integridade Contábil:** Distorções nos relatórios de faturamento e divergência nos livros contábeis da empresa.

* **Solução Arquitetural de Engenharia:**
  **Implementação do Padrão de Idempotência (*Idempotency Key* / Consumidor Idempotente).**

* **Local de Atuação e Justificativa Técnica:**
  A solução atua de maneira coordenada no **cabeçalho da requisição enviada pelo cliente (MVC) e na camada de entrada do serviço receptor (Hub de Faturamento)**:
  1. **Identificador Imutável:** A aplicação MVC inclui no cabeçalho HTTP da requisição uma chave de idempotência exclusiva associada ao pedido:
     ```http
     Idempotency-Key: pedido-venda-12345
     ```
  2. **Verificação no Receptor:** Ao recepcionar a mensagem, a camada de entrada do Hub consulta seu repositório de persistência antes de acionar qualquer adaptador de saída.
  3. **Reutilização Transacional:** Caso constate que já existe um faturamento registrado para aquela chave/pedido, o Hub **aborta a criação de novos boletos e notas fiscais**, recuperando imediatamente a fatura preexistente e devolvendo seu identificador original.
  4. **Garantia de Estado Seguro:** Esse mecanismo assegura que a operação possa ser reexecutada múltiplas vezes sem que ocorram efeitos colaterais duplicados ou danos ao ecossistema contábil do negócio.
