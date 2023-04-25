const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const businessDayCalculator = require('/Users/dev/Desktop/qa-challenge-application/lib/dates.js');

let result;

Given('a date {string}', function (date) {
  this.date = date
})

When('I check if it\'s a business day for country {string}', function (country) {
  result = businessDayCalculator.isBusinessDay(this.date, country)
})

Then('the result should be {string}', function (expectedResult) {
  expect(result).to.equal(expectedResult === 'true')
})