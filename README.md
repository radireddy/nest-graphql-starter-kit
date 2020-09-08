## Description

[Nest](https://github.com/nestjs/nest), GraphQL, RESTDataSource starter repository.

## Installation

```bash
$ git clone https://github.com/radireddy/nest-graphql-starter-kit.git project
$ cd project
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
Visit http://localhost:9000/graphql 
Note: You need valid cookie to go through authentication to access any API's. To do this, first start Manager in localhost in port 9000. Accesss the Manager UI and authenticate using your name and password. Stop the mannager server and start NestJs server in same port. Open http://localhost:9000/graphql . Open settings page by clicking gear iocn at the right top. Change value of "request.credentials" to "same-origin". 

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Schema generation

Everytime when you add a new schema or modify the existing schema, use below commnad to generate schema calss.
```bash
# development
$ npx ts-node ./src/generate-typings.ts
```
