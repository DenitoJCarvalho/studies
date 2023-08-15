StreamWriter sw = new StreamWriter("D:\\dev\\dennis\\curso-csharp\\Dio\\Desenvolvimento_de_aplicacoes_com_asp.net _core\\TesteDemanda\\TesteDemanda\\bin\\Debug\\net6.0\\teste2.txt", true);

if (args.Length == 0) 
    sw.WriteLine($"Nenhum parametro foi informado. - {DateTime.Now}");
else
{
    foreach(var nome in args)
    {
        sw.WriteLine($"Nome informado é {nome} - {DateTime.Now}");
    }

}

sw.Close();



