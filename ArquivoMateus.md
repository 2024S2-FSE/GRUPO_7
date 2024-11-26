Capítulo 4: Testes de Software - Tópicos 4 e 6.

Discente: Mateus Bolotaro Rodrigues

# Fichamento

## Tópico 4: "Medidas Relacionadas ao Teste"

### 1. Introdução (Técnicas de Teste x Objetivos de Teste):
  
  As medidas de teste são essenciais para a análise da qualidade do programa e podem até mesmo ser usados para alterar o planejamento e a execução das atividades (Swebok, 2004). Além disso, essas, quando utilizadas corretamente, distinguem as técnicas do teste do objetivo de teste que muitas vezes são confundidas.
  De acordo com o Swebok (2004), as técnicas de testes são as ferramentas que auxiliam no alcance dos objetivos e não o objetivo do teste em si; assim ela colabora para que os resultados do teste sejam concluídos. Para que ambos não sejam confundidos, é fundamental que haja uma distinção e definição clara das medidas utilizadas na avaliação do programa em relação as ao teste e as medidades da avaliação do próprio conjunto de testes.

### 2. Avaliação do Programa em Relação ao Teste:
  Estas avaliações levam em conta as características do produto e as ocorrências dele para que se elabore as medidas, sendo elas:

a. Tamanho do código-fonte, quantidades de chamadas de módulos e a estruturação do projeto; são importantes para compreender a complexidade do sistema e como os testes poderão ser realizados;

b. Classificações de possíveis falhas que podem ser encontradas no software (principalmente de falhas que já ocorreram anteriormente), são importantes para previsão de erros que podem novamente ressurgir após alguma alteração;

c. Pela sua densidade de falhas, que é a razão obtida através dos tipos de erros encontrados em relação ao tamanho do programa, que pode indicar a frequência em que ocorrem erros e a probabilidade de ocorrer novamente;

d. Por uma avaliação da confiabilidade do sistema que ocorre por meio de uma estimativa estatística e que pode, em ocasiões positivas, encerrar o período de testes e seguir para o próximo ciclo do software;

e. Modelos de crescimento da confiabilidade: A partir do momento em que se estabelece a avaliação da confiabilidade, é possível determinar o os modelos de crescimento de confabilidade que são predições sobre a confiabilidade do software. Estas predições tendem a aumentar a sua confiabildiade conforme as falhas são identificadas e corrigidas.  

### 3. Avaliação do Conjunto de Testes:
  Diferentemente da avaliação anterior, esta está centrada em analisar a adequação dos próprios testes, utilzando então de medidas que, desta vez, relacionam-se as características do teste.

a. Medidas de Cobertura / Minuciosidade: Esta medida refere-se a abrangência dos testes em relação aos elementos de software, tanto a quantos elementos foram cobertos, como no detalhamento e profundidade do teste nos elementos. Esta medida pode ser obtida analisando os elementos cobertos em razão da quantidade total de elementos.

b. Fault Seeding (semeadura / implementação de falhas): Para que se obtenha essa medida, é injetado no programa falhas intencionais a fim de que se analise se os testes estão sendo capazes de descobrir estas falhas; além disso, é possível também que verdadeiras falhas sejam encontradas neste processo. A partir do percentual das falhas descobertas, é possível verificar a eficiência dos testes e estipular um número de falhas reais. Esta técnica, por mais que seja útil, deve ser usada com cuidado, pois há uma chance de que um erro proposital acabe sendo deixado.

c. Pontuação de Mutação: É criado versões do produto original com pequenas modificações (chamadas de mutantes); o teste então, deve identificar e eliminar as mutações criadas (os mutantes mortos); a partir daí, é gerado uma pontuação com base na razão dos mutantes mortos e o total de mutantes gerados. 

# Fichamento de Uso de Métricas nos Testes de Software

  As métricas de teste de software são essenciais para garantir a qualidade do software e compreender características dele, além de ser útil para gerar relatórios que informam sobre a sua confiabilidade, estabilidade e desempenho.

a. Número de Ocorrências
  Informa a quantidade de ocorrências (erros, inconsistências e futuras melhorias) já aconteceram no produto

b. Status das Ocorrências
  Além da quantidade, pode-se buscar compreender quais são os estados dessas ocorrências, se ainda não foram solucionadas (pendentes de solução), se estão sendo esperando um novo teste (para ser retestado) ou se já estão finalizadas (encerrado). Compreender o número de ocorrências e a quantidade de cada uma em cada status é útil para entender a situação atual do projeto.

c. Índice de Densidade de Defeitos (SWEBOK tbm)
  Os defeitos são considerados ocorrências que em algum momento foram o motivo de alterações do software ou da documentação.

