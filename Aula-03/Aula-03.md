# Exercício aula 04

Com base nos estilos arquiteturais apresentados em aula, a saber, monolito, cliente-servidor, distribuído, ponto a ponto, publicador/assinante, pipes e filtros.

Escolha 2 (dois) dos estilos e elabore uma análise para cada um, abordando os seguintes tópicos:

- **Conceito e definição:** O que é esse estilo arquitetural e como ele funciona na prática?
- **Casos de uso comuns:** Em quais tipos de sistemas, problemas ou cenários esse estilo é recomendado/utilizado pelo mercado? Cite ao menos 2 exemplos reais ou práticos.
- **Principais vantagens:** Quais são os maiores benefícios ao adotar esse estilo? (ex: facilidade de implantação, desempenho, escalabilidade, etc.)
- **Principais desvantagens:** Quais são os gargalos, limitações ou desafios de manutenção/desenvolvimento associados a ele?

---

## Cliente servidor

- **Conceito/definição:** O estilo cliente e servidor é dividido em duas partes onde a parte do cliente é onde ocorre a comunicação e requisições, e o lado do servidor é onde ocorre a espera por esses pedidos e responde.
- **Caso de usos comuns:** Aplicações web, Streaming de mídia como Netflix.
- **Principais vantagens:** Consistência e integridade de dados, backup e recuperação de variáveis e separação clara de responsabilidade.
- **Principais desvantagens:** Gargalo de desempenho, custo da infraestrutura e alvo concentrado de ataques.

---

## Distribuído

- **Conceito/definição:** O projeto roda em variás máquinas onde ocorre a distribuição e coordenação de tarefas, processamento e replicação de dados.
- **Caso de usos comuns:** Quando o volume de dados ou informações não suportados por apenas uma maquina. Blockchains e criptomoedas, microserviços,
- **Principais vantagens:** Performance, escalabilidade horizontal e proximidade gráfica.
- **Principais desvantagens:** Complexidade muito maior, sobrecarga de comunicação e custo operacional.