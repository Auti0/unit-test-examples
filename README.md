# Unit Test Examples

Originally forked from <https://github.com/tfrommen/unit-test-examples>

Using this repo to test various code coverage and static code analyzers such as coveralls, codecov, sonarqube, etc.

## Getting Started

Install with [Yarn](https://github.com/yarnpkg/yarn):

```shell
yarn
yarn test
```

or

```shell
npm ci
npm run-script test
```

## Writing Tests

The repository is set up for you to write JavaScript tests with [Jest](https://github.com/facebook/jest).

### JavaScript Tests

In order to run the JavaScript tests, you have to install the required JavaScript packages first.

Install with [Yarn](https://github.com/yarnpkg/yarn):

```shell
yarn test
```

or

```shell
npm run-script test
```

By default, this will install Jest (inlcuding [`jest-each`](https://github.com/mattphillips/jest-each)), [`react-test-renderer`](https://github.com/facebook/react/tree/master/packages/react-test-renderer) and [Enzyme](https://github.com/airbnb/enzyme)

---

## License

Copyright (c) 2018 Thorsten Frommen

This code is licensed under the [MIT License](/LICENSE).
