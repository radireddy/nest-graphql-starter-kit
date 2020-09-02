## Description

[Nest](https://github.com/nestjs/nest), GraphQL, RESTDataSource starter repository.

## Installation

```bash
$ npm install
```

## Schema generation

Everytime when you add a new schema or modify the existing schema, use below commnad to generate schema calss.
```bash
# development
$ npx ts-node ./src/generate-typings.ts
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

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
