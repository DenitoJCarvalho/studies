# CI / CD

**CI** - Continuos Integration, ou , Integração Continua.<br>
Trata-se  de uma prática de desenvolvimento de software que visa tornar a intregração de código mais eficiente por meio de builds e testes automatizados.

**CD** - Continuos Delivery, ou, Entrega Continua.<br>
Se refere a entrega continua ou implantação continua.<br>
Representa as mudanças feitas por desenvolvedores e, uma aplicação para verificar automaticamente a presença de bugs e carregá-los em um repositório.

**Impalantação Continua** - se refere ao lançamento automático das mudanças feitas por uma pessoa desenvolvedora, do repositório à produção, onde pode ser usados por clientes.

Esse é um modelo de arquivo de configuração para _**CI**_ baseado na documentação do [github actions](https://docs.github.com/pt/actions/learn-github-actions/understanding-github-actions)

```
name: minha-primeira-integracao-continua

on: pull_request

jobs: 
   meu-primeiro-continuos-integration:
    runs-on: windows-latest

    steps:
      - uses: actions/checkout@v3
      - name: Using Node.js
        uses: actions/setup-node@v2
        with:
           node-version: 18.
      - name: Rodar instalacao, build e testes
        run: |
          npm install
          npm run build
          npm run test      
```

Código | Explicação
-------|------------
name   | Opcional - Onome do fluxo de trabalho, conforme ele será exibido na guia de "Ações" do repositório Github.
on     | Especifica o gatilho para este fluxo de trabalho.
jobs   | Agrupa todos os trabalhos executados no fluxo de trabalho
runs-on | Configura o trabalho a ser executado na versão mais recente do sistema operacional que escolher. No meu caso Windows.
steps   | Agrupa todas as etapas que são executadas no trabalho. Cada item item aninhado nesta seção é uma ação separada ou script do shell.
uses    | Especifica a ação que será executada. No exemplo acima ira executar o check-out no repositório e outro instalar versão que determinei do Node.
with    | Aplica regras que posso determinar como no exemplo foi determinado usar a versão Node 18.
run     | Executa os comandos passados .