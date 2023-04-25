const { Given, When, Then } = require('@cucumber/cucumber');
const axios = require('axios');
const { expect } = require('chai');

let apiUrl = 'https://qa-challenge-api.scratchpay.com/api';
let jwtToken = '';

Given('the user is not logged in', function () {
  // no JWT token is set
});

When('the user tries to get the email list for practice ID {int}', async function (practiceId) {
  try {
    const response = await axios.get(`${apiUrl}/clinics/${practiceId}/emails`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    });
    this.response = response;
  } catch (error) {
    this.response = error.response;
  }
});

// Then('the response should have a status code of {int}', function (statusCode) {
//   expect(this.response.status).to.equal(statusCode);
// });

Given('the user is logged in', async function () {
  // perform login to obtain JWT token
  const email = 'gianna@hightable.test';
  const password = 'thedantonio1';
  const response = await axios.get(`${apiUrl}/auth?email=${email}&password=${password}`);
  jwtToken = response.data.data.session.token;
});

When('the user searches for clinics with the term {string} in their name', async function (searchTerm) {
  try {
    const response = await axios.get(`${apiUrl}/clinics?term=${searchTerm}`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    });
    this.response = response;
  } catch (error) {
    this.response = error.response;
  }
});

Then('the response should contain a list of clinics with names containing the search term {string}', function (term) {
  const clinics = this.response.data;
  expect(clinics.data).to.be.an('array').that.is.not.empty;
  clinics.data.forEach(clinic => {
    expect(clinic.displayName.toLowerCase()).to.include(term.toLowerCase());
  });
});

Then('the response should have a status code of {int}', function (statusCode) {
  expect(this.response.status).to.equal(statusCode);
});
