# APICRUD-Mysql-Express-Nodejs
This project is focused on creating a basic CRUD RestAPI with token authentication. where we use mysql, nodejs and express. We also use third party libraries such as: Sequelize, jsonwebtoken, Bcrypt and Joi for the main operation. 

# getting started 🚀

```
git clone GaGoRa/APICRUD-Mysql-Express-Nodejs
```

### Pre requirements 📋

### we need have installed

- **Database:** Mysql 

    _if you prefer you can install XAMPP for or LAMP to Manage the data from the web interface_

- **Testing tool you prefer:** Postman, SoapUI

### Installation 🔧


- first we create a new directory

- Clone repository

```
git clone GaGoRa/APICRUD-Mysql-Express-Nodejs
```
- Install the dependency
```
npm install
```
- Rename the file .env example to .env and  we put the configuration we want.

    ![imagen](./Exampleenv.jpg)

# Usage 🚀

To create a store or a shopping center, you have to create an administrator user. With this user you will be able to create the stores, the shopping malls and the clients.

**Roles:**
ADMIN, SHOPPING_MANAGER, COMERCE_MANAGER, USER

**ADMIN:** Full control

**SHOPPING_MANAGER:** Control of Shopping

**COMERCE_MANAGER:** Control of Store

**USER:** Only get store and shopping


## Fast Guide (DEMO) 🏂

* Create new user:


    ### Rute:  POST: /users
    ```
    {
    "FirstName": "Jose",
    "LastName": "Perez",
    "DNI": "99999999",
    "Birthdate": "12-21-2012",
    "Sex": "male",
    "Password": "HelloWord2456",
    "Email": "PerezJose@mail.com",
    "Rol": "ADMIN"
    }
    ```
* Authenticate

    ### Rute:  POST: /auth/login

    ```
    {
    "email":"PerezJose@mail.com",
    "password":"HelloWord2456"

    }
    ```
    * Example Response 
    _the token life is 1 hour_

     ```
    {
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7IkZpcnN0TmFtZSI6Ill1cmkiLCJMYXN0TmFtZSI6IkdvbnphbGV6IiwiRW1haWwiOiJnYWJyaWVsZ29uemFsZXpAZ21pYWwuY29tIiwiQmlydGhkYXRlIjoiMjAxMi0xMi0yMVQwMzowMDowMC4wMDBaIiwiUm9sIjoiQURNSU4ifSwiaWF0IjoxNjA2NjEyOTc5LCJleHAiOjE2MDY2MTY1Nzl9.glgJy-riIVGYikYnGq09tuOUN6QwMrBMVJV5lCj5r34

    }
    ```

* Copy this token and paste in authorizate headers (Bearer Token)

* now with this administrator user we can create users, shopping malls and store (commerce).

## API reference 🚀

### Routes ⚙️ 

 ## Users Routers : '/users' 

| Authentication|  Verbs |Routes      |     Roles |Descriptions |
|         ---:  |----  |----------- | ----------- |---|
| YES           |  GET |'/users/:id'| ADMIM         | Get one User|
| YES           |  GET |  '/users/?skip=[Num page]&limit=[Num items].'  | ADMIM         | Get list User, value default limit=5 , Skip=0 |
| NO            | POST |'/users'    | ALL         | Create new user |
| YES           |  DELETE |'/users' | ADMIN    | Delete user |
| YES           |  POST | '/users/:id' | ADMIN    | Update user|


 ## Store Routers : '/store' 

| Authentication|  Verbs  |Routes      |                                    Roles                            |Descriptions |
|         ---:  |-------  |----------- | --------------------------------- |---------------------------------|
| YES           |  GET    |'/store/:id'                                    |                       ALL       | Get one store|
| YES           |  GET    |  '/store/?skip=[Num page]&limit=[Num items].'  | ALL                             | Get list store, value default limit=5 , Skip=0 |
| YES           | POST    |'/store'                                        | COMERCE_MANAGER, ADMIN         | Create new store |
| YES           |  DELETE |'/store'                                        | COMERCE_MANAGER, ADMIN         | Delete store |
| YES           |  POST   | '/store/:id'                                   | COMERCE_MANAGER, ADMIN         | Update store|

 ## Shopping Routers : '/shopping' 

| Authentication|  Verbs |Routes       |                                    Roles                            |Descriptions |
|         ---:  |-------  |----------- | --------------------------------- |---|
| YES           |  GET    |'/Shopping/:id'                                    |                       ALL       | Get one Shopping|
| YES           |  GET    |  '/Shopping/?skip=[Num page]&limit=[Num items].'  | ALL                             | Get list Shopping, value default limit=5 , Skip=0 |
| YES           | POST    |'/Shopping'                                        | SHOPPING_MANAGER, ADMIN         | Create new Shopping |
| YES           |  DELETE |'/Shopping'                                        | SHOPPING_MANAGER, ADMIN         | Delete Shopping |
| YES           |  POST   | '/Shopping/:id'                                   | SHOPPING_MANAGER, ADMIN         | Update Shopping|



## Build with 🔧

* [bcrypt](github.com/kelektiv/node.bcrypt.js) 
* [express](expressjs.com/)
* [joi](https://joi.dev/)
* [jsonwebtoken](github.com/auth0/node-jsonwebtoken)
* [morgan](github.com/expressjs/morgan)
* [mysql2](https://github.com/sidorares/node-mysql2#readme)
* [sequelize](https://rometools.github.io/rome/)


## Author ✒️

**Gabriel Gonzalez Rangel** 

## License📄

This Project is under license  (MIT) - Look this  [LICENSE.md](LICENSE.md) 