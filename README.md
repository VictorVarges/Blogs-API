# BLOGS API

## Descrição
This project was about creating an REST API with CRUD using Sequelize and MSC architecture. The project uses a relational database MySQL and it has unit tests in Mocha, Chai and Sinon.

## Ferramentas
* NodeJs w/ ExpressJs
* MySQL
* Sequelize
* Joi
* JWT 
* Mocha/ Chai / Sinon
## Intação de dependências
Clone this project and install all the dependencies 
```sh
  npm install
```
Criar um .env com essa estrutura:
``` javascript
 MYSQL_USER=root
  MYSQL_USER=root
  MYSQL_PASSWORD=aPassword
  HOSTNAME=localhost
  PORT=3000
  JWT_SECRET=anySecret
```
Executando o seguinte comando, você criará as tabelas do banco de dados e as propagará:
```sh
npm run prestart
  npm run prestart
```
```sh
npm run seed
  npm run seed
```
For debugging run: 
```sh
npm run debug
  npm run debug
```

Você pode usar <a href="https://www.postman.com/">Postman</a>, <a href="https://www.thunderclient.com/">Thunder Client</a> or <a href="https://insomnia.rest/">Insomnia</a> para fazer as requisições nos endpoints.
Você também pode dar uma olhada no <a href="https://bootcamp.rocketacademy.co/4-backend-structure/4.1-orm-sequelize/4.1.9-sequelize-setup-cheatsheet">Sequelize Setup Cheatsheet</a> feito por Rocket Academy.
## 🟢 Endpoints
#### User
* POST /user
* GET /user
* GET /user/:id
* DELETE /user/:id
#### Login
* POST /login
#### Category
* POST /categories
* GET /categories
#### Blog post
* POST /post
* GET /post
* GET /post/search
* GET /post/:id
* PUT /post/:id
* DELETE /post/:id
* DELETE /post/:id
