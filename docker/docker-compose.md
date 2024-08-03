# Entendendo docker compose

Compose serve para complementar nossa imagem informando quais são as configurações e  os itens necessários (services)  que precisamos para rodar nossa aplicação.


### Modelo de docker compose

**version**: <versão do docker > <small style="font-size: 12px; ">**Obs:**: A versão mais recente é a 3.7</small>

**services**: <quais são os serviços que queremos criar.>
  
**web**: <nome do serviço>
    
**image**: <qual imagem queremos usar>

**ports**: <porta usada para definir os mapeamentos entre máquina host e os contêiners>

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