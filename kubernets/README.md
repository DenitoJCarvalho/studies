# kubernets 

Diretório especifico para estudos e testes com `kubernets`.


### Modelo padrão de arquivo para kubernets

```yml
apiVersion: v1 #Versão da API
kind: Pod #Tipo do objeto
metadata: #Metadados do Pod
  name: app-html #Nome do objeto
  labels:
    app: app-html #Rótulo do Pod
spec: #Especificação do Pod
  containers: #Definição dos contêineres
  - name: app-html #Nome do container
    image: httpd:latest #Imagem do container
    ports: #Portas expostas pelo contêiner
    - containerPort: 80
```

**Observação**: para rodar suas configurações é preciso instalar `kubectl - (kubernetes control)` com suas dependências.



