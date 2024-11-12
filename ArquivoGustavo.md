# Capítulo 4 - Software Testing

## Tópico 5 e dependências

Guia pra leitura:
  - *** => importante
  - * => considerar

# Test Process

## Tópicos guiados via swebok

- Atitudes e programação sem ego
- Guias de teste
- Processo de gerenciamento de testes
- Documentação dos testes e Produtos de trabalho *
- Test Driven Development (TDD), o que é ***
- Times internos e times independentes
- Estimativa de Custo e esforço e Medições do processo de testes
- Quando terminar ? *
- Padrões de teste e reutilização de testes ***
- Atividades de teste *
- Planejamento
- Geração de Test case *
- Desenvolvimento do ambiente de testes *
- Execução ***
- Avaliação da execução dos testes *
- Test log (Reportando o problema) *
- Procurando o defeito (Defect tracking) *

## Escolha dos tópicos principais:

- 1. Planejamento do teste:
- 2. Análise de requisitos:
- 3. Projeto de testes:
- 4. Preparação do ambiente:
- 5. Execução dos testes:
- 6. Registro e análise de defeitos:
- 7. Reteste e reavaliação:

### Secundary topics:

  - Estimativa de Custo e esforço e Medições do processo de testes (1)
  - Times internos e times independentes (1)
  - Test Driven Development (TDD), o que é *** (1)
  - Padrões de teste e reutilização de testes *** (7)
  - Geração de Test case * (3)
  - Desenvolvimento do ambiente de testes * (4)
  - Test log (Reportando o problema) * (6)
  - Quando terminar ? * (7)

# Processos de testes

## 1 - Planejamento do teste:

 
  O processo de testes, é uma etapa muito importante de um projeto, pois essa etapa pode se referir tanto ao teste de funcionamento do software, por meio de modelos virtuais, ambientais ou cenários que replicam o real, ou por meio de verificações para saber se o desenvolvimento está seguindo os requisitos feitos inicialmente. Dessa maneira, é de suma importância que haja um planejamento bem definido de quais passos serão seguidos. Tal planejamento deve abordar, mas não somente, o cronograma a ser seguido, a estratégia a ser adotada - como o TDD (Test Driven Development)-, e estimar quais serão os custos e recursos necessários para a realização completa do processo, de maneira a prevenir imprevistos, além de definir quais requisitos e critérios serão adotados para definir o que seria a entrega satisfatória e quais serão os requisitos avaliados no proceder dos testes.
  A exemplo, as funções mínimas que um planejamento de testes deve atender são:
- A introdução com identificação do projeto e objetivos;
- Conjunto de requisitos a serem testados;
- Tipos de testes a serem realizados e ferramentas utilizadas;
- Recursos que seraõ utilizados nos testes;
- Cronograma de atividades (horários e uma média da quantidade de sprints).

## 2 - Análise de Requisitos

  Assim sendo, primeiramente, é preciso avaliar quais os requisitos do software. Podendo ser utilizado metodologias de priorização e escolha de requisitos como a metodologia MoSCoW ,  que preza por definir quais desses requisitos devem ser atendidos com maior prioridade é uma necessidade no momento de realizar o projeto, seguindo a divisão de: 
- Must have: divisão das coisas que o software deve atender obrigatóriamente;
- Should have: que é a divisão das coisas que o software deveria ter, mas não obrigatório para o funcionamento;
- Could have: representa a divisão das coisas que seria interessante o software ter;
- Won't have: representa a divisão das coisas que não são prioridade no momento;
  Esse tipo de divisão auxilia no processo de testes, pois torna mais visível o que deverá ser avaliado para saber se o software atende os requisitos necessários para o funcionamento, além de avaliar se as features dele estão funcionando.

## 3 - Projeto de testes e avaliação do ambiente de testes

  Após a avaliação dos requisitos necessários e a criação e implementação do cronograma dos testes, se faz agora necessário a criação do projeto de testes e a avaliação ambiente do teste, avaliando:
- Quais bibliotecas serão utilizadas;
- O que a máquina do usuário ou desenvolvedor deverá possuir para rodar os testes;
- Descrever qual a finalidade dos requisitos;
- As pessoas que atuarão no desenvolvimento;
- Quais riscos isso pode oferecer (idealmente nenhum);
- E a estratégia do teste:

No quesito a respeito da estratégia do teste, será necessário avaliar qual tipo de teste será adotado. Se será avaliado um teste de Verificação, avaliando se uma pequena parte do projeto funciona. Teste de Integração: avaliando se os componentes estão se integrando corretamente, entre outras formas.

## 4- Execução dos teste e registro

  Posterior a criação do projeto do teste e ambiente, se faz necessário aplicar eles e validar se sua execução está funcionando como esperado. Existem várias formas de executar os testes, como por meio de casos de testes, onde se é possível associar a excução do teste em relação ao contexto aplicado, geralmente realizado em ambientes locais. Executar por suítes de testes, testando vários testes de maneira sequencial, para avaliar vários casos ao mesmo tempo. Ao mesmo tempo que se é executado os testes, é importante que o programa esteja fazendo o registro dos mesmos. Afinal não se é interresante que aparece 30/31 testes passados, e não saber aonde que esse erro ocorreu. Os registros de execução do caso de teste e os registros de execução do suíte de testes, mapeiam o contexto de execução para o caso do teste ou suíte de teste der erro. Sabendo se está retornando falsos verdadeiros, ou erros inexistentes.
  Também é interessante avaliar se os testes devem ser executados de maneira manual (que permite a alteração de variáveis para tentar localizar o erro), ou automatizada (que é mais ágil e permite executar em quantidades maiores de maneira facilitada).

## 5- Retestes e reavaliação

  Após a conclusão da execução dos testes, é fundamental realizar uma análise detalhada dos resultados e identificar possíveis melhorias. Em caso de erros inesperados ou falhas de funcionamento, é importante revisar cuidadosamente os pontos críticos que exigem atenção. Identificar e focar nesses pontos permite uma reavaliação eficiente e orientada à melhoria contínua dos testes, garantindo assim maior confiabilidade e precisão nos resultados.
  




## Referências:
MARCELA. Etapas do Processo de Teste de Software: Compreendendo as Etapas Fundamentais dos Testes de Software. Disponível em: <https://awari.com.br/etapas-do-processo-de-teste-de-software-compreendendo-as-etapas-fundamentais-dos-testes-de-software/>. Acesso em: 7 out. 2024.

BOURQUE, Pierre; FAIRLEY, RJNICS. Swebok. Nd: IEEE Computer society, 2004.

DE, T. Tecnicas de estimativa de custo para projetos de simulacao de teste - FasterCapital. Disponível em: <https://fastercapital.com/pt/contente/Tecnicas-de-estimativa-de-custo-para-projetos-de-simulacao-de-teste.html#Import-ncia-da-estimativa-de-custo-em-projetos-de-simula--o-de-teste>. Acesso em: 21 out. 2024.
