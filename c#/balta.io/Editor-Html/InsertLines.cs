namespace EditorHtml
{
  public static class InsertLines
  {
    public static void InserirLinhas()
    {
      for (int i = 0; i <= 10; i++)
      {
        Console.Write("|");

        for (int j = 0; j <= 30; j++)
        {
          Console.Write(" ");
        }

        Console.Write("|");
        Console.Write("\n");

      }
    }
  }
}