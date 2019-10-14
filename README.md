# Fruit

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8 , with Firebase for CRUD products, in addition to registering and logging in with a user. It also has Angular animations

## Clone project

Press the Clone or download button, choose the SSH option and copy the SSH key. Then in your terminal for example if you use Git Bash, PowerShell or another, first create a directory where the project repository will be stored, once created, enter `git clone SSH key copied`for example `git clone git@github.com:Luis-1896/Market.git`.

## Restore node_modules of the angular project

First we move to the folder where the content of the project is from the terminal and enter `npm install`, with this the node_modules folder is restored with all the libraries and imports important for the project.

## Set up the project with a new Firebase

First we go to the [Firebase](https://firebase.google.com/) page and create a project by pressing the Get Started button, once the project is created, and according to the following image, we copy the attributes of firebaseConfig to our project in the enviroments.ts file
<br>
<img height="300" src="https://raw.githubusercontent.com/Luis-1896/prueba/master/1.JPG"/>
<br>
<img height="300" src="https://raw.githubusercontent.com/Luis-1896/prueba/master/2.JPG"/>


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Compodoc

Run `npm rum compodoc`to see the structure of the project developed. Navigate to `http://127.0.0.1:8080/`.

## Create an Admin user to upload products

In Firebase choose the Authentication option and in access method enable E-mail / password.
<br>
<img height="300" src="https://raw.githubusercontent.com/Luis-1896/prueba/master/3.JPG"/>
<br>
When the project server is running with ng serve, it is located in the sign up menu, fill in the data and then in Firebase choose the Database option and you will see that the root was created with the name of users and later the id which gives firebase to the user created with attributes that you entered. In the admin field you can select it and in value put false.
<br>
<img height="300" src="https://raw.githubusercontent.com/Luis-1896/prueba/master/4.JPG"/>
<br>
Once the user is created and modified to admin, you can log in and in the Dashboard menu, you can add your products with the name, price and a product image.
<br>
<img height="300" src="https://raw.githubusercontent.com/Luis-1896/prueba/master/5.JPG"/>
<br>

## See the added products

In Home you can see all the added products that both you and admin and other users can buy the products that can be seen in the Cart menu
<br>
<img height="300" src="https://raw.githubusercontent.com/Luis-1896/prueba/master/6.JPG"/>
<br>

## See the products in the cart

You can see the products added to the cart and be able to modify the purchase or delete it.
<br>
<img height="300" src="https://raw.githubusercontent.com/Luis-1896/prueba/master/7.JPG"/>
<br>

