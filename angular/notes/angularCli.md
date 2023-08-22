
# Angular CLI

*Comando mais usados*  | *Função*
--------------------   | ------
ng new 'NomeProjeto'   | cria um novo projeto
ng serve               | roda oo projeto no servidor por padrão roda na porta 4200
ng generate            | serve para gerar um componente de acordo com o esquema que pode ser: c - para gerar componente, m - para gerar um modulo, s - para gerar um serviço, d - para gerar uma nova diretiva. Mais informações em [documentação](https://angular.io/cli/generate).


Podemos configurar para que o nosso projeto utilize um pré-processador das seguintes formas:<br>

Novos projetos
> ng new nome-projeto --style=scss<br>
> ng new nome-projeto --style=less<br>
> ng new nome-projeto --style=stylus

OU 

Caso já tenha o projeto
> ng set defaults.styleExt scss<br>
> ng set defaults.styleExt less<br>
> ng set defaults.styleExt styl<br>


__*Obs:*__ no último caso só os novos componentes serão gerados com a alteração os anteriores teria que fazer na mão mesmo.

Também temos a opção de usar outros comandos como:

*Comando*  | *Função*
---------- | ----------
ng lint    | Escaneia o código e verifica as boas práticas do style guide, procurando por alguns erros como falta de ponto e vírgula, imports não utilizados e assim por diante.
ng test    | Executa o jasmine para efetuar os testes unitários.
ng e2e     | Executa testes de integração.


Quando vamos fazer o deploy em produção do nosso projeto podemos rodar os seguintes comandos:<br>
>ng build --target=production --environment=prod<br>
>ng build --prod --env=prod<br>
>ng build --prod<br>

Instalando bibliotecas externas

1. Instalamos através do 'npm i -S nome-do-pacote'<br>
2. Setamos no angular.json em "scripts": [path-do-pacote]<br>