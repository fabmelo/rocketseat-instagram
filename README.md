## Back-end

Criar o diretório backend e dentro dele através do terminal digitar o seguinte comando

``yarn init -y``

Ainda no terminal e dentro do diretório instalar a dependência do projeto através do comandos

``yarn add express``

Criar o diretório src e dentro dele o arquivo index.js e no arquivo importar o express e criar a aplicação através da constante.

Instalar a dependência de desenvolvimento abaixo

``yarn add nodemon -D``

E inserir no arquivo package.json o seguinte trecho de código

``
"scripts": {
    "dev": "nodemon src/index.js"
},``

Acessar o site https://www.mongodb.com/cloud/atlas para criar o banco Mongo, sem a necessidade de instalar o Mongo na máquina.

Copiar a Connection String gerada no site acima após as configurações e após isto instalar a dependência abaixo

``yarn add mongoose``

Criar os diretórios config, controllers e models dentro de src. Depois dentro dos diretórios criar os devidos arquivos.

Acessar o site https://insomnia.rest/ e fazer o download da aplicação. Esta aplicação funciona como o Postman.

20 minutos - aula 2