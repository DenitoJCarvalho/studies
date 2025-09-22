# Conversões em C#(Csharp)



## Exemplos
| Tipo |caso de uso | explicação |
| ----- |------------- |------------ |
| (int)variavel | cast direto | usar somente entre tipos numéricos compatíveis |
|int.Parse(string ) | só string | lança exceção se inválida ou null |
Convert.ToInt32(valor) | aceita mais tipos | null vira 0, mas inválidos ainda geram exceção |
int.TryParse | recebe uma entrada e uma saída e é mais seguro | não lança exceções, retorna bool


## Conversão restritiva
 - significa que você está tentando converter um valor de um tipo de dados que pode conter mais informações para um tipo de dados que pode conter menos informações.
 - pode perder informações como precisão (ou seja, o número de valores após o ponto decimal). 
  
## Converter numeros para string
Usamos o método ToString() bem parecido com JS.