const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let today;
let answer;

Given('today is Sunday', function () {
  today = 'Sunday';
});

When('I ask whether it\'s Friday yet', function () {
  if (today === 'Friday') {
    answer = 'Yes';
  } else {
    answer = 'Nope';
  }
});

Then('I should be told {string}', function (expectedAnswer) {
  assert.strictEqual(answer, expectedAnswer);
});
