# RBC Donation

![image](https://user-images.githubusercontent.com/38624002/157475392-1d2dc7f5-5711-45f5-9079-503f461f60ec.png)

## Topic Title
- [Description](#desc)
- [Links](#links)
- [Features](#features)
- [Built with](#built)
- [DataBase Schema](#db-schema)
- [User Journey](#Journey)
- [User stories](#stories)
- [File Structure](#file-structure)
- [Installing the project locally](#install)
- [Team members](#team) 

## 👉🏻 **Description** <span id='desc'></span>
Blood donors and blood banks are listed in this simple app. You need to donate blood on some days but don't know where to go or don't trust the places you know about, so you want to search them up online.


## 👉🏻 **Links** <span id='links'></span>
- [Github link](https://github.com/GSG-G11/RBC_Donation)
- [Demo link](https://rbc-donation-v1.herokuapp.com)


## 👉🏻 **Features** <span id='features'></span>
- Simple UI
- Using APIs
- Pretty design
- Responsive
- Usefully website

## 👉🏻 **Built with** <span id='built'></span>

- HTML → to build the structure of the pages
- CSS → to style the application
- JS|DOM Manipulations → To create interaction between the page and the user
- node_modules
- eslint → To Use Style Code
- express.js
- postgers database
- fetch 

## 👉🏻 **DataBase Schema** <span id='db-schema'></span>

![Project_b - Page 1](https://user-images.githubusercontent.com/38624002/157231906-18f2f239-31a6-4269-936b-54b66edc124c.png)


## 👉🏻 **User Journey** <span id='Journey'></span>
- When you initially enter the site, it displays several wonderful effects before the site itself appears.
- On the home page, the donor can fill out a form with his information (name, age, etc.) and make a donation request.
- If the data entered is wrong, an error message appears. For instance, if the recipient is under the age of 18, or if the email format is improper, and so forth.
- The user can only see the latest 5 donors and the donation location, and they may also delete the donors.
- Finally, the user can see the blood banks (hospitals), as well as the number of donors and their location.


## 👉🏻 **User stories** <span id='stories'></span>
- _As a user_, In hospitals, I should be able to donate (blood banks)
- _As a user_, I should be able to view the number of donors at hospitals (blood banks).
- _As a user_, I should be able to delete the donors.

## 👉🏻 **File Structure** <span id='file-structure'></span>
```
  ~
  ┡═══╦═> public
  │   ║
  │   ╠═══╦═> css
  │   ║   ╚──=> style.html
  │   ║
  │   ╠═══╦═> error
  │   ║   ╠──=> 404.html
  │   ║   ╚──=> 500.html
  │   ║
  │   ╠═══╦═> img
  │   ║   ╠──=> error-page.gif
  │   ║   ╠──=>....
  │   ║   ╚──=> favicon.ico
  │   ║
  │   ╠═══╦═> js
  │   ║   ╚──=> script.js
  │   ║
  │   ╚──=> index.html
  │
  ┡═══╦═> src
  │   ║
  │   ╠═══╦═> controllers
  │   ║   ╠──=> bankController.js
  │   ║   ╠──=> donorController.js
  │   ║   ╠──=> errorController.js
  │   ║   ╚──=> index.js
  │   ║
  │   ╠═══╦═> db
  │   ║   ╠═══╦═> build
  │   ║   ║   ╠──=> build.js
  │   ║   ║   ╠──=> build.sql
  │   ║   ║   ╚──=> testBuilder.js
  │   ║   ║
  │   ║   ╠═══╦═> config
  │   ║   ║   ╠──=> db.js
  │   ║   ║   ╚──=> dbconfig.js
  │   ║   ║
  │   ║   ╚──=> queries.js
  │   ║
  │   ╠═══╦═> middleware
  │   ║   ╚──=>index.js
  │   ║
  │   ╠═══╦═> routes
  │   ║   ╠──=> bankRoutes.js
  │   ║   ╠──=> donorRoutes.js
  │   ║   ╚──=> index.js
  │   ║
  │   ╠═══╦═> test
  │   ║   ╠──=> db.test.js
  │   ║   ╚──=> router.test.js
  │   ║
  │   ╠──=> app.js
  │   ╚──=> server.js
  │
  ┡════> .gitignore
  ┡════> .eslintrc.json
  ┡════> example.env
  ┡════> package.json
  ╘════> README.md
```

## 👉🏻 **Installing the project locally** <span id='install'></span>
- `git clone https://github.com/GSG-G11/RBC_Donation`
- `cd RBC_Donation`
- `npm install`
- `code .`

**_`npm start`_** ==> For run Project
**_`npm run build`_** ==> For build database

## 👉🏻 **Team members** <span id='team'></span>
- [Abedalrahman Shamia](https://github.com/abedshamia)
- [Ahmed Ibrahim Qeshta](https://github.com/AhmedQeshta)


