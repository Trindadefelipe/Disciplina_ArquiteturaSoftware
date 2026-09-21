/**
 * BANCO DE QUESTÕES COMPLETO E CALIBRADO - DISCIPLINA DE ARQUITETURA DE SOFTWARE
 * Conteúdo extraído dos Slides 1 a 5 (Prof. Dr. Pedro Henrique Nogueira Pizzutti)
 * 
 * Calibração das alternativas:
 * - Extensões de texto balanceadas e equiparáveis entre todas as 4 alternativas (A, B, C, D).
 * - Distratores técnicos e realistas baseados em conceitos do curso.
 * - Explicações fundamentadas no material de aula.
 */

const QUESTION_BANK = [
  {
    "id": "s1_q1",
    "category": "Slide 1",
    "topic": "Definição de Arquitetura",
    "question": "Segundo a definição clássica de Bass, Clements e Kazman (2003), como é definida a arquitetura de software de um sistema?",
    "options": [
      "A) É a seleção criteriosa da linguagem de programação e dos frameworks corporativos adotados na fase de implementação.",
      "B) É o conjunto de estruturas necessárias para raciocinar sobre o sistema, reunindo seus elementos, as relações entre eles e as propriedades de ambos.",
      "C) É a especificação detalhada da infraestrutura física de nuvem, topologia de rede e servidores onde os serviços serão hospedados.",
      "D) É a organização hierárquica das pastas de código-fonte e pacotes técnicos no repositório de versionamento do projeto."
    ],
    "answer": 1,
    "explanation": "Bass, Clements e Kazman (2003, p. 4) estabelecem que a arquitetura de software é o conjunto de estruturas necessárias para raciocinar sobre o sistema, contemplando os elementos, as relações e as propriedades de ambos."
  },
  {
    "id": "s1_q2",
    "category": "Slide 1",
    "topic": "Três Partes da Definição",
    "question": "Na definição clássica de arquitetura de software, o que representam conceitualmente os Elementos, as Relações e as Propriedades?",
    "options": [
      "A) Elementos são as pastas do projeto; Relações são as rotas HTTP de rede; Propriedades são as variáveis de ambiente em produção.",
      "B) Elementos são os servidores em nuvem; Relações são os protocolos de rede; Propriedades são as permissões de acesso do banco de dados.",
      "C) Elementos são as partes do sistema (módulos, componentes ou serviços); Relações são as conexões e trocas de informação; Propriedades são as características e responsabilidades de cada elemento.",
      "D) Elementos são as classes Java; Relações são as chamadas de métodos get/set; Propriedades são os tipos primitivos de dados utilizados."
    ],
    "answer": 2,
    "explanation": "Os Elementos são os blocos construtivos do sistema (módulos, componentes em execução ou serviços); as Relações ditam as interações e trocas de dados; e as Propriedades descrevem o comportamento, regras e responsabilidades de cada parte."
  },
  {
    "id": "s1_q3",
    "category": "Slide 1",
    "topic": "O que NÃO é Arquitetura",
    "question": "De acordo com o material da Aula 1, qual das seguintes afirmações descreve corretamente o que NÃO é arquitetura de software de forma isolada?",
    "options": [
      "A) Arquitetura não é a divisão de responsabilidades entre apresentação, regras de negócio e persistência de dados.",
      "B) Arquitetura não é a definição de como os módulos trocam informações entre si de forma síncrona ou assíncrona.",
      "C) Arquitetura não é apenas escolher tecnologias (React/Java), organizar pastas ou decidir onde o sistema roda (nuvem/servidor), pois isso não define a estrutura de relações sistêmicas.",
      "D) Arquitetura não é a ponderação de trade-offs entre requisitos de desempenho, modificabilidade e segurança do sistema."
    ],
    "answer": 2,
    "explanation": "Escolher bibliotecas, desenhar pastas ou contratar provedores de nuvem são decisões pontuais de tecnologia e infraestrutura, mas não capturam sozinhos a arquitetura, que é a totalidade das estruturas e relações sistêmicas."
  },
  {
    "id": "s1_q4",
    "category": "Slide 1",
    "topic": "Estrutura vs Decisão",
    "question": "Na distinção fundamental entre Estrutura e Decisão arquitetural, como esses dois conceitos se articulam?",
    "options": [
      "A) A estrutura representa a documentação escrita antes do projeto, enquanto a decisão é o código final gerado pelo compilador.",
      "B) A estrutura é o resultado visível e observável no sistema construído, enquanto a decisão é o raciocínio prévio e as escolhas que deram origem àquela estrutura.",
      "C) A estrutura refere-se exclusivamente ao banco de dados relacional, enquanto a decisão refere-se aos algoritmos das telas.",
      "D) A estrutura é um artefato estático que nunca muda, enquanto a decisão é renegociada diariamente a cada commit no repositório."
    ],
    "answer": 1,
    "explanation": "A estrutura é a manifestação física observável no sistema hoje (ex: diagrama de módulos), enquanto a decisão abrange os motivos, análises de trade-off e objetivos que levaram a equipe a escolher aquela conformação."
  },
  {
    "id": "s1_q5",
    "category": "Slide 1",
    "topic": "Custo do Ciclo de Vida",
    "question": "Por que as decisões arquiteturais são tão determinantes no custo financeiro e na sustentabilidade de um software a longo prazo?",
    "options": [
      "A) Porque a maior parte do custo total de um sistema ocorre na fase de manutenção e evolução em produção, e não no desenvolvimento inicial.",
      "B) Porque as licenças corporativas de ferramentas para arquitetos de software possuem valor superior às licenças de desenvolvedores.",
      "C) Porque uma arquitetura bem estruturada elimina completamente a necessidade de escrever testes automatizados durante a construção.",
      "D) Porque a confecção de diagramas de arquitetura consome a maior parcela do orçamento inicial previsto pelos gestores do projeto."
    ],
    "answer": 0,
    "explanation": "A maior fatia dos gastos em software ocorre após o lançamento (manutenção corretiva, adaptativa e evolutiva). A principal pergunta arquitetural não é se funciona hoje, mas o quão seguro e barato será mantê-lo amanhã."
  },
  {
    "id": "s1_q6",
    "category": "Slide 1",
    "topic": "Categorias de Mudança",
    "question": "As mudanças em um sistema costumam ser classificadas em três categorias: Local, Não Local e Arquitetural. Qual é o objetivo de uma boa arquitetura em relação a elas?",
    "options": [
      "A) Promover que a maior parte das mudanças seja arquitetural, garantindo a constante reformulação dos serviços do sistema.",
      "B) Converter todas as mudanças locais em mudanças não locais para distribuir igualmente o esforço de codificação na equipe.",
      "C) Restringir a maioria das mudanças futuras à categoria Local (afetando um único elemento), que é a mais barata e segura de realizar.",
      "D) Eliminar qualquer necessidade de manutenção futura por meio de especificações perfeitamente imutáveis no início do projeto."
    ],
    "answer": 2,
    "explanation": "Mudanças locais afetam apenas um componente isolado (ex: ajustar o cálculo de imposto dentro de um serviço). Boas arquiteturas confinam impactos para que alterações não provoquem efeitos colaterais em cascata."
  },
  {
    "id": "s1_q7",
    "category": "Slide 1",
    "topic": "Peso das Decisões Iniciais",
    "question": "Por que se afirma que 'quanto mais antiga a decisão estrutural, mais ela pesa' no ciclo de vida de um sistema?",
    "options": [
      "A) Porque as linguagens de programação mais antigas tornam os sistemas estruturalmente mais pesados em consumo de memória RAM.",
      "B) Porque decisões tomadas nos estágios iniciais (ex: síncrono/assíncrono, camadas) são difíceis de reverter mais tarde sem provocar efeito cascata.",
      "C) Porque o código-fonte antigo se corrompe gradualmente com o tempo caso não seja recompilado semanalmente.",
      "D) Porque os sistemas operacionais modernos rejeitam a execução de arquiteturas projetadas em versões anteriores."
    ],
    "answer": 1,
    "explanation": "Decisões de base criam raízes em toda a base de código. Corrigir um erro estrutural tardiamente exige refatorar múltiplos subsistemas. Como diz o material: 'Uma implementação, por melhor que seja, não conserta uma decisão estrutural equivocada'."
  },
  {
    "id": "s1_q8",
    "category": "Slide 1",
    "topic": "Caso Knight Capital (2012)",
    "question": "O caso da corretora Knight Capital (2012) é um clássico exemplo do impacto de falhas arquiteturais e operacionais. O que desencadeou o prejuízo de US$ 460 milhões em 45 minutos?",
    "options": [
      "A) Um ataque de ransomware que criptografou o banco de dados principal por falta de chaves de segurança adequadas.",
      "B) O abandono prematuro da arquitetura cliente-servidor em favor de uma rede distribuída sem consenso transacional.",
      "C) A reutilização de uma função antiga desativada há quase uma década somada a um servidor rodando código desatualizado.",
      "D) A escolha incorreta de uma linguagem interpretada que causou lentidão crítica durante o horário de pico da bolsa de valores."
    ],
    "answer": 2,
    "explanation": "Na Knight Capital (2012), código legado inativo foi reativado em um servidor com deploy defasado, inundando a bolsa com ordens incorretas e gerando perda de 460 milhões de dólares em 45 minutos."
  },
  {
    "id": "s1_q9",
    "category": "Slide 1",
    "topic": "Caso Amazon (2002)",
    "question": "Qual foi a diretriz arquitetural mandatória emitida pela liderança da Amazon em 2002 que fundamentou a criação da AWS?",
    "options": [
      "A) Determinar que todas as equipes expusessem dados e funcionalidades estritamente através de interfaces de serviço bem definidas, sem atalhos externos.",
      "B) Exigir que todos os sistemas da organização fossem unificados em um único banco de dados relacional centralizado.",
      "C) Proibir o uso de qualquer tecnologia open-source em favor de ferramentas proprietárias desenvolvidas internamente.",
      "D) Estabelecer que as comunicações entre setores ocorressem exclusivamente através de transferências de arquivos CSV por FTP."
    ],
    "answer": 0,
    "explanation": "O famoso memorando de Jeff Bezos em 2002 exigiu desacoplamento estrito entre times através de interfaces de serviço (APIs), sem acessos diretos a bancos alheios. Essa fundação viabilizou o surgimento da AWS."
  },
  {
    "id": "s1_q10",
    "category": "Slide 1",
    "topic": "Trade-offs e Atributos de Qualidade",
    "question": "O conceito de 'Trade-off' na tomada de decisão arquitetural estabelece que:",
    "options": [
      "A) Uma arquitetura madura consegue maximizar plenamente todos os atributos de qualidade sem qualquer concessão mútua.",
      "B) Cada sistema precisa equilibrar forças concorrentes, pois priorizar um atributo (ex: desempenho, segurança ou modificabilidade) costuma exigir concessões em outros.",
      "C) A equipe técnica deve sempre substituir tecnologias legadas pela ferramenta mais recente disponível no mercado.",
      "D) O arquiteto deve delegar as decisões de desempenho e segurança exclusivamente para os administradores de banco de dados."
    ],
    "answer": 1,
    "explanation": "Não existe arquitetura universalmente perfeita. Cada domínio impõe prioridades: tráfego aéreo exige desempenho rígido; bancos exigem segurança estrita; produtos SaaS priorizam modificabilidade. Cada escolha envolve concessões."
  },
  {
    "id": "s1_q11",
    "category": "Slide 1",
    "topic": "O Papel do Arquiteto",
    "question": "Qual é a responsabilidade central do arquiteto de software no ecossistema de desenvolvimento de um projeto?",
    "options": [
      "A) Escrever o código das rotas HTTP mais complexas e aprovar as solicitações de férias dos programadores juniores.",
      "B) Manter foco no sistema como um todo, equilibrar exigências concorrentes entre partes interessadas, registrar decisões tomadas e justificar seus motivos.",
      "C) Configurar pessoalmente a infraestrutura de cabeamento, roteadores e switches no data center da empresa.",
      "D) Garantir que todas as telas da aplicação utilizem exatamente os mesmos componentes visuais sem alterações."
    ],
    "answer": 1,
    "explanation": "O arquiteto atua no nível macro sistêmico, mediando tensões entre velocidade de entrega e estabilidade técnica, documentando escolhas e assegurando o atendimento aos requisitos de negócio."
  },
  {
    "id": "s1_q12",
    "category": "Slide 1",
    "topic": "Visão dos Stakeholders",
    "question": "O que um Desenvolvedor e um Mantenedor esperam prioritariamente da arquitetura de um sistema?",
    "options": [
      "A) Desenvolvedor quer orçamento livre; Mantenedor quer autonomia para reescrever o sistema em nova linguagem a cada ano.",
      "B) Desenvolvedor quer telas prontas no Figma; Mantenedor quer relatórios financeiros detalhados do custo de infraestrutura.",
      "C) Desenvolvedor quer clareza nas restrições e liberdades para construir sua parte; Mantenedor quer entender rápido o impacto de qualquer mudança anos após o deploy.",
      "D) Ambos desejam que o sistema não possua regras de negócio explícitas no código para facilitar a prototipação rápida."
    ],
    "answer": 2,
    "explanation": "Para o desenvolvedor, a arquitetura delimita suas fronteiras de atuação diária. Para o mantenedor, ela serve de mapa para prever consequências e mitigar riscos em mudanças futuras."
  },
  {
    "id": "s1_q13",
    "category": "Slide 1",
    "topic": "Habilidades do Arquiteto",
    "question": "O material enfatiza que a rotina do arquiteto envolve muita comunicação. Quais são as três habilidades essenciais destacadas na Aula 1?",
    "options": [
      "A) Reunião (compreender o que importa para o cliente), Negociação (conciliar times com interesses opostos) e Tradução (converter requisitos vagos em metas concretas e verificáveis).",
      "B) Programação em C++, Configuração de Servidores Linux e Auditoria Fiscal de Contratos de TI.",
      "C) Desenho Gráfico de Telas, Criação de Bancos de Dados Relacionais e Otimização de Queries SQL.",
      "D) Gestão de Contabilidade, Vendas Consultivas para Clientes Externos e Suporte Técnico ao Usuário."
    ],
    "answer": 0,
    "explanation": "As habilidades centrais são interpessoais e conceituais: ouvir o cliente (Reunião), alinhar interesses divergentes entre equipes (Negociação) e transformar 'o sistema deve ser rápido' em métricas mensuráveis como 'tempo de resposta < 200ms' (Tradução)."
  },
  {
    "id": "s1_q14",
    "category": "Slide 1",
    "topic": "Decisão Compartilhada",
    "question": "Por que se afirma que o arquiteto de software 'não decide sozinho' as diretrizes do sistema?",
    "options": [
      "A) Porque ele necessita do apoio multidisciplinar de especialistas como o DBA (fluxo de dados), Analista de Segurança/Desempenho e Engenheiro de Testes (mapa de testes).",
      "B) Porque todas as decisões técnicas precisam ser submetidas a uma votação unânime de todos os funcionários da empresa.",
      "C) Porque o arquiteto não possui autonomia técnica para alterar a estrutura do código sem autorização jurídica prévia.",
      "D) Porque a definição das camadas lógicas é uma atribuição exclusiva dos usuários finais do sistema."
    ],
    "answer": 0,
    "explanation": "A tomada de decisão arquitetural é colaborativa: DBAs garantem coerência nos dados, analistas verificam segurança/desempenho e engenheiros de teste estruturam estratégias de validação baseadas na arquitetura."
  },
  {
    "id": "s1_q15",
    "category": "Slide 1",
    "topic": "Analogia da Construção Civil",
    "question": "Na analogia entre a construção de uma casa e a construção de um software, qual é o paralelo correto?",
    "options": [
      "A) A mobília interna da casa equivale à arquitetura de software, enquanto as paredes mestras equivalem ao layout CSS.",
      "B) Assim como o arquiteto da casa projeta cômodos, fiação, tubulação e estrutura, o arquiteto de software define divisão em partes, comunicação e responsabilidades.",
      "C) A pintura externa da casa corresponde às camadas de banco de dados, enquanto o telhado corresponde às regras de negócio.",
      "D) Não existe correspondência conceitual, pois o software não possui limites físicos nem restrições de custo de manutenção."
    ],
    "answer": 1,
    "explanation": "Na construção civil, as fundações, encanamento e paredes definem o esqueleto que torna a casa funcional. No software, as divisões de módulos, protocolos e responsabilidades formam o esqueleto sustentador."
  },
  {
    "id": "s1_q16",
    "category": "Slide 1",
    "topic": "Conclusão da Aula 1",
    "question": "Qual é a conclusão fundamental sobre a presença da arquitetura em sistemas de software?",
    "options": [
      "A) A arquitetura só passa a existir a partir do momento em que a equipe publica diagramas formais na documentação.",
      "B) Sistemas construídos em monolitos simples não possuem nenhuma arquitetura de software intrínseca.",
      "C) A arquitetura existe em todo sistema — documentada conscientemente ou não — e é ela que dita se mudanças futuras serão baratas ou caras.",
      "D) A arquitetura é um conceito aplicável unicamente a sistemas que operam em nuvem pública distribuída."
    ],
    "answer": 2,
    "explanation": "Todo software possui uma estrutura arquitetural resultante das decisões diárias tomadas pela equipe. Se não for pensada deliberadamente, a arquitetura torna-se caótica, encarecendo drasticamente manutenções futuras."
  },
  {
    "id": "s2_q1",
    "category": "Slide 2",
    "topic": "Domínios Clássicos de Software",
    "question": "Quais são os quatro domínios clássicos de aplicação de software abordados na Aula 2?",
    "options": [
      "A) Software de Sistema, Software de Aplicação, Engenharia/Científico e Software Embarcado.",
      "B) Frontend SPA, Backend REST, Banco de Dados Relacional e Fila de Mensageria.",
      "C) Sistemas Monolíticos, Microsserviços Distribuídos, Servidores Serverless e Redes P2P.",
      "D) Desenvolvimento Web, Aplicativos Móveis Nativos, Inteligência Artificial e DevOps."
    ],
    "answer": 0,
    "explanation": "A Aula 2 categoriza os domínios tradicionais em: Software de Sistema (OS/compiladores), Software de Aplicação (negócios/acadêmico), Engenharia e Científico (cálculos/simulações) e Software Embarcado (hardware integrado)."
  },
  {
    "id": "s2_q2",
    "category": "Slide 2",
    "topic": "Software de Sistema",
    "question": "Qual é a principal preocupação e característica marcante do 'Software de Sistema' (ex: drivers, sistemas operacionais, javac)?",
    "options": [
      "A) Priorizar formulários web dinâmicos e garantir integração com redes sociais.",
      "B) Atender outros programas na base da computação; falhas neste nível costumam derrubar tudo que depende dele acima.",
      "C) Processar regras contábeis complexas e gerar relatórios financeiros para clientes finais.",
      "D) Operar exclusivamente em navegadores web através de interfaces reativas com JavaScript."
    ],
    "answer": 1,
    "explanation": "Softwares de sistema formam o alicerce operacional (SO, drivers, compiladores). Uma falha crítica nessa camada invalida e interrompe todas as aplicações de nível superior."
  },
  {
    "id": "s2_q3",
    "category": "Slide 2",
    "topic": "Engenharia e Científico",
    "question": "O que priorizam essencialmente os softwares do domínio 'Engenharia e Científico' (ex: meteorologia, análise de estresse automotivo)?",
    "options": [
      "A) Interface visual simplificada e baixo consumo de armazenamento em disco.",
      "B) Alta velocidade de entrega de MVPs com tolerância a imprecisões numéricas nos cálculos.",
      "C) Desempenho computacional bruto e corretude matemática rigorosa acima de tudo.",
      "D) Suporte massivo a milhares de conexões concorrentes simultâneas em servidores web."
    ],
    "answer": 2,
    "explanation": "Esse domínio lida com processamento matemático intensivo, simulações físicas e cálculos estruturais onde qualquer erro de precisão pode invalidar pesquisas ou causar desastres."
  },
  {
    "id": "s2_q4",
    "category": "Slide 2",
    "topic": "Software Embarcado",
    "question": "Qual das alternativas caracteriza adequadamente o 'Software Embarcado' (ex: freio ABS, micro-ondas, piloto automático)?",
    "options": [
      "A) Aplicações web hospedadas em contêineres que escalam dinamicamente na nuvem.",
      "B) Softwares instalados em computadores pessoais para edição de documentos e planilhas.",
      "C) Sistemas que rodam integrados a produtos físicos, convivendo com restrição de memória/processamento e prazos de resposta rígidos.",
      "D) Bibliotecas de estilização CSS utilizadas para ajustar interfaces em múltiplos dispositivos."
    ],
    "answer": 2,
    "explanation": "Software embarcado opera diretamente no hardware de dispositivos físicos. Restrições severas de hardware e resposta em tempo real estrito (como acionar freios em milissegundos) são suas marcas registradas."
  },
  {
    "id": "s2_q5",
    "category": "Slide 2",
    "topic": "Domínios Recentes",
    "question": "Quais são os três domínios de aplicação mais recentes destacados na Aula 2?",
    "options": [
      "A) Mainframe, Terminais de Linha de Comando e Aplicações Batch Noturnas.",
      "B) Linha de Produtos, Web e Móvel, e Inteligência Artificial.",
      "C) Bancos de Dados SQL, Bancos NoSQL e Protocolos de Transferência SOAP.",
      "D) Microsserviços Java, APIs Node.js e Aplicações Desktop Delphi."
    ],
    "answer": 1,
    "explanation": "Os três domínios contemporâneos apresentados são: Linha de Produtos (reaproveitamento com parametrização), Web e Móvel (alta escala de usuários) e Inteligência Artificial (fluxo de dados e treinamento)."
  },
  {
    "id": "s2_q6",
    "category": "Slide 2",
    "topic": "Linha de Produtos de Software",
    "question": "No contexto da Engenharia de Software, o que caracteriza uma 'Linha de Produtos' (ex: cardápio genérico parametrizável)?",
    "options": [
      "A) Desenvolver um código completamente novo do zero para cada cliente contratante.",
      "B) Criar componentes reutilizáveis para atender vários clientes, equilibrando reaproveitamento de código com parametrizações individuais.",
      "C) Um sistema de controle de versão que gerencia exclusivamente bibliotecas em C++.",
      "D) Um padrão de design visual focado em interfaces gráficas para e-commerce."
    ],
    "answer": 1,
    "explanation": "Linha de Produtos de Software visa eficiência econômica ao estruturar um núcleo comum de código que pode ser configurado e customizado para diferentes variantes de clientes."
  },
  {
    "id": "s2_q7",
    "category": "Slide 2",
    "topic": "Hibridismo nos Sistemas Reais",
    "question": "Qual é a constatação da Aula 2 sobre a classificação dos sistemas reais nesses 7 domínios?",
    "options": [
      "A) Todo software comercial do mundo real enquadra-se de forma pura e exclusiva em apenas um dos sete domínios.",
      "B) Sistemas reais raramente são puros; um app bancário, por exemplo, mescla Web/Móvel, Software de Aplicação e IA (biometria/antifraude).",
      "C) Os sistemas modernos devem evitar a mistura de domínios para não violar os padrões da UML.",
      "D) O domínio de um software é determinado unicamente pelo sistema operacional em que ele é executado."
    ],
    "answer": 1,
    "explanation": "Aplicações corporativas complexas são híbridas: um banco digital integra interface móvel, regras contábeis no backend, inteligência artificial para detecção de fraudes e módulos de segurança."
  },
  {
    "id": "s2_q8",
    "category": "Slide 2",
    "topic": "Níveis de Abstração",
    "question": "Por que a compreensão de um software exige a utilização de diferentes 'níveis de abstração'?",
    "options": [
      "A) Porque um sistema real é complexo demais para ser apreendido de uma só vez; abstrair permite escolher a quantidade de detalhe adequada para cada momento.",
      "B) Porque os compiladores não conseguem interpretar projetos que não possuam quatro níveis de diagramas associados.",
      "C) Para impedir que desenvolvedores juniores acessem o código das camadas de persistência.",
      "D) Porque a documentação de arquitetura é voltada exclusivamente para os clientes leigos da empresa."
    ],
    "answer": 0,
    "explanation": "A mente humana lida com complexidade através de zoom conceitual: assim como usamos mapa-múndi, mapa de tráfego urbano e planta de imóvel para propósitos distintos, o software requer diferentes níveis de visão."
  },
  {
    "id": "s2_q9",
    "category": "Slide 2",
    "topic": "O Modelo C4",
    "question": "Quem criou o Modelo C4 e qual é a analogia central utilizada para descrever esse modelo de documentação?",
    "options": [
      "A) Martin Fowler; analogia de uma linha de montagem industrial com robôs.",
      "B) Simon Brown; analogia de um mapa com múltiplos níveis de zoom progressivo (Contexto, Contêiner, Componente e Código).",
      "C) Erich Gamma; analogia de um jogo de xadrez onde cada peça possui movimentos fixos.",
      "D) Robert Martin; analogia de um castelo medieval com muralhas concêntricas de proteção."
    ],
    "answer": 1,
    "explanation": "Simon Brown propôs o modelo C4 comparando a arquitetura ao Google Maps, no qual cada nível de zoom adiciona detalhes técnicos específicos enquanto oculta o panorama mais amplo."
  },
  {
    "id": "s2_q10",
    "category": "Slide 2",
    "topic": "C4 - Nível 1: Contexto",
    "question": "O que é exibido no Nível 1 (Contexto) do modelo C4?",
    "options": [
      "A) As tabelas do banco de dados relacional e seus relacionamentos de chave estrangeira.",
      "B) O sistema em foco como uma caixa-preta no centro, relacionando-se com usuários (personas) e sistemas externos.",
      "C) As classes de serviço internas e seus respectivos métodos de injeção de dependência.",
      "D) A configuração dos servidores proxy reversos e balanceadores de carga NGINX."
    ],
    "answer": 1,
    "explanation": "O diagrama de Contexto adota uma visão panorâmica: ilustra quem usa o sistema e com quais outros sistemas ele troca dados, sem abrir detalhes de banco, linguagens ou camadas internas."
  },
  {
    "id": "s2_q11",
    "category": "Slide 2",
    "topic": "C4 - Nível 2: Contêiner",
    "question": "No modelo C4, o que representa conceitualmente um 'Contêiner' (Nível 2)?",
    "options": [
      "A) Exclusivamente uma imagem Docker executada dentro de um cluster gerenciado Kubernetes.",
      "B) Uma variável global do tipo array criada para armazenar objetos em memória.",
      "C) Uma unidade executável ou armazenadora de dados de alto nível (ex: SPA web, App móvel, API backend, Banco de dados).",
      "D) O gabinete físico onde a placa-mãe e as memórias do servidor estão instaladas."
    ],
    "answer": 2,
    "explanation": "No C4, 'Contêiner' refere-se a qualquer subsistema executável ou unidade de armazenamento autônoma (uma SPA React, uma API Spring Boot, um banco MySQL ou uma fila de mensagens)."
  },
  {
    "id": "s2_q12",
    "category": "Slide 2",
    "topic": "C4 - Nível 3: Componente",
    "question": "O que é detalhado ao aplicarmos o zoom no Nível 3 (Componente) do modelo C4?",
    "options": [
      "A) Abre-se um contêiner para revelar seus blocos funcionais internos relevantes e coesos (controladores, serviços, repositórios) e suas interações.",
      "B) Mostra-se o organograma administrativo e os cargos da diretoria da empresa de software.",
      "C) Detalha-se a fiação elétrica e os cabos de fibra ótica conectados ao servidor de banco.",
      "D) Exibe-se o código assembly compilado de cada uma das funções do backend."
    ],
    "answer": 0,
    "explanation": "O nível de Componente disseca um contêiner específico, explicitando seus módulos funcionais coesos e como eles colaboram entre si para realizar as tarefas do contêiner."
  },
  {
    "id": "s2_q13",
    "category": "Slide 2",
    "topic": "C4 - Nível 4: Código",
    "question": "Em relação ao Nível 4 (Código) do modelo C4, qual é a recomendação pedagógica e prática do material?",
    "options": [
      "A) É o nível mais crítico e deve ser desenhado para todas as classes do sistema antes de codificar.",
      "B) É o nível mais detalhado (diagramas de classes), mas nem sempre é exigido, pois o próprio código-fonte atualizado serve como especificação.",
      "C) Deve substituir completamente os níveis de Contexto e Contêiner na documentação do projeto.",
      "D) Só pode ser gerado caso a aplicação utilize linguagens compiladas e tipadas estaticamente."
    ],
    "answer": 1,
    "explanation": "Como o código evolui rapidamente, manter diagramas de classes de todo o sistema gera documentação obsoleta. O Nível 4 é reservado apenas para explicar componentes altamente complexos ou críticos."
  },
  {
    "id": "s2_q14",
    "category": "Slide 2",
    "topic": "Critério de Reversibilidade",
    "question": "Como a Engenharia de Software distingue se uma decisão é 'Arquitetural' ou um 'Detalhe de Implementação'?",
    "options": [
      "A) Pela quantidade de caracteres da linha de comando utilizada para compilar o código.",
      "B) Pelo critério do custo de reversão: quanto mais cara e traumática for para desfazer no futuro, mais alta ela está na abstração e mais arquitetural é.",
      "C) Pela data do calendário em que a decisão técnica foi acordada entre os programadores.",
      "D) Decisões de frontend são sempre detalhes; decisões de banco de dados são sempre arquiteturais."
    ],
    "answer": 1,
    "explanation": "Não há fronteira fixa. O critério definidor é a dificuldade e o custo financeiro/técnico de voltar atrás: escolher monolito vs distribuído é muito arquitetural; nomear uma variável local é detalhe."
  },
  {
    "id": "s2_q15",
    "category": "Slide 2",
    "topic": "Abstração no Código",
    "question": "O material compara a abstração arquitetural a mecanismos comuns de programação. Quais são esses exemplos?",
    "options": [
      "A) Laços de repetição while e comandos de desvio condicional goto.",
      "B) Funções (ocultam algoritmo de ordenação), Classes (encapsulam campos internos) e APIs (escondem servidores atrás de rotas).",
      "C) Comentários no código e instruções de print no console do navegador.",
      "D) Variáveis globais e ponteiros diretos de memória compartilhada."
    ],
    "answer": 1,
    "explanation": "Abstração é uma ferramenta diária: chamamos uma função de ordenação sem reescrever quicksort, usamos classes encapsuladas e consumimos APIs REST. A arquitetura aplica esse mesmo princípio ao sistema como um todo."
  },
  {
    "id": "s2_q16",
    "category": "Slide 2",
    "topic": "Síntese da Aula 2",
    "question": "Qual é a síntese principal apresentada no encerramento da Aula 2?",
    "options": [
      "A) A arquitetura deve focar exclusivamente no nível de classes, pois contêineres e contexto são irrelevantes.",
      "B) O modelo C4 foi substituído integralmente pelos diagramas de banco de dados relacionais.",
      "C) Arquitetura é um conjunto de estruturas; o modelo C4 organiza esse conjunto em 4 degraus de zoom e, quanto mais caro de reverter, mais arquitetural é a decisão.",
      "D) Softwares embarcados e softwares web compartilham rigorosamente as mesmas restrições de memória e hardware."
    ],
    "answer": 2,
    "explanation": "A Aula 2 consolida que um único diagrama não representa um sistema; múltiplos níveis (C4) são necessários para raciocinar sobre as estruturas, com o custo de reversão demarcando o grau arquitetural."
  },
  {
    "id": "s3_q1",
    "category": "Slide 3",
    "topic": "Conceito de Estilo Arquitetural",
    "question": "Como é definido um 'Estilo Arquitetural' na Aula 3?",
    "options": [
      "A) É o guia de estilos visuais de CSS e design tokens utilizado na construção da interface gráfica.",
      "B) É uma forma recorrente de organizar as peças de um sistema, definindo que tipos de peças existem, como se relacionam e que regras seguem no nível macro.",
      "C) É a preferência particular de um desenvolvedor por frameworks de frontend específicos.",
      "D) É a convenção de nomenclatura de variáveis adotada pelo time de desenvolvimento de software."
    ],
    "answer": 1,
    "explanation": "Estilos arquiteturais são formas consagradas de estruturar sistemas em nível macro, estabelecendo as partes, topologias e regras de interação que resolvem classes conhecidas de problemas."
  },
  {
    "id": "s3_q2",
    "category": "Slide 3",
    "topic": "Estilo vs Padrão GoF",
    "question": "Qual é a distinção de escala entre um 'Estilo Arquitetural' e um 'Padrão de Projeto (GoF)'?",
    "options": [
      "A) O estilo opera no nível macro de todo o sistema; o padrão GoF opera no nível micro, resolvendo problemas pontuais dentro de uma peça ou classe.",
      "B) O estilo opera no nível micro de métodos privados; o padrão GoF opera na infraestrutura física de rede dos servidores.",
      "C) Estilos arquiteturais e padrões GoF são conceitos exatamente idênticos e intercambiáveis na literatura.",
      "D) Padrões GoF só podem ser aplicados em arquiteturas monolíticas, sendo proibidos em sistemas distribuídos."
    ],
    "answer": 0,
    "explanation": "Um sistema adota um estilo macro (ex: cliente-servidor ou pub-sub), enquanto em seus módulos internos os desenvolvedores aplicam dezenas de padrões micro GoF (Factory, Observer, Strategy, Singleton)."
  },
  {
    "id": "s3_q3",
    "category": "Slide 3",
    "topic": "Estilo Monolítico",
    "question": "Como se define o estilo 'Monolítico' e qual analogia foi utilizada para representá-lo?",
    "options": [
      "A) Várias máquinas autônomas trocando mensagens assíncronas; analogia dos correios.",
      "B) Toda a lógica do sistema vive em uma única unidade de código, compilada e implantada como um bloco só; analogia do Canivete Suíço.",
      "C) Rede descentralizada onde todos compartilham blocos de arquivos; analogia da biblioteca pública.",
      "D) Sequência de filtros em linha de comando; analogia da estação de tratamento de água."
    ],
    "answer": 1,
    "explanation": "O monólito reúne toda a aplicação num único executável (como um canivete suíço: todas as ferramentas integradas em um só corpo, prático de transportar, mas onde alterar uma lâmina afeta todo o objeto)."
  },
  {
    "id": "s3_q4",
    "category": "Slide 3",
    "topic": "Monólito: Prós e Riscos",
    "question": "Quais são, respectivamente, o ponto forte e os riscos típicos do estilo Monolítico?",
    "options": [
      "A) Ponto forte: simplicidade de deploy e início de projeto; Riscos: deploys arriscados no crescimento, dificuldade de escalar partes isoladas e acoplamento crescente.",
      "B) Ponto forte: resiliência total contra falhas de rede; Riscos: impossibilidade de utilizar bancos relacionais SQL.",
      "C) Ponto forte: divisão natural em dezenas de repositórios; Riscos: latência excessiva nas chamadas HTTP locais.",
      "D) Ponto forte: independência total entre desenvolvedores; Riscos: ausência de suporte a testes automatizados."
    ],
    "answer": 0,
    "explanation": "Monólitos facilitam a inicialização de produtos e testes rápidos. Contudo, conforme o sistema ganha escala, fazer deploys parciais ou escalar apenas um módulo sobrecarregado torna-se desafiador."
  },
  {
    "id": "s3_q5",
    "category": "Slide 3",
    "topic": "Caso Shopify (Monólito Modular)",
    "question": "Como a Shopify processa bilhões de dólares em vendas mantendo o núcleo do seu sistema como um monólito?",
    "options": [
      "A) Quebrou sua aplicação em milhares de funções AWS Lambda sem estado.",
      "B) Adotou a disciplina de 'Monólito Modular' em Ruby on Rails, organizando fronteiras internas rígidas entre módulos sem dividi-los em serviços separados.",
      "C) Reescreveu todo o sistema em linguagem assembly para operar em um único supercomputador.",
      "D) Migrou toda a sua lógica de negócio para procedures executadas dentro do banco Oracle."
    ],
    "answer": 1,
    "explanation": "A Shopify demonstrou que um monólito disciplinado ('Monólito Modular') preserva a agilidade de desenvolvimento sem introduzir a complexidade de rede e orquestração de microsserviços."
  },
  {
    "id": "s3_q6",
    "category": "Slide 3",
    "topic": "Estilo Cliente-Servidor",
    "question": "No estilo Cliente-Servidor, qual é o papel de cada parte e qual analogia foi utilizada?",
    "options": [
      "A) O cliente fornece os dados em lote e o servidor gera os relatórios gráficos; analogia da fábrica de automóveis.",
      "B) O cliente inicia a comunicação requisitando um serviço e o servidor aguarda e responde; analogia do Restaurante (cliente pede, cozinha atende).",
      "C) Ambos atuam como produtores de eventos independentes em tópicos de mensageria; analogia da transmissão de rádio FM.",
      "D) Não existe divisão de responsabilidades, pois todas as instâncias processam as mesmas rotinas; analogia da cooperativa."
    ],
    "answer": 1,
    "explanation": "O estilo baseia-se na assimetria de papéis: clientes solicitam ativamente serviços e o servidor centraliza os recursos e processa as respostas (como o fluxo entre cliente e cozinha no restaurante)."
  },
  {
    "id": "s3_q7",
    "category": "Slide 3",
    "topic": "Caso DNS (Cliente-Servidor)",
    "question": "Por que o protocolo DNS da Internet é considerado um exemplo clássico do estilo Cliente-Servidor?",
    "options": [
      "A) Porque o computador cliente faz uma consulta (nome de domínio), o servidor responde com o IP e a troca encerra sem guardar estado (stateless).",
      "B) Porque ele mantém uma conexão de streaming contínua aberta com o navegador do usuário.",
      "C) Porque ele divide o arquivo do site em pequenos pedaços distribuídos entre todos os roteadores.",
      "D) Porque ele exige que o cliente processe metade das regras criptográficas em segundo plano."
    ],
    "answer": 0,
    "explanation": "O DNS opera em requisição-resposta sem retenção de estado: uma consulta gera uma resposta imediata e a interação é finalizada, sem dependência de consultas anteriores."
  },
  {
    "id": "s3_q8",
    "category": "Slide 3",
    "topic": "Estilo Distribuído",
    "question": "Quais são as características fundamentais e os desafios do estilo 'Distribuído'?",
    "options": [
      "A) Roda em uma única máquina virtual; o desafio é a quantidade de núcleos de processador suportados.",
      "B) Roda em várias máquinas que se coordenam para agir como um todo; os desafios incluem atraso de rede (latência), falhas parciais e consistência de dados.",
      "C) Armazena arquivos em fitas magnéticas; o desafio é a velocidade mecânica de leitura dos dados.",
      "D) Não utiliza comunicação em rede, sendo restrito a comunicações via portas seriais de hardware."
    ],
    "answer": 1,
    "explanation": "Sistemas distribuídos dividem processamento e aumentam resiliência, mas introduzem desafios inerentes de rede: latência variável, nós indisponíveis e dificuldade em sincronizar dados consistentes."
  },
  {
    "id": "s3_q9",
    "category": "Slide 3",
    "topic": "Caso Discord (Distribuído)",
    "question": "Como a arquitetura distribuída do Discord sustenta milhões de usuários conectados em tempo real?",
    "options": [
      "A) Gravando todo o histórico de conversas em arquivos de texto compartilhados via NFS.",
      "B) Utilizando um cluster de centenas de nós Elixir/Erlang, onde cada canal de conversa é um processo leve isolado coordenado entre nós.",
      "C) Exigindo que cada usuário instale um servidor dedicado em sua própria máquina residencial.",
      "D) Agrupando as mensagens em lotes enviados uma única vez a cada 10 minutos."
    ],
    "answer": 1,
    "explanation": "O Discord utiliza a máquina virtual BEAM (Erlang/Elixir), criando processos ultraleves por canal de voz/chat distribuídos em clusters altamente escaláveis e tolerantes a falhas."
  },
  {
    "id": "s3_q10",
    "category": "Slide 3",
    "topic": "Estilo Ponto a Ponto (P2P)",
    "question": "No estilo Ponto a Ponto (P2P), qual é o papel desempenhado por cada nó (peer)?",
    "options": [
      "A) Todos os nós atuam estritamente como clientes submissos a um servidor mainframe central.",
      "B) Não existe servidor central obrigatório; cada nó atua simultaneamente como cliente e como servidor, consumindo e fornecendo recursos.",
      "C) Um nó é eleito permanentemente como dono dos arquivos e os demais apenas visualizam.",
      "D) A comunicação ocorre apenas quando todos os participantes estão fisicamente na mesma rede local cabeada."
    ],
    "answer": 1,
    "explanation": "Em redes P2P (como na troca de livros entre vizinhos), não há dependência de um servidor central para a entrega de conteúdo: cada nó compartilha e consome dados simultaneamente."
  },
  {
    "id": "s3_q11",
    "category": "Slide 3",
    "topic": "Caso BitTorrent (P2P)",
    "question": "No protocolo BitTorrent, qual é a função do 'Rastreador' (Tracker) e o que ocorre quando um nó se torna uma 'Seed'?",
    "options": [
      "A) O rastreador armazena o arquivo completo e a seed é quem requisita o download inicial.",
      "B) O rastreador ajuda os peers a se encontrarem (sem trafegar arquivos), e a seed é quem possui o arquivo completo e passa a distribuí-lo, acelerando a rede.",
      "C) O rastreador bloqueia conexões simultâneas e a seed é o servidor que cobra assinaturas.",
      "D) O rastreador converte arquivos de vídeo e a seed é o player que renderiza a imagem."
    ],
    "answer": 1,
    "explanation": "O Tracker atua apenas como facilitador de contato entre peers. Os dados trafegam de nó para nó, e quem conclui o download vira seed (fonte), aumentando a velocidade global da rede."
  },
  {
    "id": "s3_q12",
    "category": "Slide 3",
    "topic": "Estilo Publicador-Assinante",
    "question": "Como se estabelece a comunicação no estilo Publicador-Assinante (Pub-Sub)?",
    "options": [
      "A) O emissor publica mensagens em um canal intermediário (tópico/broker) e os interessados se inscrevem para receber, sem que o emissor precise conhecê-los.",
      "B) O emissor chama diretamente as rotas de cada receptor de maneira síncrona e bloqueante.",
      "C) Os receptores consultam o banco de dados periodicamente via pooling a cada segundo.",
      "D) As mensagens são transmitidas obrigatoriamente através de cabos de fibra ótica ponto a ponto dedicados."
    ],
    "answer": 0,
    "explanation": "O Pub-Sub desacopla temporal e espacialmente emissores de receptores: o publicador emite o evento no broker (ex: RabbitMQ/Kafka) e segue adiante sem saber quem reagirá a ele."
  },
  {
    "id": "s3_q13",
    "category": "Slide 3",
    "topic": "Caso Cientista Sem Jaleco (Pub-Sub)",
    "question": "Na aplicação 'Cientista Sem Jaleco', como o Pub-Sub é utilizado no fluxo de mentoria?",
    "options": [
      "A) O frontend React dispara requisições SMTP diretas para a caixa postal do aluno.",
      "B) Ao registrar interesse, o serviço publica uma mensagem no broker RabbitMQ e um consumidor assíncrono envia o e-mail sem travar a resposta da API ao usuário.",
      "C) O banco de dados trava as tabelas até que o envio do e-mail seja confirmado pelo servidor de correio.",
      "D) O fastify BFF envia o e-mail síncrono e aguarda 10 segundos pela confirmação do destinatário."
    ],
    "answer": 1,
    "explanation": "O RabbitMQ desacopla o disparo de e-mails da resposta ao usuário: a requisição HTTP é respondida em milissegundos enquanto o consumidor processa o e-mail em segundo plano."
  },
  {
    "id": "s3_q14",
    "category": "Slide 3",
    "topic": "Estilo Pipes e Filtros",
    "question": "Como é estruturado o fluxo de dados no estilo Pipes e Filtros?",
    "options": [
      "A) O processamento é dividido em etapas independentes (filtros), onde cada filtro recebe dados, aplica sua transformação e passa a saída adiante através de canais (pipes).",
      "B) Os dados são gravados em uma tabela única de banco e consultados por funções recursivas aleatórias.",
      "C) As tarefas são executadas sem ordem pré-definida em threads compartilhadas na memória.",
      "D) As mensagens são transmitidas em broadcast para todos os nós da rede sem transformação."
    ],
    "answer": 0,
    "explanation": "Pipes & Filtros opera em fluxo sequencial: cada filtro é uma etapa autocontida que processa dados e os envia pelo pipe à próxima etapa (como numa estação de tratamento de água)."
  },
  {
    "id": "s3_q15",
    "category": "Slide 3",
    "topic": "Exemplos de Pipes e Filtros",
    "question": "Quais são dois exemplos clássicos de aplicação do estilo Pipes e Filtros citados na Aula 3?",
    "options": [
      "A) O protocolo HTTPS e o navegador Mozilla Firefox.",
      "B) A linha de comando Unix (`grep | cut | sort | uniq`) e as etapas de um compilador (Lexer -> Parser -> Gerador de Código).",
      "C) Os bancos de dados relacioanais e os drivers JDBC.",
      "D) O servidor Apache Tomcat e as páginas estáticas HTML."
    ],
    "answer": 1,
    "explanation": "No terminal Unix, encadeamos programas autônomos com o operador `|`. Em compiladores, o código passa sequencialmente pelo analisador léxico, sintático e pelo gerador de código."
  },
  {
    "id": "s3_q16",
    "category": "Slide 3",
    "topic": "Comparativo dos Estilos",
    "question": "Qual é a correspondência correta de pontos fortes dos estilos Monolítico, Distribuído e Publicador-Assinante?",
    "options": [
      "A) Monolítico: simplicidade de deploy; Distribuído: escala e resiliência; Pub-Sub: baixo acoplamento.",
      "B) Monolítico: ausência de testes; Distribuído: baixo custo de hardware; Pub-Sub: comunicação síncrona.",
      "C) Monolítico: descentralização total; Distribuído: simplicidade de configuração; Pub-Sub: acoplamento rígido.",
      "D) Monolítico: facilidade de micro-deploy; Distribuído: 1 processo único; Pub-Sub: eliminação de brokers."
    ],
    "answer": 0,
    "explanation": "Conforme a tabela resumo da Aula 3: Monolito brilha pela simplicidade de deploy; Distribuído pela escalabilidade/resiliência; e Pub-Sub pelo forte desacoplamento entre produtores e consumidores."
  },
  {
    "id": "s4_q1",
    "category": "Slide 4",
    "topic": "O Código que Faz Tudo",
    "question": "Qual é o perigo de concentrar validações de regras de negócio, queries SQL e formatação de tela dentro do manipulador 'onclick' de um botão?",
    "options": [
      "A) O código passa a ser compilado duas vezes mais rápido pelo navegador.",
      "B) Funciona no início, mas qualquer mudança de layout arrisca quebrar regras de negócio, e mudanças no banco quebram múltiplas telas sem aviso.",
      "C) O navegador web passa a exigir obrigatoriamente autenticação de dois fatores.",
      "D) As regras de negócio tornam-se automaticamente acessíveis via APIs REST externas."
    ],
    "answer": 1,
    "explanation": "O código espaguete sem camadas cria dependências cruzadas frágeis: alterar um botão visual ou mudar o nome de uma coluna no banco quebra lógicas críticas de negócio misturadas na tela."
  },
  {
    "id": "s4_q2",
    "category": "Slide 4",
    "topic": "As Três Camadas Clássicas",
    "question": "Quais são as três camadas lógicas clássicas de um sistema e suas respectivas responsabilidades?",
    "options": [
      "A) Header, Body e Footer em páginas web HTML.",
      "B) Apresentação (lida com o usuário e traduz entrada/saída), Domínio (regras de negócio e decisões) e Dados (salva e busca no armazenamento sem decidir regras).",
      "C) Windows, Linux e macOS no ambiente operacional.",
      "D) Roteador, Switch e Modem na infraestrutura física de rede."
    ],
    "answer": 1,
    "explanation": "A divisão clássica separa: Apresentação (UI / controllers), Domínio (serviços de negócio / validações) e Dados (repositórios / persistência)."
  },
  {
    "id": "s4_q3",
    "category": "Slide 4",
    "topic": "Fluxo do Pedido de Compra",
    "question": "No processamento de um Pedido de Compra em uma arquitetura de 3 camadas, o que cabe a cada camada?",
    "options": [
      "A) Apresentação grava direto no MySQL; Domínio cria o layout CSS; Dados valida o limite de crédito do cliente.",
      "B) Apresentação recebe dados e confere o formato; Domínio verifica estoque, calcula valores e valida regras; Dados grava a informação sem saber por que o pedido foi aprovado.",
      "C) Dados decide se o desconto é válido antes de repassar para a Apresentação renderizar o botão.",
      "D) Todas as três camadas executam a mesma transação SQL concorrentemente para garantir redundância."
    ],
    "answer": 1,
    "explanation": "Cada camada responde a uma pergunta sobre o mesmo pedido: Apresentação ('o formato está certo?'), Domínio ('a regra permite?') e Dados ('onde e como isso fica armazenado?')."
  },
  {
    "id": "s4_q4",
    "category": "Slide 4",
    "topic": "Testabilidade e Manutenibilidade",
    "question": "Por que a arquitetura em camadas bem definidas torna o sistema mais fácil de testar e manter?",
    "options": [
      "A) Porque permite isolar a camada de domínio para testar regras de negócio sem depender de banco ou tela, e direciona bugs de negócio ao lugar certo.",
      "B) Porque elimina integralmente a necessidade de criar testes automatizados de integração.",
      "C) Porque faz o código-fonte rodar com o dobro de desempenho em qualquer computador.",
      "D) Porque converte erros fatais de execução em mensagens de aviso imperceptíveis."
    ],
    "answer": 0,
    "explanation": "Ao isolar as regras no Domínio, podemos criar testes unitários rápidos com mocks de dados, sem precisar conectar em bancos reais ou carregar telas gráficas pesadas."
  },
  {
    "id": "s4_q5",
    "category": "Slide 4",
    "topic": "Independência de Mudança",
    "question": "O que significa na prática o ganho 'Nem tudo precisa mudar junto' na arquitetura em camadas?",
    "options": [
      "A) Apresentação muda quando a tela muda; Domínio muda quando as regras de negócio mudam; Dados muda quando o armazenamento muda, sem efeito cascata desnecessário.",
      "B) Os desenvolvedores da equipe podem trabalhar em turnos e horários totalmente alternados.",
      "C) As tabelas do banco de dados relacional nunca precisarão ser alteradas no futuro.",
      "D) O frontend não necessita conhecer o endereço IP ou a URL da API backend."
    ],
    "answer": 0,
    "explanation": "A separação de preocupações isola os motivos de mudança: migrar de banco relacional para NoSQL altera a camada de Dados, preservando integralmente as regras do Domínio e os layouts da tela."
  },
  {
    "id": "s4_q6",
    "category": "Slide 4",
    "topic": "Redução de Acoplamento",
    "question": "Como a arquitetura em camadas reduz o acoplamento e qual analogia foi utilizada na Aula 4?",
    "options": [
      "A) Aumentando a quantidade de arquivos para pulverizar o código; analogia da biblioteca.",
      "B) Limitando a dependência entre as partes por meio de interfaces bem definidas; analogia da tomada elétrica padronizada (o aparelho se conecta sem saber o que há por trás).",
      "C) Proibindo a troca de mensagens entre componentes; analogia da muralha impenetrável.",
      "D) Forçando o compartilhamento de variáveis globais estáticas; analogia da rede de pesca."
    ],
    "answer": 1,
    "explanation": "Baixo acoplamento significa que as camadas dialogam através de contratos e interfaces estáveis (como um plugue de tomada padronizado que não precisa saber como a usina gera eletricidade)."
  },
  {
    "id": "s4_q7",
    "category": "Slide 4",
    "topic": "Coesão e Teste da Frase",
    "question": "O que é Coesão e qual é a técnica prática citada na Aula 4 para testar se uma unidade de código é coesa?",
    "options": [
      "A) Coesão é o número de linhas de código; o teste é manter arquivos abaixo de 100 linhas.",
      "B) Coesão é organizar cada camada em torno de sua responsabilidade; o teste é tentar descrever o que a unidade faz numa frase só sem usar a conjunção 'E'.",
      "C) Coesão é a velocidade de resposta do banco de dados; o teste é medir o tempo de ping.",
      "D) Coesão é padronizar os nomes de métodos usando prefixos idênticos em todas as classes."
    ],
    "answer": 1,
    "explanation": "Alta coesão significa foco temático. Se para descrever uma classe você precisa dizer 'ela valida o usuário, E calcula o juros, E grava no banco, E gera o PDF', ela tem baixa coesão (faz coisas demais)."
  },
  {
    "id": "s4_q8",
    "category": "Slide 4",
    "topic": "Erros Comuns de Adoção",
    "question": "Quais são os erros comuns de adoção destacados na Aula 4 a respeito da divisão em camadas?",
    "options": [
      "A) 'Mais partes não basta' (quebrar em 5 partes amarradas não resolve nada) e 'Zero comunicação' (baixo acoplamento não é isolamento total, as partes precisam colaborar).",
      "B) Escrever documentação em português e utilizar arquiteturas monolíticas modulares.",
      "C) Adotar testes unitários automatizados em aplicações com menos de 1000 usuários.",
      "D) Utilizar injeção de dependências em projetos com mais de duas camadas lógicas."
    ],
    "answer": 0,
    "explanation": "Criar muitas pastas e classes não ajuda se todas continuarem rigidamente dependentes entre si. Além disso, baixo acoplamento requer colaboração fluida e contratos claros, não isolamento hermético."
  },
  {
    "id": "s4_q9",
    "category": "Slide 4",
    "topic": "Camada Lógica vs Camada Física",
    "question": "Qual é a distinção conceitual entre 'Camada Lógica' e 'Camada Física' (Tier)?",
    "options": [
      "A) Camada lógica é o hardware do servidor; camada física é o banco de dados NoSQL.",
      "B) Camada Lógica é a organização de responsabilidades no código (Apresentação, Domínio, Dados); Camada Física é onde cada camada roda de fato (em qual processo, máquina ou contêiner).",
      "C) Camada lógica aplica-se exclusivamente a monólitos; camada física aplica-se a microsserviços.",
      "D) Camada física refere-se aos diagramas UML; camada lógica refere-se aos testes manuais."
    ],
    "answer": 1,
    "explanation": "Camada Lógica = divisão estrutural do código-fonte. Camada Física (Tier) = infraestrutura de runtime e processos em que o código é implantado e executado."
  },
  {
    "id": "s4_q10",
    "category": "Slide 4",
    "topic": "Camadas nos Estilos de Deploy",
    "question": "Como as três camadas lógicas se agrupam fisicamente nos estilos Monolítico, Cliente-Servidor e Distribuído?",
    "options": [
      "A) Monolítico: 3 processos; Cliente-Servidor: 1 processo; Distribuído: 0 processos.",
      "B) Monolítico: as 3 camadas rodam em um processo só; Cliente-Servidor: apresentação separada do servidor (2 processos); Distribuído: cada camada pode virar serviços independentes (3+ processos).",
      "C) Todos os três estilos exigem obrigatoriamente a mesma topologia de exatamente cinco servidores físicos.",
      "D) No estilo distribuído as camadas lógicas são eliminadas em favor de funções serverless sem regras."
    ],
    "answer": 1,
    "explanation": "As camadas lógicas conceituais (Apresentação, Domínio, Dados) são idênticas; o que varia de estilo para estilo é a sua alocação em processos de execução físicos (1 processo, 2 processos ou 3+ processos)."
  },
  {
    "id": "s4_q11",
    "category": "Slide 4",
    "topic": "Camadas Abertas vs Fechadas",
    "question": "Qual é a diferença funcional entre uma arquitetura de camadas 'Fechada' e uma 'Aberta'?",
    "options": [
      "A) Fechada exige autenticação por senha; Aberta é de domínio público e código aberto.",
      "B) Na Fechada, cada chamada é obrigada a passar pela camada imediatamente abaixo sem pular; na Aberta, uma camada pode pular intermediários para acessar diretamente uma camada inferior.",
      "C) Fechada roda apenas em sistemas Windows; Aberta roda exclusivamente em Linux.",
      "D) Na Fechada não existem bancos relacionais; na Aberta existem múltiplos bancos de dados."
    ],
    "answer": 1,
    "explanation": "Camada Fechada: Apresentação -> Domínio -> Dados (padronizado e seguro). Camada Aberta: Apresentação acessa Dados diretamente para consultas rápidas (trade-off: ganha desempenho/simplicidade, mas arrisca acoplamento)."
  },
  {
    "id": "s4_q12",
    "category": "Slide 4",
    "topic": "Camadas em Monólitos Grandes",
    "question": "Por que a disciplina de camadas é indispensável mesmo dentro de um monólito de grande porte?",
    "options": [
      "A) Porque os compiladores se recusam a gerar executáveis monolíticos com mais de 500 linhas sem camadas.",
      "B) Porque um monólito com milhões de linhas só continua manutenível se tiver disciplina de camadas e fronteiras internas claras no código, independente de rodar num só processo.",
      "C) Apenas para permitir que o monólito utilize certificados de segurança SSL.",
      "D) Porque monólitos sem camadas não conseguem se conectar a bancos de dados relacionais."
    ],
    "answer": 1,
    "explanation": "Camada é, antes de tudo, uma decisão sobre como o código se organiza. Em monólitos gigantes, a falta de disciplina cria acoplamentos caóticos que inviabilizam a manutenção do software."
  },
  {
    "id": "s4_q13",
    "category": "Slide 4",
    "topic": "Anti-padrão: Apresentação Inteligente",
    "question": "Como se manifesta o anti-padrão 'Apresentação Inteligente' (Smart UI)?",
    "options": [
      "A) A interface utiliza inteligência artificial generativa para desenhar botões automaticamente.",
      "B) A camada de apresentação assume regras de negócio, validações críticas e até chamadas de dados diretas, esvaziando o papel do domínio.",
      "C) A interface web possui layout 100% responsivo e tempo de carregamento inferior a 1 segundo.",
      "D) O frontend é implementado em TypeScript com tipagem estrita de variáveis."
    ],
    "answer": 1,
    "explanation": "Smart UI ocorre quando componentes visuais assumem lógica pesada: calculam regras de desconto, validam regras empresariais e executam queries SQL, tornando o código engessado e não reutilizável."
  },
  {
    "id": "s4_q14",
    "category": "Slide 4",
    "topic": "Anti-padrão: Domínio Anêmico",
    "question": "O que caracteriza o anti-padrão 'Domínio Anêmico' (Anemic Domain Model)?",
    "options": [
      "A) O servidor de aplicação apresenta consumo de memória RAM próximo de zero.",
      "B) A camada de negócio vira um mero 'bypass' sem regras; a lógica fica espalhada na apresentação ou em procedures do banco de dados.",
      "C) A aplicação foi desenvolvida sem a utilização de nenhum banco de dados relacional.",
      "D) As entidades possuem métodos de validação e comportamento de negócio em excesso."
    ],
    "answer": 1,
    "explanation": "Em um Domínio Anêmico, as classes de negócio são apenas estruturas vazias com getters e setters; as verdadeiras regras de negócio foram empurradas para a tela ou para triggers/procedures do banco."
  },
  {
    "id": "s4_q15",
    "category": "Slide 4",
    "topic": "Anti-padrão: Persistência Sabendo Demais",
    "question": "Qual problema conceitual define o anti-padrão 'Persistência Sabendo Demais'?",
    "options": [
      "A) O banco de dados consome espaço excessivo de armazenamento em disco rígido.",
      "B) A camada de dados/repositório passa a aplicar regras e decisões de negócio na hora de buscar ou salvar registros.",
      "C) O repositório realiza backups automáticos a cada 15 minutos em servidores secundários.",
      "D) O banco de dados possui índices secundários criados em tabelas de auditoria."
    ],
    "answer": 1,
    "explanation": "A persistência deve apenas salvar e recuperar dados. Se ela decide regras de negócio ao montar consultas (ex: decidir elegibilidade de clientes em queries), ela violou a fronteira do Domínio."
  },
  {
    "id": "s4_q16",
    "category": "Slide 4",
    "topic": "Anti-padrão: Vazamento de Camada",
    "question": "O que é o 'Vazamento de Camada' (Layer Leaking)?",
    "options": [
      "A) Perda física de dados em virtude de falhas de hardware nos discos do servidor.",
      "B) Detalhes específicos de uma camada inferior vazam para camadas acima (ex: nomes de colunas SQL ou exceções de banco expostas soltas na UI).",
      "C) Quando o consumo de banda de rede excede o limite contratado com o provedor de nuvem.",
      "D) Quando o repositório de código é publicado publicamente por engano na internet."
    ],
    "answer": 1,
    "explanation": "Vazamento ocorre quando abstrações falham e detalhes íntimos de implementação de dados ou infraestrutura poluem as camadas superiores (como a interface gráfica manipulando nomes técnicos de colunas SQL)."
  },
  {
    "id": "s5_q1",
    "category": "Slide 5",
    "topic": "Estilo vs Padrão Arquitetural",
    "question": "Qual é a distinção central entre um 'Estilo Arquitetural' e um 'Padrão Arquitetural' apresentada na Aula 5?",
    "options": [
      "A) O Estilo define a forma geral de organização sistêmica (quem fala com quem); o Padrão define papéis e responsabilidades claras de comunicação interna em um contexto específico.",
      "B) Estilos são aplicáveis unicamente a sistemas legados; Padrões aplicam-se exclusivamente a microsserviços modernos.",
      "C) O Padrão define a infraestrutura física dos servidores; o Estilo define a linguagem de programação adotada.",
      "D) Estilos e Padrões são termos estritamente sinônimos que expressam o mesmo conceito em Engenharia de Software."
    ],
    "answer": 0,
    "explanation": "Estilo (macro) organiza as relações entre subsistemas (ex: cliente-servidor). Padrão (como MVC) organiza a cooperação interna entre papéis estruturados. Estilo e padrão são eixos independentes."
  },
  {
    "id": "s5_q2",
    "category": "Slide 5",
    "topic": "Independência entre Estilo e MVC",
    "question": "É correto afirmar que tanto um Monólito quanto um servidor em arquitetura Cliente-Servidor podem adotar o padrão MVC internamente?",
    "options": [
      "A) Não, o padrão MVC só pode ser implementado em arquiteturas estritamente distribuídas baseadas em microsserviços.",
      "B) Sim, pois estilo e padrão são eixos independentes: ambos os estilos podem abrigar os papéis Model, View e Controller em sua estrutura interna.",
      "C) Não, monólitos são estruturalmente incompatíveis com a presença de controladores e modelos.",
      "D) Apenas se a aplicação for executada em servidores corporativos da linguagem Java."
    ],
    "answer": 1,
    "explanation": "Estilo macro e padrão interno são independentes: um monólito em Rails pode usar MVC, assim como um servidor backend em uma arquitetura cliente-servidor pode organizar seu código com MVC."
  },
  {
    "id": "s5_q3",
    "category": "Slide 5",
    "topic": "Papéis do MVC: Model, View, Controller",
    "question": "Quais são as atribuições fundamentais dos papéis Model, View e Controller no padrão arquitetural MVC?",
    "options": [
      "A) Model formata o CSS; View executa queries SQL; Controller gerencia os backups de disco.",
      "B) Model guarda os dados e a lógica que opera sobre eles; View exibe o dado formatado para o usuário; Controller traduz ações do usuário em operações sobre o Model.",
      "C) Model cria as tabelas de banco; View configura os servidores proxy; Controller executa os testes unitários.",
      "D) Model lida com criptografia de rede; View autentica o usuário; Controller gera relatórios em PDF."
    ],
    "answer": 1,
    "explanation": "Model = representação e lógica dos dados. View = apresentação visual ao usuário. Controller = intermediário que recebe eventos do usuário e orquestra as ações correspondentes no Model."
  },
  {
    "id": "s5_q4",
    "category": "Slide 5",
    "topic": "História do MVC",
    "question": "Quem concebeu o padrão MVC, em que período/local e qual problema original motivou sua criação?",
    "options": [
      "A) James Gosling na Sun Microsystems em 1995, para organizar a arquitetura da linguagem Java.",
      "B) Trygve Reenskaug entre 1978 e 1979 no Xerox PARC (projeto Dynabook de Alan Kay), motivado pela mistura entre dados, representação visual e interação.",
      "C) Brendan Eich na Netscape em 1995, para estruturar os scripts de execução no navegador.",
      "D) Linus Torvalds em 1991 na Finlândia, para organizar os drivers de dispositivos no kernel Linux."
    ],
    "answer": 1,
    "explanation": "Trygve Reenskaug criou o MVC no Xerox PARC para desacoplar dados da interface gráfica, viabilizando que a mesma informação pudesse ser exibida em diferentes telas sem replicação."
  },
  {
    "id": "s5_q5",
    "category": "Slide 5",
    "topic": "Nome Provisório do MVC",
    "question": "Qual foi o nome provisório dado ao padrão por Trygve Reenskaug em maio de 1979 antes de consolidar como MVC em dezembro daquele ano?",
    "options": [
      "A) Component-Service-Repository.",
      "B) Thing-Model-View-Editor.",
      "C) State-Action-Reducer.",
      "D) Entity-Boundary-Control."
    ],
    "answer": 1,
    "explanation": "Em maio de 1979, o primeiro rascunho de Reenskaug chamava-se 'Thing-Model-View-Editor', sendo refinado para 'Model-View-Controller' em dezembro de 1979."
  },
  {
    "id": "s5_q6",
    "category": "Slide 5",
    "topic": "Evolução Histórica do MVC",
    "question": "Qual marco histórico de 1999 adaptou o padrão MVC para o modelo request/response stateless da Web, tratando a View como uma foto do estado?",
    "options": [
      "A) Smalltalk-80.",
      "B) JSP Model 2 (Seshadri).",
      "C) Ruby on Rails.",
      "D) React."
    ],
    "answer": 1,
    "explanation": "Govind Seshadri formalizou o 'JSP Model 2' em 1999, adaptando o MVC dos ambientes desktop com observadores em tempo real para o ciclo de requisição e resposta do protocolo HTTP."
  },
  {
    "id": "s5_q7",
    "category": "Slide 5",
    "topic": "Rails e React na História do MVC",
    "question": "Quais foram as contribuições históricas de Ruby on Rails (2004) e React (2013) para o padrão MVC e para o desenvolvimento web?",
    "options": [
      "A) Rails eliminou a camada de persistência e o React criou a linguagem JavaScript no navegador.",
      "B) Rails popularizou o MVC na web via convenção sobre configuração; React levou a lógica reativa da View para o navegador (SPA) sem recarregar páginas.",
      "C) Rails inventou o padrão MVC no Xerox PARC; React proibiu a utilização de controladores backend.",
      "D) Rails estabeleceu o padrão JSP Model 2; React substituiu os bancos de dados relacionais por NoSQL."
    ],
    "answer": 1,
    "explanation": "Ruby on Rails estabeleceu convenções estruturadas que popularizaram o MVC em larga escala na web, e o React (Facebook) transformou a View em componentes dinâmicos no cliente (SPA)."
  },
  {
    "id": "s5_q8",
    "category": "Slide 5",
    "topic": "MVC Clássico nas 3 Camadas",
    "question": "Por que o MVC 'clássico' não se encaixa diretamente nas 3 camadas clássicas (Apresentação, Domínio e Dados)?",
    "options": [
      "A) Porque o MVC clássico não possui nenhuma camada dedicada à exibição visual de informações.",
      "B) Porque no MVC clássico o 'Model' responde por duas coisas ao mesmo tempo: regras de negócio (Domínio) e acesso a armazenamento (Dados), sem separá-los explicitamente.",
      "C) Porque o Controller assume exclusivamente a função de banco de dados relacional.",
      "D) Porque a arquitetura em camadas exige quatro divisões lógicas obrigatórias."
    ],
    "answer": 1,
    "explanation": "No MVC original, o Model misturava regras de negócio e estado/acesso a dados. Para sistemas corporativos modernos, foi necessário desmembrar o Model em peças especializadas."
  },
  {
    "id": "s5_q9",
    "category": "Slide 5",
    "topic": "MVC Qualificado nas 3 Camadas",
    "question": "No 'MVC Qualificado' contemporâneo, como os papéis se mapeiam perfeitamente nas três camadas clássicas?",
    "options": [
      "A) Apresentação = View + Controller; Domínio = Service; Dados = Repository + Entity.",
      "B) Apresentação = Entity; Domínio = View; Dados = Controller + Service.",
      "C) Apresentação = Repository; Domínio = DTO; Dados = View.",
      "D) Apresentação = Service; Domínio = Controller; Dados = Entity."
    ],
    "answer": 0,
    "explanation": "Com o MVC qualificado: Apresentação agrupa View e Controller; Domínio abriga os Services com as regras de negócio; Dados contém os Repositories e as Entities de persistência."
  },
  {
    "id": "s5_q10",
    "category": "Slide 5",
    "topic": "DTO vs Entity no MVC",
    "question": "Qual é a distinção e o tráfego típico de um DTO (Data Transfer Object) e de uma Entity no fluxo MVC?",
    "options": [
      "A) A Entity trafega entre Controller e View; o DTO representa a tabela física do banco de dados.",
      "B) O DTO é um objeto simples sem lógica moldado para a tela e trafega entre Controller e View; a Entity mapeia o banco e trafega entre Service e Repository.",
      "C) O DTO armazena as regras de validação; a Entity executa os scripts de compilação da aplicação.",
      "D) DTO e Entity são nomenclaturas estritamente idênticas para a mesma classe de modelo de dados."
    ],
    "answer": 1,
    "explanation": "DTO carrega dados enxutos formatados para a visualização, evitando expor o esquema interno. A Entity mapeia as tabelas de banco e trafega exclusivamente entre as camadas de dados e domínio."
  },
  {
    "id": "s5_q11",
    "category": "Slide 5",
    "topic": "Sintomas do Model Gordo",
    "question": "Quais são os sintomas típicos de uma aplicação com anti-padrão 'Model Gordo' e ausência de qualificação em camadas?",
    "options": [
      "A) Tempo de compilação nulo e consumo de memória RAM zerado nos servidores.",
      "B) Model acumulando validações, cálculos e queries SQL; regras duplicadas em Controllers; e alterações de banco quebrando regras de negócio escondidas.",
      "C) Ausência total de formulários HTML e navegação por hiperlinks no frontend.",
      "D) Aumento automático da cobertura de testes unitários sem esforço dos programadores."
    ],
    "answer": 1,
    "explanation": "O acúmulo de responsabilidades cria classes monolíticas gigantes: models inflados com SQL, regras de validação replicadas em múltiplos controllers e fragilidade extrema a mudanças."
  },
  {
    "id": "s5_q12",
    "category": "Slide 5",
    "topic": "Package by Layer",
    "question": "Como os arquivos de código são agrupados na abordagem de pastas 'Package by Layer'?",
    "options": [
      "A) Agrupados por funcionalidade de negócio (ex: pasta `user/`, pasta `product/`).",
      "B) Agrupados pelo papel técnico das classes em pastas como `controller/`, `service/`, `repository/`, `entity/` e `view/`.",
      "C) Agrupados pelo nome do autor do commit no sistema de versionamento.",
      "D) Dispostos em uma pasta única na raiz do projeto sem subdiretórios."
    ],
    "answer": 1,
    "explanation": "Package by Layer organiza o código pela função técnica de cada componente (todos os controllers juntos, todos os repositories juntos). É a estrutura tradicional em tutoriais."
  },
  {
    "id": "s5_q13",
    "category": "Slide 5",
    "topic": "Package by Feature",
    "question": "Como os arquivos de código são organizados na abordagem 'Package by Feature'?",
    "options": [
      "A) Pela extensão de arquivo (.java, .html, .css) em diretórios separados.",
      "B) Por funcionalidade de negócio (ex: pasta `user/` contendo `UserController`, `UserService`, `UserRepository`, `User`, `user-form.html`), unindo tudo daquele assunto.",
      "C) Pelo tamanho em kilobytes dos módulos compilados em disco.",
      "D) Pela ordem alfabética estrita dos nomes de arquivos no repositório."
    ],
    "answer": 1,
    "explanation": "Package by Feature foca no domínio do negócio: todos os artefatos relativos a uma funcionalidade (controller, service, repository, views) vivem coesos dentro do mesmo diretório da feature."
  },
  {
    "id": "s5_q14",
    "category": "Slide 5",
    "topic": "Migração para Microsserviços",
    "question": "Por que a organização 'Package by Feature' oferece vantagens sobre 'Package by Layer' ao planejar a extração futura de um microsserviço?",
    "options": [
      "A) Porque no Package by Layer os microsserviços são gerados de forma automatizada pelo compilador.",
      "B) Porque no Package by Feature os artefatos da funcionalidade já nascem coesos e isolados na mesma pasta, facilitando sua migração com menor atrito.",
      "C) Porque o Package by Feature elimina a necessidade de bancos de dados relacionais.",
      "D) Porque o Docker rejeita a criação de contêineres a partir de estruturas Package by Layer."
    ],
    "answer": 1,
    "explanation": "Em Package by Feature, a fronteira do serviço já está naturalmente delimitada na estrutura de pastas. Em Package by Layer, é necessário caçar classes espalhadas em 5 diretórios técnicos distintos."
  },
  {
    "id": "s5_q15",
    "category": "Slide 5",
    "topic": "Quando Usar Layer vs Feature",
    "question": "De acordo com o quadro comparativo da Aula 5, qual é a indicação recomendada para Package by Layer e Package by Feature?",
    "options": [
      "A) Package by Layer é mais adequado para projetos menores e equipes técnicas; Package by Feature é ideal para projetos maiores e funcionalidades independentes.",
      "B) Package by Layer é restrito a aplicações mobile; Package by Feature é exclusivo de desktops.",
      "C) Package by Layer aplica-se apenas ao setor público; Package by Feature ao setor privado.",
      "D) Não há critérios de indicação, sendo uma escolha puramente cosmética sem impactos."
    ],
    "answer": 0,
    "explanation": "Para projetos pequenos ou protótipos, 'by layer' é direto e simples. Em sistemas grandes com múltiplos módulos e equipes autônomas, 'by feature' melhora a manutenibilidade e o isolamento."
  },
  {
    "id": "s5_q16",
    "category": "Slide 5",
    "topic": "Resumo Integrado da Aula 5",
    "question": "Qual é a síntese de encerramento da Aula 5 que integra Estilos, Padrões, Camadas e Organização de Pastas?",
    "options": [
      "A) O padrão MVC substitui integralmente a necessidade de arquitetura em camadas e de estilos.",
      "B) Estilo caracteriza as relações macro sistêmicas; o Padrão MVC organiza papéis internos; a qualificação (Service/Repository) encaixa o MVC nas 3 camadas; e as pastas podem ser organizadas por Layer ou Feature.",
      "C) O padrão MVC é incompatível com o estilo cliente-servidor em aplicações web modernas.",
      "D) A estrutura Package by Feature é proibida em projetos que utilizem o framework Spring MVC."
    ],
    "answer": 1,
    "explanation": "A Aula 5 sintetiza a harmonia: Estilos macro (como as peças se conectam), Padrões de arquitetura como MVC (papéis internos), Camadas clássicas (Apresentação, Domínio, Dados) e modularização de código (Pastas)."
  }
];

// Exporta para uso em Node e no Navegador
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUESTION_BANK };
}
