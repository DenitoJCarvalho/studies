
using Microsoft.AspNetCore.Mvc;
using web_api.Models;
using web_api.Services;


namespace web_api.Controllers;

[ApiController]
[Route("[controller]")]
public class PizzaController : ControllerBase
{
    public PizzaController()
    {
    }

    #region Pegar todas as pizzas
    [HttpGet]
    public ActionResult<List<Pizza>> GetAll() => PizzaServices.GetAll();
    #endregion

    #region Pegar pizza por id
    [HttpGet("{id}")]
    public ActionResult<Pizza> Get(int id)
    {
        var pizza = PizzaServices.Get(id);

        if (pizza is null)
            return NotFound();

        return pizza;
    }
    #endregion

    #region Adicionar pizza
    [HttpPost]
    public IActionResult Create(Pizza pizza)
    {
        PizzaServices.Add(pizza);
        return CreatedAtAction(nameof(Create), new { id = pizza.Id }, pizza);
    }
    #endregion

    #region Atualizar pizza
    [HttpPut("{id}")]
    public IActionResult Update(int id, Pizza pizza)
    {
        if (id != pizza.Id)
            return BadRequest();

        var existingPizza = PizzaServices.Get(id);
        if (existingPizza is null)
            return NotFound();

        PizzaServices.Update(pizza);

        return NoContent();
    }
    #endregion

    #region Deletar pizza
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var pizza = PizzaServices.Get(id);

        if (pizza is null)
            return NotFound();

        PizzaServices.Delete(id);

        return NoContent();
    }
    #endregion
}
