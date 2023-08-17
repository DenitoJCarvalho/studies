
# Matches

<b style="color: #56F68E ">• toBe(value)</b> - compara os valores primitivos ou verifica a identidade referencial do objeto. Ele chama "__Object.is()__" para comparar o valor.

Não é recomendado usá-lo ao utlizar em comparações de pontos flutuantes, devido a aredondamentos que faz com que os número snão sejam estritamente iguais.

<b style="color: #56F68E ">• toEqual(value)</b> - funciona exatamente como o toBe(). A diferença é que ele faz uma comparaçao recursiva do objeto.

<b style="color: #56F68E ">• describe()</b> - descreve a nosa suite de teste, ou seja, o objetivo que deve ser alcançado.

