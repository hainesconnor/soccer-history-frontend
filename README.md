# Soccer History (frontend)

## Link to backend

[Backend Repository](https://github.com/hainesconnor/soccer-history-backend)

## Running the project locally

Currently, this project is only setup to be run locally.

First, spin up the backend, following the instructions after clicking on the backend link above.

Second, clone this repo, then `cd` into `soccer-history` and then run `ng-serve` to spin up a local frontend server on `localhost:4200`

Note: You'll need to have NPM and the Angular CLI installed for this to work. [Installation Instructions Here](angular.io/guide/setup-local)

### Backend URL

By default, the backend server should start at `http://127.0.0.1:8000`, but if you change that, you can configure the frontend to use a different backend address in `soccer-history/src/environments/environment.ts`.

## Frontend Design

This is a data dashboard built with Angular, Angular Material, Bootstrap, and Chart.js.

It displays:

- A line chart of the number of international socce rmatches over time (check out out that dip last year due to covid!)
- A bar graph of the 10 countries that have played the most socccer matches in history
- A table of all international soccer matches every played. This table allows you to select the country you want to see matches for, and then filter based substrings of country names to see particular oponents the selected country has played against.

## Work in Progress

Currently, testing, responsiveness, and design are all WIP.
