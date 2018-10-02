# Assignment: AuthorsAngular
# Karen Clark
# 2018-09-30

Objectives:
Create a full CRUD app with Angular, Express, Node, and MongoDB
Include backend validations
Create an application where users submit their favorite authors. List all the authors on the first page. From there, the user may click on a button to edit or delete each author.

The edit form must be pre-populated with the existing data for the author.

Use backend validations to ensure that all author names and quotes are at least three characters long. If the user does not pass validations, display an error message. Validations must also be applied when editing an author.

BONUS: If someone tries to navigate to the edit page with an unrecognized url, display an error message. For example, "We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?" Then, provide a link to take them to the form to create an author.

BONUS: Sort the authors alphabetically.

REMINDER: When building applications which include forms and http requests, be sure to import the 'FormsModule' and 'HttpClientModule' in your AppModule file.

------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
