
# Matches

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
