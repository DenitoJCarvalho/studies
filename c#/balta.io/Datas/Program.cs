using System.Globalization;
using System.Collections.Generic;

namespace Datas
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.Clear();

      DateTime data = DateTime.Now;
      DateTime data1 = new DateTime(2022, 05, 02, 20, 41, 02);
      var pt = new CultureInfo("pt-BR");
      var es = new CultureInfo("es-ES");
      var us = new CultureInfo("en-US");
      var arg = new CultureInfo("es-Ar");

      var formatada = String.Format("{0:dd/MM/yy}", data);
      var formatada1 = data.ToString("dd/MM/yy");
      var addDays = data.AddDays(5);
      var addMonth = data.AddMonths(1);
      var addYear = data.AddYears(2);
      var addHour = data.AddHours(2);

      var qtdDiasMes = DateTime.DaysInMonth(2022, 7);

      var isWeekDay = DateTime.Now.DayOfWeek.Equals(DayOfWeek.Saturday) || DateTime.Now.DayOfWeek.Equals(DayOfWeek.Sunday);

      var isDayLightSavingTime = DateTime.Now.IsDaylightSavingTime();

      var timeSpan = new TimeSpan(
        DateTime.Now.Hour, DateTime.Now.Minute, DateTime.Now.Second
      );

      var dias = new List<DateTime>();

      var finalDeSemana = 0;

      for (var i = 0; i < qtdDiasMes; i++)
      {
        dias.Add(DateTime.Now.AddDays(i));
      }

      Console.WriteLine(@$"
        Data para comparação => {data}
        Usando String. Format => {formatada}
        Usando Tostring => {formatada1}
        Usando addDays => {addDays}
        Usando addMonth => {addMonth}
        Usando addYears => {addYear}
        Usando addHour => {addHour}
        Usando CultureInfo do Brazil => {data1.ToString(pt)}
        Usando CultureInfo do Espanha => {data1.ToString(es)} 
        Usando CultureInfo do USA => {data1.ToString(us)}
        Usando CultureInfo do Argentina => {data1.ToString(arg)}
        Usando CultureInfo para pegar a cultura atual => {data.ToString(CultureInfo.CurrentCulture)} 
        Pegando data e horário universal de acordo com a zona => {DateTime.UtcNow}
        Pegando a Zona do país => {TimeZoneInfo.FindSystemTimeZoneById}
        Usando TimeSpan() => {timeSpan}
        Verificando quantos dias tem um mês => {qtdDiasMes}
        Verificando se é final de semana => {isWeekDay}
        Verificando se é horário de verão => {isDayLightSavingTime}
        Dias do mês: {dias.Count()}
        Finais de semana {finalDeSemana}
        {teste}
      ");
    }

  }
}