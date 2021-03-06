Repositório de atividades e trabalhos das aulas de Linguagem de Programação do grupo Augusto, Giuseppe, Vinicius e Willian.

Linguagem sorteada: Typescript

## Aula 01 08/02/2019 #################################################################

[Prática]
Faça um algoritmo que leia as 3 notas de um aluno e calcule a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é: 3,3 e 4, respectivamente.
Escreva este mesmo algoritmo em pseudocódigo.

[Prática]
Faça um algoritmo que leia uma temperatura em graus Celsius e apresente-a convertida em graus Fahrenheit. A fórmula de conversão é: F = (9 * C + 160) / 5, na qual F é a temperatura em Fahrenheit e C é a temperatura em Celsius; 
Escreva este mesmo algoritmo em pseudocódigo.

## Aula 02 22/02/2019 #################################################################

[Prática]
Para cada linguagem foco, definir:
Paradigmas de Programação
Tipo da linguagem
Compilada X Interpretada
Fortemente X Fracamente Tipada
Linguagem Script X Linguagem Programação
Principais aplicações: Web, IoT, Aplicações Desktop
Exemplos de uso

## Aula 03 15/02/2019 #################################################################

[Prática]
Para as linguagens foco, pesquisar sintaxe e semântica.
Palavras reservadas,
Literais,
Operadores, etc.

Gramática léxica e palavras reservadas
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar

https://andrebtoe.com/category/typescript/

TRADUZIR TYPESCRIPT PARA JAVASCRIPT
instalar o npm
comando "tsc nomearquivo.ts"

##Aula 04 01/03/2019 #################################################################

[Prática]
Listar principais versões  do Javascript e Typescript
Para cada versão, listar conjunto de ferramentas de desenvolvimento.
Identificar diferenças entre as principais versões da linguagem Javascript e Typescript

Principais versões do Javascript e Typescript
https://www.w3schools.com/js/js_versions.asp

Para cada versão, listar conjunto de ferramentas de desenvolvimento.

Versão 6: ECMAScript 2016
PRINCIPAIS MUDANÇAS
    Added exponential operator (**).
    Added Array.prototype.includes.

PRINCIPAIS FERRAMENTAS
    D3, Drop, React, EaselJS, Marionette, Spacebase  


*Versão 7: ECMAScript 2017
PRINCIPAIS MUDANÇAS
    Added string padding.
    Added new Object properties.
    Added Async functions.
    Added Shared Memory.

PRINCIPAIS FERRAMENTAS
    Bootstrap, Asp.Net, Powershell, Git e Postman.


*Versão 8: ECMAScript 2018
PRINCIPAIS MUDANÇAS    
    Added rest / spread properties.
    Added Asynchronous iteration.
    Added Promise.finally().
    Additions to RegExp.

PRINCIPAIS FERRAMENTAS
    Node, Json, Ajax, Angular, Backbone e Jquery

Identificar diferenças entre as principais versões da linguagem Javascript e Typescript
https://imasters.com.br/desenvolvimento/es2018-finalmente-saiu-o-que-tem-de-bom

[Prática]
Descubra a estrutura mínima necessária para escrever o código de um programa para NodeJS
https://tableless.com.br/o-que-nodejs-primeiros-passos-com-node-js/

Escreva um programa Hello World Javascript e outro Typescriot usando uma ferramenta de desenvolvimento
https://tableless.com.br/o-que-nodejs-primeiros-passos-com-node-js/
*Ver pasta Aula04-01-03

[Prática]
Compilar o programa Typescript para ES6+

Usar NodeJS para executar os códigos Javascript (original e compilado a partir do Typescript)

##Aula 05 08/03

TypeScript suporta todos os tipos básicos de dados que o JavaScript, assim como um adicional para enumeração
TypeScript também suporta tipagem da variável, forçando que ela aceite apenas o especificado, para isso seguimos a seguinte regra:

var nomeDaVariavel: tipo = valor;

tipos primitivos simples:
    String - valores do tipo texto
    Number - qualquer número (ponto flutuante também)
    Boolean - true/false

tipos primitivos compostos:
    Array - uma coleção de valores.
        var persons: string[] = ['Erik', 'Fernanda'];
        var persons: Array<string> = ['Erik', 'Fernanda'];

    Se você for usar vários tipos de valores dentro do array vai poder usar o tipo any, vou falar dele a logo mais.
        var persons: any[] = ['Erik', 30, true];

    Enum - o tipo enum (enumeração) é ideal para trabalhar com listas
        enum Color {Red, Green, Blue};
        var c: Color = Color.Green;

        console.log(c);

    Any - tipo que aceita qualquer coisa
    Void - nenhum tipo de dados


Link para playground typescript
https://bit.ly/2EGIf3h


    Práticas

1. Para sua linguagem, pesquise outras conversões de tipos e escreva um programa com exemplos.

https://bit.ly/2HhE2qu

2. Para sua linguagem, experimente os exemplos de coleções apresentados e explore outros exemplos.

https://bit.ly/2T3OOCa

3. Para sua linguagem, desenvolva exemplos de código usando as duas categorias básicas de fluxos de controle de modo a justificar seu uso.

https://bit.ly/2CluAxX

4. Para sua linguagem, identifique a pratica recomendada de Input e Output de informações usando o teclado e o console.

Versão de entrada e saída do nodejs server: https://bit.ly/2CdsEaX
Versão de entrada e saída navegador: https://bit.ly/2VX2hNR


5. A conversão de graus Celsius para Farenheit pode ser obtida por: TF = 1.8 * TC + 32. Fazer um programa que leia um valor qualquer em graus Celsius e calcule e escreva o valor convertido em graus Farenheit. Apresente as mensagens adequadas de entrada e saída.

Observação: Para testar se a sua resposta está correta saiba que 100 Celsius=212 Farenheit.

https://bit.ly/2VXdbmM

6. As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e
lhe contraram para desenvolver o programa que calculará os reajustes.

Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte
critério, baseado no salário atual:

salários até R$ 280,00 (incluindo) : aumento de 20%
salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
salários de R$ 1500,00 em diante : aumento de 5%

Após o aumento ser realizado, informe na tela:

o salário antes do reajuste;
o percentual de aumento aplicado;
o valor do aumento;
o novo salário, após o aumento.

https://goo.gl/2EGUq6

##Aula 06 15/03

1. Para sua linguagem, desenvolva uma função fatorial que recebe um número e retorna um array contendo cada passo os valores fatorial do número até 0. Obtenha o valor via Input e chame essa função. Imprima o resultado no final. Exemplo:
5 => [120, 24, 6, 2, 1, 1]

https://bit.ly/2Y3H0ny

2. Para a prática anterior, refaça utilizando funções anônimas.

https://bit.ly/2HwmpDx

##Aula 07 22/03

1. Escreva exemplos o uso de diferentes escopos citados aqui

https://goo.gl/YvDLzp

2. Pesquise métodos de gerenciamento de memória

https://goo.gl/Ea3AC3

3. Pesquise ao menos 2 ferramentas que permitem fazer análise de código e calculo de métricas

https://goo.gl/AdWygB

##Aula 08 29/03