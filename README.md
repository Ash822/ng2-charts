# FlightAnalytics

## Solution

This application is developed to provide a solution for the following question.

```
  How many flights are there each day of the week? From which air carriers?
```

This solution has two views.

1. Days of week view
2. Day view

### Days of week view

This view present a doughnut chart which represents number of flights for each day of week.

Each slice of the chart can be drilled down, to view the information on number of flights by each airlines per day, which is the day view.

It is also possible to filter a segment (toggle on and off) using the legend.

### Day view

This view is a bar diagram from that depicts the number of flights per each airlines on any given day.

## Devlopment environment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.

Install Node Packet Manager (v10.x or above)

Install Angular CLI

```
npm install -g @angular/cli

npm install --save-dev @angular-devkit/build-angular
```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
