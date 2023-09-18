let nome: string = "Adrian";
let num: number = 2;
let condition: boolean = true;
let qualquerCoisa: any = "adsds5";
let superNumero: bigint = 154584848878785645646n;
let euSouUmaArray: string[] = ['fresa', 'piña', 'manzana', 'sandia', 'uva'];
let euSouUmaTupla: [number, string, string] = [2, "Adrian", "Desenvolvedor JR"];
// const enum euSouEnum { Jessica, Adrian, Livia, Dennis };

console.log(
  `
  nome: ${nome} => variável do tipo: ${typeof (nome)}
  idade: ${num} => variável do tipo: ${typeof (num)}
  condição: ${condition} => variável do tipo: ${typeof (condition)}
  o que é isso? ${qualquerCoisa} => variável do tipo: ${typeof (qualquerCoisa)}
  eu sou um super numero: ${superNumero} => variável do tipo: ${typeof (superNumero)}
  Me gusta las frutillas: ${euSouUmaArray} => variável do tipo: ${typeof (euSouUmaArray)}
  ID: ${euSouUmaTupla[0]} - Nome: ${euSouUmaTupla[1]} - Função: ${euSouUmaTupla[2]} => variável do tipo: ${typeof (euSouUmaTupla)}
  
  `
);