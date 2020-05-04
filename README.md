# ProductHunt Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

#### Node.js and Angular

Before starting using the project, you will need to have Node.js and Angular installed.

To download Node, check site [the official Node.js website](https://nodejs.org/en/download/).
Then run this in your terminal to check that it's installed, and get the version.

```
    node -v
```

To install Angular globally on your machine, run the following commands. You can have more informations [here](https://angular.io/guide/setup-local).

```
    npm install -g @angular/cli
```

#### Dependencies

After cloning the project into your computer, go inside it.

```
    cd product-hunt
```

You will need several dependencies for this project.

Inside `product-hunt` folder, install the backend dependencies.

```
    npm install axios --save
```

```
    npm install express --save
```

```
    npm install cors --save
```

```
    npm install rxjs-compat --save
```

Inside `product-hunt/product-hunt-front` folder, install the frontend dependencies.
First, you will need [Angular Material](https://material.angular.io/).

```
    cd product-hunt-front
```

```
    ng add @angular/material
```

You will also need [lodash](https://lodash.com/) and [d3.js](https://d3js.org/).

```
    npm install lodash --save
```

```
    npm install d3 --save
    npm install -D @types/d3
```

### Connecting to the API

In order to retrieve data from the Product Hunt API, you will need a token.
To get one, follow the instructions in the [API Docs](https://api.producthunt.com/v2/docs).

Create a [Product Hunt account](https://www.producthunt.com/), and then go to API DASHBOARD in your account menu.
Click on "Add an application", give it a name and a random URI.

Then in the "Developper Token" section, click on "Create Token".

Finally, paste the token in the `app.js` file of the project.

### Running

To run the project, go in the `product-hunt`folder, and first launch the backend server.

```
    node server.js
```

The backend is accessible at [http://localhost:3000/api](http://localhost:3000/api).

To start the front end, enter inside the folder

```
    cd product-hunt-front
```

and start the Angular project

```
    ng serve
```

You should see the project running on [http://localhost:4200/](http://localhost:4200).

## Running the tests

To run the tests, use

```
    ng test
```

## Author

* [Solène Gardies](http://github.com/soleneG02)
