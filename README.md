![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)

# SaverLife
This repo contains a Node.js backend which is part of a financial tracker app built for the non-profit organization SaverLife, which can be located at https://a.saverlife.dev. The app is also comprise dof a React/Redux frontend application [(repo)](https://github.com/Lambda-School-Labs/Labs25-SaverLife-TeamA-fe), a Data Science backend [(repo)](https://github.com/Lambda-School-Labs/Labs25-SaverLife-TeamA-ds), and a React Native frontend that's being finalized.
You can find the frontend deployed using AWS Amplify [here](https://a.saverlife.dev), the backend deployed using Heroku [here](https://saverlife-a-api.herokuapp.com/), and the DS API deployed using AWS Elastic Beanstalk [here](http://saverlife-a.eba-atdfhqrp.us-east-1.elasticbeanstalk.com/).

## Contributors

|                                                      [Aurelio Arcabascio](https://github.com/aurelio4)                                                       |                                                       [Manuel De La Mora](https://github.com/redpage001)                                                        |                                                      [Juan Madero Flores](https://github.com/jmadflo)                                                       |                                                       [Evan Aspaas](https://github.com/easpaas)                                                        
| :-----------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars0.githubusercontent.com/u/17240632?s=460&u=70e777d19fd29ebe83ad3751dec46e04bb76508c&v=4" width = "200" />](https://github.com/aurelio4) | [<img src="https://avatars0.githubusercontent.com/u/60905462?s=460&u=fe629c60556ceaf551cbaa7f368c375c151bc848&v=4" width = "200" />](https://github.com/redpage001) | [<img src="https://avatars0.githubusercontent.com/u/22970169?s=460&u=e0eb28586afc6cf4b8ba9366c88197bd50145d56&v=4" width = "200" />](https://github.com/jmadflo) | [<img src="https://avatars2.githubusercontent.com/u/19723399?s=460&u=ac7eb020b4087c6dd6ac6595759264236fa78742&v=4" width = "200" />](https://github.com/easpaas)
|                                [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/aurelio4)                                |                            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/redpage001)                             |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/jmadflo)                           |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/easpaas)                          
|                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/aurelio-arcabascio/)                |                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/mcdelamora/)                 |                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/juan-gerardo-madero-flores/)                |                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/evan-aspaas-a80259198/)                 |

<br>

## Endpoints

Most of the endpoints are used to enable our frontend application's test users to reach the data science API by retreiving a some information that the frontend doesn't have access to, but which the DS API is expecting. Specifically, this backend's database retrieves a bank account number that has been paired up with each test user then passes along the API request to the DS API, and returns the response returned by the DS API to the frontend to display.

All routes to this backend have the base url: https://saverlife-a-api.herokuapp.com/ and has the DS API's base url as an environment variable: http://saverlife-a.eba-atdfhqrp.us-east-1.elasticbeanstalk.com/

#### GET /data/dashboard/:user_id

Returns basic bank account information such as transactions and account type, which is displayed on the user's dashboard page on the frontend side. The url must include a user id which is the email that the user logs into the frontend site with (using Okta) as a parameter.

#### POST /data/current_month_spending/:user_id

Returns the stringlified JSON for a Plotly library chart that displays the user's current month's spending broken down by categories. The url must include a user id which is the email that the user logs into the frontend site with (using Okta) as a parameter. The incoming request's body must include an array of the existing categories which are provided by the future_budget endpoint shown below and therefore should be called after calling the future_budget endpoint:

`{
    "categories": ["Food", "Shopping", "Transportation", "Utilities", "Misc."]
}`

#### POST /data/future_budget

Returns the user's recommended level of spending for each spending category which applies to them. The incoming request's body must include a user id which is the email that the user logs into the frontend site with (using Okta) and the user's monthly savings goal. Both this and the current_monthly_spending endpoint described above retrieve the information necessary to display the budget tracker on the My Budget page of the frontend application.

`{
    "user_id": "llama003@maildrop.cc",
    "monthly_savings_goal": 100
}`

#### POST /data/spending

