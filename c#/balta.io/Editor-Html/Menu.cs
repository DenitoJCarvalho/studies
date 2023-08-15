using System;
using Controllers;

namespace EditorHtml
{
  public static class Menu
  {
    public static void Show()
    {
      Console.Clear();
      Console.Write("\n");
      Console.BackgroundColor = ConsoleColor.DarkBlue;
      Console.ForegroundColor = ConsoleColor.Black;

      DrawScreen.DesenharTela();
      WriteOptions.EscreverOpcoes();

      var escolha = short.Parse(Console.ReadLine());
      HandleMenuOption.ManipularOpcoesMenu(escolha);
    }
  }
}