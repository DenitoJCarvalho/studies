# Docker

Aula sobre docker
**[Fernanda Kipper](https://www.youtube.com/watch?v=DdoncfOdru8)**

### Comandos básicos

```
docker ps
```
Mostra todos os constainer que estão rodando. Trazend informações como:
- Container ID: identificador do container
- Image: a imagem do qual esse container vem
- Command: comando que ele foi iniciado o container
- Created: quando foi criado
- Status: se está rodando ou pausado
- Ports: a porta que está utilizando para rodar o container
- names:  nome do container
<br><br>

```
docker run
```
Executa nosso container
<br><br>

```
docker stop <id-do-container>
```
Para o container indicado pelo *ID*
<br><br>

```
docker start <id-do-container>
```
Inicia o container com o id especificado no parâmetro
<br><br>

## Criando um DockerFile
```
FROM <nome da imagem>:<versão da imagem> AS build
COPY <caminho dos nossos arquivos>
WORKDIR <define nosso diretório de trabalho dentro do container>
RUN rm -rf node_modules
RUN <comandos para rodar a aplicação>
CMD <comandos para rodar o projeto>
EXPOSE <porta quer será utilizado>
 
 Exemplo
 FROM node:latest
 
 COPY ..

 WORKDIR /app

 RUN rm -rf node_modules

 RUN  npm install

 CMD ["npm", "start"]

 EXPOSE 3001
```