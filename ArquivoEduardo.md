Capítulo 4: Testes de Software - Tópico 3
Discente: Eduardo Odelon Wagner

### Fichamento

#### Técnicas de teste

> "[...] tentam “parar” o programa, rodando um ou vários testes esboçados das classes identificadas de execuções julgadas equivalentes. O princípio fundamental que é a base de tais técnicas é ser tão sistemático como possível em identificar um conjunto representativo de comportamentos do programa; por exemplo, considerando subclasses do domínio de entrada, cenário, estados, e fluxo de dados."

> "A classificação é baseada em como os testes são gerados"

> "Às vezes estas técnicas são classificadas como caixa branca, igualmente chamada caixa transparente, se os testes confiam na informação sobre como o software foi projetado ou codificado, ou como caixa-preta se os casos de teste confiam somente no comportamento de entrada/saída. "

##### Baseado na intuição e na experiência do engenheiro de software

###### Ad Hoc

> "Talvez a técnica mais extensamente praticada permaneça sendo o teste ad hoc: os testes são derivados confiando na habilidade do engenheiro de software, intuição, e experiência com programas similares. O teste ad hoc pode ser útil para identificar testes especiais, aqueles não facilmente capturados por técnicas formalizadas."

###### Teste exploratório

> "O teste exploratório é definido simultaneamente como aprendizagem, o projeto do teste, e a execução do teste; isto é os testes não são definidos antecipadamente em um plano de teste estabelecido, mas são dinamicamente projetados, executados, e modificados. A eficácia do teste exploratório confia no conhecimento do engenheiro de software, que pode ser derivado de várias fontes: comportamento observado do produto durante o teste, familiaridade com a aplicação, a plataforma, o processo da falha, o tipo de falhas e fracassos possíveis, o risco associado com um produto em particular, e assim por diante."

##### Baseado na especificação

###### Divisão equivalente

> " O domínio de entrada é subdividido em uma coleção de subconjuntos, ou classes equivalentes, que são julgadas equivalente de acordo com uma relação específica, e um conjunto representativo dos testes (às vezes somente um) são tomados de cada classe"

###### Análise do valor limite

> "Os casos de teste são escolhidos próximo e nos limites do domínio da entrada das variáveis, com a razão subjacente que muitas falhas tendem a se concentrar perto dos valores extremos de entradas."

###### Tabela de decisão

> "[...] representam relacionamentos lógicos entre condiçõ(aproximadamente, entradas) e ações (aproximadamente, saídas). Os casos de teste são derivados sistematicamente considerando cada combinação possível de condições e de ações."

###### Teste aleatório

> "Os testes são gerados puramente em aleatório"

> "Esta forma de teste cai sob o título da entrada de especificação baseada, desde que pelo menos o domínio da entrada seja conhecido, para poder escolher pontos aleatórios dentro dele."

##### Baseada em código


