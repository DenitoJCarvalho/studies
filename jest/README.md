
# TDD - Teste Diven Design ( Desenvolvimento desenvolvido por testes)

Escolhi a ferramenta "_*Jest*_" para aprender mais sobre tdd visto que ela utiliza javascript - linguagem que tenho mais afinidade - e uma curva de aprendizagem mais curta.
Já a linguagem escolhi o typescript que é um superset do javascript e me permite tipar os dados.

Vou apresentar os itens conforme os estudos. Será inserido o item e uma breve explicação.

---

## Requisitos

node v18.17.1<br>
npm v9.6.5

Para instalação das dependências citadas abaixo digite: 

**npm install**

Irá instalar todos as dependências necessárias.


Caso queira testar os testes que fiz nos estudos deverá instalar os seguintes pacotes como dependência de desenvolvimento:

dependência | versão
------------ | ------
@types/jest  | "^29.5.3"
jest         | "29.6.2"
ts-jest      | "^29.1.1"
ts-node      | "^10.9.1"
typescript   | "^5.1.6"

Também aplicar as configurações disponível em  "_tsconfig.json_" e _jest.config.ts_.

Para rodar os testes:


1. npm run test => irá rodar todos os testes de uam só vez
2. jest 'nome-do-arquivo' => irá rodar apenas aquele arquivo escolhido para teste.
---


<b style="color: #56F68E ">• toBe(value)</b> - compara os valores primitivos ou verifica a identidade referencial do objeto. Ele chama "__Object.is()__" para comparar o valor.

Não é recomendado usá-lo ao utlizar em comparações de pontos flutuantes, devido a arredondamentos que faz com que os números não sejam estritamente iguais.

<b style="color: #56F68E ">• toEqual(value)</b> - funciona exatamente como o toBe(). A diferença é que ele faz uma comparaçao recursiva do objeto, comparando o valor e o tipo.

<b style="color: #56F68E ">• describe()</b> - descreve a nossa suite de teste, ou seja, o objetivo que deve ser alcançado.

<b style="color: #56F68E ">• toBeNull()</b> - tem o mesmo conceito do toBe(), porém, serve para verificar se algo é nulo.


No jest também há funções de comparações como:<br>
  <b style="color: #56F68E ">• toBeGreaterThan()</b> - comparação maior que;<br>
  <b style="color: #56F68E ">• toBeGreaterThanOrEqual()</b> - comparação maior que ou igual;<br>
  <b style="color: #56F68E ">• toBeLessThan()</b> - comparação menor que;<br>
  <b style="color: #56F68E ">• toBeLessThanOrEqual()</b> - comparação maior que ou igual;