Returns the stringlified JSON for a Plotly library chart that displays the user's previous spending broken down by categories for the last week, month, or year. The incoming request's body must include a user id which is the email that the user logs into the frontend site with (using Okta), the graph type which can be 'bar' or 'pie' (both can be found displayed on the Past Spending page of the frontend application, and a time period which can be week, month or year.

`{
    "user_ID": "llama003@maildrop.cc",
    "graph_type": "pie",
    "time_period": "month"
}`

#### POST /data/moneyflow

Returns the stringlified JSON for a Plotly library chart that displays the user's daily net income. The incoming request's body must include a user id which is the email that the user logs into the frontend site with (using Okta) and a time period which can be week, month or year.

`{
    "user_ID": "llama002@maildrop.cc",
    "time_period": "week"
}`

## Basic node API

[![Maintainability](https://api.codeclimate.com/v1/badges/65e3a684cd28554d0383/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/labs-api-starter/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/65e3a684cd28554d0383/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/labs-api-starter/test_coverage)

The following examples can be found in this project template.

- CRUD routes for a single resource
- A Knex model providing CRUD methods for DB operations
- Some route tests with mocks on the database calls
- Okta authentication verification middleware
- eslint setup and prettier formating.
- Jest coverage setup
- Inline Swagger docs with a live route at `/api-docs`
- Github workflow config setup to run linting, tests and upload coverage to code climate
- docker-compose file for spinning up postgresql db. (Win10 Home requires WSL)

## Requirements

All [Labs Engineering Standards](https://labs.lambdaschool.com/topics/node-js/) must be followed.

## API doc

All routes can be viewed in the [/api-docs route](https:// /api-docs/)
of your deploy (or locally).

- https://localhost:8005/api-docs

Swagger docs are created using open api v3 notations. The docs are found inline
on the router files in `api/**/*Router.js` and use the yaml notation format.
The root of the docs is in `config/jsdoc.js` using the json format.

The following libraries have been used to build and serve the swagger docs live.

- [express-ui](https://github.com/scottie1984/swagger-ui-express)
- [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc)

## Getting Started

### Enviornment Variables

- `PORT` - API port (optional, but helpful with FE running as well)
- `DS_API_URL` - URL to a data science api. (eg. https://ds-bw-test.herokuapp.com/)
- `DS_API_TOKEN` - authorization header token for data science api (eg. SUPERSECRET)
- `DATABASE_URL` - connection string for postgres database
- `OKTA_URL_ISSUER` - The complete issuer URL for verifying okta access tokens. `https://example.okta.com/oauth2/default`
- `OKTA_CLIENT_ID` - the okta client ID.

See .env.sample for example values

### Setup postgres

There are 3 options to get postgresql installed locally [Choose one]:

1. Use docker. [Install](https://docs.docker.com/get-docker/) for your platform
    - run: `docker-compose up -d` to start up the postgresql database and pgadmin.
    - Open a browser to [pgadmin](http://localhost:5050/) and you should see the Dev server already defined.
    - If you need to start over you will need to delete the folder `$ rm -rf ./data/pg` as this is where all of the server data is stored.
      - if the database `api-dev` was not created then start over.
2. Download and install postgresql directly from the [main site](https://www.postgresql.org/download/)
    - make note of the port, username and password you use to setup the database.
    - Connect your client to the server manually using the values previously mentioned
    - You will need to create a database manually using a client.
    - Make sure to update the DATABASE_URL connection string with the values for username/password, databasename and server port (if not 5432).
3. Setup a free account at [ElephantSQL](https://www.elephantsql.com/plans.html)
    - Sign up for a free `Tiney Turtle` plan
    - copy the URL to the DATABASE_URL .env variable
    - make sure to add `?ssl=true` to the end of this url

### Setup the application

- For Labs projects, clone the repo. Otherwise you can create a new repo using this as a template.

  - **note** please [be sure to set your remote](https://help.github.jp/enterprise/2.11/user/articles/changing-a-remote-s-url/) for this repo to point to your Labs Team Repository.
  - Alternatively you can clone this repo then remove the git folder to initialize a new repo

    ```bash
    > git clone --depth=1 --branch=main git@github.com:Lambda-School-Labs/labs-api-starter.git NEW-REPO-NAME
    > rm -rf ./NEW-REPO-NAME/.git
    ```

- run: `npm install` to download all dependencies.
- run: `cp .env.sample .env` and update the enviornment variables to match your local setup.
- run: `npm run knex migrate:latest` to create the starting schema.
- run: `npm run knex seed:run` to populate your db with some data.
- run: `npm run tests` to confirm all is setup and tests pass.
- run: `npm run watch:dev` to start nodemon in local dev enviornment.

> Make sure to update the details of the app name, description and version in
> the `package.json` and `config/jsdoc.js` files.

## Contributing

### ESLint and prettier

[ESLint](https://eslint.org/) and [prettier](https://prettier.io/) are already
configured with Lambda Labs standards and ready to go. These must be ran from
the CLI prior to commiting code in the following ways:

- `npm run lint` to view all purposed fixes.
- `npm run lint:fix` to apply fixes to eslint issues.
- `npm run format` to apply the standards defined by eslint/prettier config.

Alternatively you can install plugins for your editor of choice.
