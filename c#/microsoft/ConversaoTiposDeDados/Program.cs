
int first = 2;
string second = "3";
int result = first + int.Parse(second);

Console.WriteLine(result);

Console.WriteLine("Exemplo de conversão restritiva");
Console.WriteLine("_________________________________");
decimal decimalValue = 1.543210m;
float floatValue = (float)decimalValue;

Console.WriteLine($@"
  Decimal: {decimalValue}
  Float: {floatValue}  
");

Console.WriteLine("_________________________________");

int cost = (int)3.75m;
int cost1 = Convert.ToInt32(3.75m);
uint cost2 =(uint)3.75m;

Console.WriteLine($"Custo: {cost}");
Console.WriteLine($"Custo: {cost1}");
Console.WriteLine($"Custo: {cost2}");

string input = "10";
bool success = decimal.TryParse(input, out decimal number);

Console.WriteLine($"Conversão bem sucedida: {success}");


string[] values = { "12,3", "45", "ABC", "11", "DEF" };

decimal total = 0;
string message = string.Empty;
foreach (var item in values)
{
  if (decimal.TryParse(item, out decimal resultDecimal))
  {
    total += resultDecimal;
  }
  else
  {
    message += item;
  }
}

Console.WriteLine($@"
  Message: {message}
  Total: {total}
");