d. Índice de Severidade de Defeitos
  A severidade dos defeitos indica a prioridade que cada defeitos reconhecido tem no sistema. Essas prioridades são definidas em níveis, sendo geralmente 4: Crítico (Nível 4), Sério (Nível 3), Médio (Nível 2) e Baixo (Nível 1); assim, para obter o índice deve multiplicar cada ocorrência pelo seu nível e dividir pela quantidade de defeitos

e. Tipos de Defeitos (Swebok tb)

e. Tempo médio para encontrar um defeito
  Utilizada para compreender a duração da equipe para encontrar um defeito e é obtido por meio da soma da quantidade de horas gastas na execução de testes em razão dos defeitos detectados. 
  
f. Tempo para arrumar um defeito
  Utilizada para compreender a duração da equipe para resolver um defeito encontrado e pode ser usado para estimar o custo de manutenção do sistema. É obtido através da divisão 

g. Tipos de Erros Encontrados
  É registrado todos os erros que o sistema já teve e que muito provavelmente, pode voltar a ter novamente. 

h. Cobertura de Testes
  Verifica se o grupo de testes está de fato abrangendo todo o produto e de maneira minuciosa. Definir uma medida de cobertura de teste pode ser mais complexo já que não existe um número correto de quantidades de testes que o sistema precisa ter. Por isso, antes de definir a cobertura de testes, é montado uma coleção de testes necessários que o sistema precisaria ter para ser considerado 100% coberto. Assim, a medida de cobertura de testes se dá pela aplicação dos testes em relação aos testes considerados para o sistema.

i. Efetividade de Caso de Teste
  Verifica se os casos de testes realmente encontram defeitos e o cálculo é obtido através da relação de número de casos de teste que se tornaram ocorrências e o número total de testes. 
  
## Tópico 6: "Ferramentas de Testes de Software"

### 1. Introdução (A importância de Ferramentas de Testes):
  O processo de testar programas envolve muitas tarefas, execução de programas e o processamento de diversas informações. Criar testes manualmente sem nenhum auxílio de ferramentas pode ser uma prática trabalhosa e que pode abrir brechas para possíveis erros graças ao aumento de linhas de código. A fim de simplificar este processo e garantir testes mais sólidos, muitas ferramentas foram criadas para automatizar e auxiliar a criação de testes (Swebok, 2004).

### 2. Seleção de ferramentas:
  De acordo com o Swebok (2004), há uma grande importância no processo de seleção das ferramentas que participarão do processo de testes do software. E em muitas das vezes, é indicado que haja não apenas uma ferramenta, mas um conjunto de ferramentas que atuarão nos testes.

### 3. Categorias de ferramentas:
  a. Estruturas de Teste: As ferramentas dessa categoria criam um ambiente controlado que simulam a chamada de módulos (a partir dos drivers que simulam partes do sistema que chamariam esses módulos) com parâmetros específicos e registram a saída ou que simulam outros módulos com respostas predefinidas (os stubs) para que o módulo em teste seja analisado isoladamente. // Necessita de mais referências quanto ao stub e ao driver

 b. Geradores de Teste: Ferramentas capazes de criar os casos dos testes, podendo ser de modo aleatório (que pode ser interessante pelo fato de analisar tópicos que não foram planejados), baseada nos caminhos que o software pode seguir (diferentes formas de entradas), com base no modelo do sistema ou na junção de todos esses.

c. Ferramentas de Captura / Replay: Ferramentas que automaticamente reproduzem testes já executados com entradas e saídas definidas.

d. Ferramentas da Oracle / Comparadores de Arquivos / Verificadores de Aserções: Ferramentas com a função de auxiliar o processo de decidir se o resultado pode ser considerado correto ou se há algum erro.

e. Analisadores de Cobertura e Instrumentadores: São dois tipos de ferramentas que trabalham em conjunto. Os analisadores de cobertura verificam quais partes do código (funções, linhas, etc) foram realmente cobertas pelo teste. Este processo somente é possível a partir do uso dos instrumentadores, que modificam o código a fim de permitir que seja registrado quais partes do código foram cobertos.

f. Rastreadores (Tracers): São ferramentas capazes de analisar e manter um histórico de quais caminhos do programa foram executados.

g. Ferramentas de Teste de Regressão: Essas ferramentas tem a funcionalidade de garantir que o programa não carregue novos problemas após uma alteração no código. Para isso, elas permitem que o conjunto de testes (ou parte dele) já criados possam ser reexecutados.

h. Ferrramentas de Avaliação de Confiabilidade: Essas ferramentas analisam e exibem os resultados dos testes de maneira visual a fim de facilitar a avaliação das medidas relacionadas à confiabilidade (ver tópico 4)
