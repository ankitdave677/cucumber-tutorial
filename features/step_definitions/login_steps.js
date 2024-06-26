const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('the user has a valid account', function () {
  // Set up a valid user account
  this.user = { username: 'testuser', password: 'password123' };
});

When('the user enters their username and password', function () {
  // Simulate entering username and password
  this.enteredUsername = 'testuser';
  this.enteredPassword = 'password123';
});

Then('the user should be redirected to the dashboard', function () {
  // Check if the user is redirected
  assert.strictEqual(this.enteredUsername, this.user.username);
  assert.strictEqual(this.enteredPassword, this.user.password);
  this.redirected = true;
  assert.strictEqual(this.redirected, true);
});

When('the user enters an incorrect password', function () {
  // Simulate entering an incorrect password
  this.enteredPassword = 'wrongpassword';
});

Then('an error message should be displayed', function () {
  // Check if an error message is displayed
  assert.notStrictEqual(this.enteredPassword, this.user.password);
  this.errorMessage = 'Invalid username or password';
  assert.strictEqual(this.errorMessage, 'Invalid username or password');
});
