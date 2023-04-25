# Business Day Checker
Returns the number of business days it will take for a payment to be allocated into an account.

## Run Locally

```
npm install
npm start
```

## API

The entire API is accessible under `/api/v1` and the following endpoints are available:

- `GET /api/v1/settlementDate`
- `GET /api/v1/isBusinessDay`

## How to run the test suite

```
npm test
```

## Test suite details
Feature tests are written in cucumber and steps are defiend in javascript.


Chai Assertion libarary is used for assertions.


Code coverage report is generated using Istanbul.

![image](https://user-images.githubusercontent.com/105383640/234157398-83392eac-e399-4840-a648-9fbaeab2d424.png)



