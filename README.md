# Angular 8 example application

[![Build Status](https://travis-ci.org/peter-patocka/angular-web.svg?branch=master)](https://travis-ci.org/peter-patocka/angular-web) 
[![Build Status](https://camo.githubusercontent.com/be46aee4f8d55e322c3e7db60ea23a4deb5427c9/68747470733a2f2f6865726f6b752d62616467652e6865726f6b756170702e636f6d2f3f6170703d6865726f6b752d6261646765)](https://piixon-angular-web.herokuapp.com/) 


Firstly, because project is handled by NPM - Node package manager, we need to install dependencies for the node project:
```
npm install
```

## How to start

```
npm run start
```

Our Angular application is ready on the following URL: `http://localhost`

### How to check formatting with TSLint

TSLint checks TypeScript code for readability, maintainability, and functionality errors.

```
npm run lint
```

### How to run all unit tests

Unit testing is focused on testing single units. All tests are isolated.
Services, network and other resources are replaced by mocks (fake objects).
Karma and Jasmine framework are used to write all unit test in `src/**.spec.ts`.

```
npm run test
```

### How to run all e2e tests

With e2e testing you can go through the GUI like a user does - functional testing.

E2E tests are powered by a Selenium web-driver and a testing library called Protractor. Protractor is an E2E test runner that can take scenario tests and run them in the browser. 

The test code itself is written using Jasmine - a testing library the provides all the assertion and utility functions needed to write unit and E2E tests.

To run all tests in `e2e` folder, use script:

```
npm run e2e
```

## Copyright and License

Copyright 2019 PiixON s.r.o. Code released under the [MIT](https://github.com/peter-patocka/angular-web/blob/master/LICENSE) license.
