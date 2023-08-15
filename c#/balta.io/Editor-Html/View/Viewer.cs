using System;
using System.Text.RegularExpressions;
using EditorHtml;

namespace Views
{
  public static class Viewer
  {
    public static void Show(string text)
    {
      Console.Clear();
      Console.BackgroundColor = ConsoleColor.White;
      Console.ForegroundColor = ConsoleColor.Black;
      Console.Clear();
      Console.WriteLine("VISUALIZADOR");
      Console.WriteLine("==========================");
      Replace(text);
      Console.WriteLine("==========================");
      Console.ReadKey();
      Menu.Show();

    }

    public static void Replace(string text)
    {
      var strong = new Regex(@"<\s*strong[^>]*>(.*?)<\s/\s*strong>");
      var word = text.Split(' ');

      for (int i = 0; i < word.Length; i++)
      {
        if (strong.IsMatch(word[i]))
        {
          Console.ForegroundColor = ConsoleColor.Blue;
          Console.Write(
            word[i].Substring(
              word[i].IndexOf('>') + 1,
              (word[i].LastIndexOf('<') - 1) - word[i].IndexOf('>')
            )
          );
          Console.Write(" ");
        }
        else
        {
          Console.ForegroundColor = ConsoleColor.Black;
          Console.Write(word[i]);
          Console.Write(" ");
        }
      }

    }
  }
}
