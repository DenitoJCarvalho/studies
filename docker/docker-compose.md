# Entendendo docker compose

Compose serve para complementar nossa imagem informando quais são as configurações e  os itens necessários (services)  que precisamos para rodar nossa aplicação.


### Modelo de docker compose

**version**: versão do docker  <small style="font-size: 12px; ">**Obs:**: A versão mais recente é a 3.7</small>

**services**: quais são os serviços que queremos criar.
  
**web**: nome do serviço
    
**image**: qual imagem queremos usar

**ports**: porta usada para definir os mapeamentos entre máquina host e os contêiners

  - Sintaxe curta para utilizar
      
      • [HOST:] - Ip ou lista de ips
      <br>
      • CONTAINER - port ou lista de portas
      <br>
      • [/PROTOCOL:] - pode ser tcp ou udp

```
Exemplo simples

services:
  web:
    image: node: 20
    ports: 
      - "8080:80"
      - "8080:80/udp
```

### Outros atributos

**container_name**: especifica um nome de container personalizado. <br>

**dns**: define servidores dns personalizados. <br>

**entrypoint**: declara o ponto de entrada padrão do container subsittuindo as instruções do dockerfile. <br>

**env_file**: especifica um ou mais arquivos que contêm variáveis de ambiente a serem passadas para os containers.<br>

**environment**: define variáveis de ambiente definids no container.

**expose**: define a porta de entrada.

**init**: executa um procesoo int (PID) dentro do container que encaminha sinais e colhe processos. <br>

**read_only**: configura o container de serviço a ser criado com um sistema de arquivos somente leitura.<br>

**restart**: define a politica que a plataforma aplica na terminação do container.<br>
  • **no**: não reinicia o container em nehuma circunstância. <br>
  • **always**: sempre reinicia o container até sua remoção; <br>
  • **on-failure**: reiniciar o container  se o código de saída indicar um erro. <br>
  • **unless-stopped**: reinicia o container independentemente do código de saída, mas para reiniciar quando o serviço é parado ou removido. <br>



