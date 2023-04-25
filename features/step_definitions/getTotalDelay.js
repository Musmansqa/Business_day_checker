const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const businessDayCalculator = require('/Users/dev/Desktop/qa-challenge-application/lib/dates.js');

let initialdate;
let delay;
let country;
let result;

Given('an initial date {string}', function (date) {
    initialdate = new Date(date);
  });
  
Given('a delay of {int} business days', function (numDays) {
    delay = numDays;
  });

When('I calculate the total delay for country {string}', function (country) {
    result = businessDayCalculator.getTotalDelay(initialdate, delay, country);
  });
  
Then('the result should be:', function (table) {
    const expected = table.rows()[0];
  
    expect(result.holidayDays).to.equal(parseInt(expected[0], 10));
    expect(result.totalDays).to.equal(parseInt(expected[1], 10));
    expect(result.weekendDays).to.equal(parseInt(expected[2], 10));
  });