# Processos de testes

## 1 - Planejamento do teste:

 
  O processo de testes é uma etapa fundamental em qualquer projeto, pois abrange tanto a validação do funcionamento do software em ambientes controlados — como modelos virtuais, ambientes simulados ou cenários que replicam o real — quanto a verificação do alinhamento do desenvolvimento com os requisitos definidos inicialmente. Dessa forma, é essencial ter um planejamento bem estruturado, que determine claramente os passos a serem seguidos durante os testes.
  Esse planejamento deve incluir, entre outros elementos, o cronograma a ser seguido, a estratégia de teste adotada — como o TDD (Test Driven Development) — e a estimativa dos custos e recursos necessários para a realização completa do processo. Um planejamento eficaz ajuda a mitigar riscos e prevenir imprevistos, além de definir os critérios e requisitos que indicarão uma entrega satisfatória e estabelecer os padrões de qualidade a serem avaliados ao longo dos testes.
  Entre os itens mínimos que um planejamento de testes deve abordar, estão:
- Introdução: identificação do projeto e definição clara dos objetivos do teste.
- Requisitos a serem testados: conjunto de critérios e funcionalidades que serão validados.
- Tipos de testes e ferramentas: especificação dos tipos de testes a serem realizados e das ferramentas a serem utilizadas.
- Recursos necessários: identificação dos recursos, como equipe, infraestrutura e tecnologia, que serão alocados.
- Cronograma de atividades: detalhamento do calendário de execução, com horários e uma previsão da quantidade de sprints.
Esse planejamento detalhado e bem estruturado contribui para a condução eficiente e eficaz do processo de testes, aumentando as chances de sucesso e de entrega de um software de qualidade.

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

  Após a criação do projeto de teste e a configuração do ambiente, é essencial aplicar os testes e validar se a execução atende às expectativas iniciais. Existem diferentes abordagens para a execução dos testes, como:
- Casos de Teste: execução baseada em casos específicos, permitindo associar o teste ao contexto definido. Este tipo de execução ocorre frequentemente em ambientes locais, onde os resultados podem ser analisados de forma individual.
- Suítes de Testes: execução de múltiplos testes de forma sequencial, permitindo avaliar diversos cenários simultaneamente. Essa abordagem é útil para verificar a consistência do sistema em várias situações de uma só vez.

Durante a execução, é crucial que o programa registre adequadamente cada teste realizado. A falta de registros claros pode dificultar a identificação de falhas; por exemplo, não é útil saber que 30 de 31 testes passaram sem conhecer exatamente onde ocorreu o erro. Os registros dos casos de teste e das suítes são fundamentais para mapear o contexto de execução e permitir uma análise detalhada caso algum teste falhe. Isso facilita identificar se os resultados foram falsos positivos, falsos negativos ou erros inesperados. 
  Além disso, é importante decidir entre a execução manual e a execução automatizada dos testes:
-  Execução Manual: permite ajustar variáveis em tempo real, auxiliando na identificação de possíveis causas para um erro específico.
- Execução Automatizada: mais rápida e eficiente, possibilita a execução em grande escala, ideal para processos repetitivos ou de grande volume.

Essa escolha depende do contexto e dos objetivos do teste, garantindo uma abordagem eficaz para a verificação e validação do sistema.

## 5- Retestes e reavaliação

  Após a conclusão da execução dos testes, é fundamental realizar uma análise detalhada dos resultados e identificar possíveis melhorias. A discussão dos resultados obtidos durante o ciclo de teste, tem como propósito de reduzir falhas e custos, além de otimizar os processos e cumprir os objetivos do negócio. É importante que seja elaborado um relatório de qualidade com a cobertura dos testes e os detalhes do projeto. Em caso de erros inesperados ou falhas de funcionamento, é importante revisar cuidadosamente os pontos críticos que exigem atenção. Identificar e focar nesses pontos permite uma reavaliação eficiente e orientada à melhoria contínua dos testes, garantindo assim maior confiabilidade e precisão nos resultados.
 


## Referências:
MARCELA. Etapas do Processo de Teste de Software: Compreendendo as Etapas Fundamentais dos Testes de Software. Disponível em: <https://awari.com.br/etapas-do-processo-de-teste-de-software-compreendendo-as-etapas-fundamentais-dos-testes-de-software/>. Acesso em: 7 out. 2024.

BOURQUE, Pierre; FAIRLEY, RJNICS. Swebok. Nd: IEEE Computer society, 2004.

DE, T. Tecnicas de estimativa de custo para projetos de simulacao de teste - FasterCapital. Disponível em: <https://fastercapital.com/pt/contente/Tecnicas-de-estimativa-de-custo-para-projetos-de-simulacao-de-teste.html#Import-ncia-da-estimativa-de-custo-em-projetos-de-simula--o-de-teste>. Acesso em: 21 out. 2024.


Método utilizado inicialmente:

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
