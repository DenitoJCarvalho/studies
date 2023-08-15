namespace EditorHtml
{
  public class WriteOptions
  {
    public static void EscreverOpcoes()
    {
      Console.SetCursorPosition(3, 2);
      Console.WriteLine("Editor Html");
      Console.SetCursorPosition(3, 3);
      Console.WriteLine("==========================");
      Console.SetCursorPosition(3, 4);
      Console.WriteLine("Selecione uma opção abaixo");
      Console.SetCursorPosition(3, 5);
      Console.WriteLine("1 - Novo arquivo");
      Console.SetCursorPosition(3, 6);
      Console.WriteLine("2 - Abrir");
      Console.SetCursorPosition(3, 7);
      Console.WriteLine("0 - Sair");
      Console.SetCursorPosition(3, 8);
      Console.Write("Opção: ");
    }
  }
}