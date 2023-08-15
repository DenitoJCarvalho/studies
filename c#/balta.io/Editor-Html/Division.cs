namespace EditorHtml
{
  public static class Division
  {
    public static void Separacao(char simbolo)
    {
      for (int i = 0; i <= 30; i++)
      {
        Console.Write($"{simbolo}");
      }
      Console.Write("+");
      Console.Write("\n");
    }

  }
}