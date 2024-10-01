Capítulo 4: Testes de Software - Tópicos 1 e 2.

Discente: Fábio Araújo Bruno

## Fichamento de citação (Tópico 1): Fundamentos de teste de software

### 1.1 Terminologia Relacionada a Testes

#### 1.1.1 Definições de Testes e Terminologia Relacionada.

> O texto fornece definições precisas para termos usados na engenharia de software para  descrever falhas e erros. Ele resume as definições essenciais para entendimento e  aplicação correta de conceitos relacionados a testes de software.

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

## Fichamento de citação (Tópico 2): Níveis de Teste

### 2.1 O Alvo do Teste
>"O alvo do teste pode variar: um único módulo, um grupo de módulos ou um sistema inteiro. Três estágios de teste podem ser distinguidos: teste de unidade, teste de integração e teste de sistema, sem implicar em um modelo de processo específico ou hierarquia de importância." (Bourque e Fairlay, 2004).

## 2.1.1 Teste de Unidade
>"O teste de unidade verifica o funcionamento isolado de elementos de software que são testáveis separadamente, podendo ser subprogramas individuais ou componentes maiores. Geralmente, ocorre com acesso ao código e suporte de ferramentas de depuração, frequentemente realizado pelos programadores que escreveram o código." (Bourque e Fairlay, 2004).

## 2.1.2 Teste de Integração
>"O teste de integração verifica as interações entre componentes de software. Estratégias clássicas, como top-down e bottom-up, são frequentemente utilizadas. As estratégias modernas são geralmente impulsionadas pela arquitetura, integrando componentes ou subsistemas com base em funcionalidades identificadas, preferindo a integração incremental ao 'teste de big bang'." (Bourque e Fairlay, 2004).

### 2.1.3 Teste de Sistema
>"O teste de sistema se preocupa com o comportamento de um sistema completo. Testes eficazes de unidade e integração devem ter identificado muitos defeitos. Este nível é apropriado para avaliar requisitos não funcionais, como segurança, velocidade e confiabilidade, além de interfaces externas." (Bourque e Fairlay, 2004).

### 2.2 Objetivos dos Testes
>"Os testes são conduzidos com objetivos específicos, que podem ser explícitos ou implícitos. Declarar os objetivos em termos quantitativos facilita a medição e o controle do processo de teste. Os objetivos variam com o alvo do teste, abordando diferentes propósitos em diferentes níveis." (Bourque e Fairlay, 2004).

## 2.2.1 Teste de Aceitação / Qualificação
>"Esse teste determina se um sistema satisfaz os critérios de aceitação, verificando comportamentos desejados em relação aos requisitos do cliente. Pode ser realizado pelo cliente ou um representante, podendo ou não envolver os desenvolvedores." (Bourque e Fairlay, 2004).

## 2.2.2 Teste de Instalação
>"Após os testes de sistema e aceitação, o software é verificado ao ser instalado no ambiente alvo. O teste de instalação pode ser visto como um teste de sistema realizado em condições operacionais específicas." (Bourque e Fairlay, 2004).

## 2.2.3 Testes Alpha e Beta
>"Antes do lançamento, o software pode ser testado por um grupo seleto de usuários (teste alpha) e/ou por um número maior de usuários representativos (teste beta), que reportam problemas com o produto." (Bourque e Fairlay, 2004).

### 2.2.4 Conquista e Avaliação de Confiabilidade
>"Os testes melhoram a confiabilidade ao identificar e corrigir falhas. Medidas estatísticas de confiabilidade podem ser derivadas por meio de testes operacionais gerados aleatoriamente, utilizando modelos de crescimento de confiabilidade." (Bourque e Fairlay, 2004).

## 2.2.5 Teste de Regressão
>"Teste de regressão é a reteste seletivo de um sistema ou componente para verificar se modificações não causaram efeitos indesejados e que o sistema ainda cumpre os requisitos especificados." (Bourque e Fairlay, 2004).

## 2.2.6 Teste de Performance
>"O teste de performance verifica se o software atende aos requisitos de desempenho especificados, avaliando características como capacidade e tempo de resposta." (Bourque e Fairlay, 2004).

## 2.2.7 Teste de Segurança
>"O teste de segurança foca na verificação de que o software está protegido contra ataques externos, garantindo a confidencialidade, integridade e disponibilidade do sistema e seus dados." (Bourque e Fairlay, 2004).

## 2.2.8 Teste de Stress
>"Teste de stress exercita o software sob a carga máxima designada e além dela, visando determinar os limites de comportamento e testar mecanismos de defesa." (Bourque e Fairlay, 2004).

## 2.2.9 Teste Back-to-Back
>"Teste back-to-back envolve executar duas ou mais variantes de um programa com as mesmas entradas, comparando as saídas e analisando erros em caso de discrepâncias." (Bourque e Fairlay, 2004).

## 2.2.10 Teste de Recuperação
>"Teste de recuperação visa verificar as capacidades de reinício do software após uma falha ou outro desastre." (Bourque e Fairlay, 2004).

## 2.2.11 Teste de Interface
>"O teste de interface verifica se os componentes interagem corretamente para fornecer a troca adequada de dados e informações de controle, geralmente gerando casos de teste a partir das especificações de interface." (Bourque e Fairlay, 2004).

## 2.2.12 Teste de Configuração
>"Teste de configuração verifica o software sob diferentes configurações especificadas, garantindo que atende aos requisitos para diferentes usuários." (Bourque e Fairlay, 2004).

## 2.2.13 Teste de Usabilidade e Interação Humano-Computador
>"Esse teste avalia a facilidade com que os usuários finais aprendem e utilizam o software, abrangendo funções que apoiam tarefas do usuário, documentação e recuperação de erros do usuário." (Bourque e Fairlay, 2004).