using EditorHtml;

namespace Controllers
{
  public class HandleMenuOption
  {
    public static void ManipularOpcoesMenu(short option)
    {
      switch (option)
      {
        case 1: Editor.Show(); break;
        case 2: Console.WriteLine("View"); break;
        case 0:
          {
            Console.Clear();
            Environment.Exit(0);
            break;
          }
        default: Menu.Show(); break;
      }
    }
  }
}