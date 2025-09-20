using web_api.Models;

namespace web_api.Services;

public class PizzaServices
{
    static List<Pizza> Pizzas { get; }
    static int nextId = 3;
    static PizzaServices()
    {
        Pizzas = new List<Pizza>
        {
            new Pizza { Id = 1, Name = "Margherita", IsGlutenFree = false },
            new Pizza { Id = 2, Name = "Romana", IsGlutenFree = true }
        };
    }

    #region Pegar todos as pizzas
    public static List<Pizza> GetAll() => Pizzas;
    #endregion

    #region Pegar pizza por id
    public static Pizza? Get(int id) => Pizzas.FirstOrDefault(p => p.Id == id);
    #endregion

    #region Adicionar pizza
    public static void Add(Pizza pizza)
    {
        pizza.Id = nextId++;
        Pizzas.Add(pizza);
    }
    #endregion

    #region deletar pizza
    public static void Delete(int id)
    {
        var pizza = Get(id);
        if (pizza is null)
            return;

        Pizzas.Remove(pizza);
    }
    #endregion

    #region Atualizar pizza
    public static void Update(Pizza pizza)
    {
        var index = Pizzas.FindIndex(p => p.Id == pizza.Id);
        if (index == -1)
            return;

        Pizzas[index] = pizza;
    }
    #endregion

}
