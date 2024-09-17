Capítulo 4: Testes de Software - Tópicos 1 e 2.

Discente: Fábio Araújo Bruno

# ---- FICHÁRIO ----

## Fichamento de citação (Tópico 1): Fundamentos de teste de software

### 1.1 Terminologia Relacionada a Testes

#### 1.1.1 Definições de Testes e Terminologia Relacionada.

> "O texto fornece definições precisas para termos usados na engenharia de software para  descrever falhas e erros. Ele resume as definições essenciais para entendimento e  aplicação correta de conceitos relacionados a testes de software."(Bourque e Fairlay, 2004).

#### 1.1.2 Falhas vs. Erros

>"A literatura de engenharia de software usa termos como falha, erro e defeito para descrever malfuncionamentos, o termo "fault" (falha) refere-se à causa do mal funcionamento, enquanto "failure" (erro) refere-se ao efeito indesejado observado, é importante distinguir entre esses termos para entender que a identificação de uma falha não garante que todos os erros sejam encontrados. Ademais, o termo mais genérico "defect" pode ser usado quando a distinção entre falha e erro não é crucial." (Bourque e Fairlay, 2004).

### 1.2 Questões Chave

#### 1.2.1 Critérios de Seleção de Testes / Critérios de Adequação de Testes (Regras de Parada).

>"Critérios de seleção de testes ajudam a determinar quais casos de teste devem ser escolhidos ou quando um conjunto de testes é considerado suficiente para um propósito específico." (Bourque e Fairlay, 2004).

#### 1.2.2 Eficácia dos Testes / Objetivos dos Testes

>"A eficácia dos testes é determinada pela análise dos resultados dos testes, portanto a escolha dos testes deve ser guiada pelos objetivos pretendidos, já que a eficácia só pode ser avaliada com base nos objetivos definidos." (Bourque e Fairlay, 2004).

#### 1.2.3 Testes para Descoberta de Defeitos

>"Testes voltados para a descoberta de defeitos são considerados bem-sucedidos quando causam a falha do sistema, contrariando os testes realizados para demonstrar que o software atende às suas especificações, onde o sucesso é indicado pela ausência de falhas em condições de teste realistas." (Bourque e Fairlay, 2004).

#### 1.2.4 O Problema do Oráculo

>"Um oráculo é uma entidade que determina se um programa se comportou corretamente durante um teste, ademais existem vários tipos de oráculos, como especificações de requisitos e modelos comportamentais. Contudo a automação de oráculos pode ser desafiadora e cara."(Bourque e Fairlay, 2004).

#### 1.2.5 Limitações Teóricas e Práticas dos Testes

>"A citação famosa de Dijkstra, "testes de programas podem mostrar a presença de erros, mas nunca mostrar sua ausência", reflete a limitação de que a cobertura completa de testes não é viável na prática. Portanto, os testes devem ser orientados por risco e vistos como uma estratégia de gerenciamento de risco."(Bourque e Fairlay, 2004).

#### 1.2.6 O Problema de Caminhos Inviáveis

>"Caminhos inviáveis são caminhos de fluxo de controle que não podem ser exercidos por nenhum dado de entrada e, além disso, eles representam um problema significativo em testes baseados em caminhos, especialmente na derivação automatizada de entradas para testes."(Bourque e Fairlay, 2004).

#### 1.2.7 Testabilidade

>"Testabilidade" refere-se à facilidade com que um critério de cobertura pode ser satisfeito e à probabilidade de que um conjunto de testes exponha uma falha se o software estiver defeituoso." (Bourque e Fairlay, 2004).

### 1.3 Relação dos Testes com Outras Atividades

>Testes vs. Técnicas de Gestão de Qualidade Estática: testes envolvem execução para encontrar defeitos, enquanto técnicas estáticas avaliam a qualidade sem execução.

>Testes vs. Provas de Correção e Verificação Formal: testes verificam o comportamento do software em execução, ao passo que provas de correção e verificação formal validam modelos e algoritmos sem execução.

>Testes vs. Depuração: testes confirmam se o software funciona corretamente, enquanto a depuração foca na localização e correção de erros.

>Testes vs. Construção de Programas: testes verificam o software desenvolvido, enquanto a construção de programas refere-se ao desenvolvimento do código."(Bourque e Fairlay, 2004).