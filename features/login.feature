Feature: User login
  As a registered user
  I want to log in to the system
  So that I can access my account

  Scenario: Successful login
    Given the user has a valid account
    When the user enters their username and password
    Then the user should be redirected to the dashboard

  Scenario: Unsuccessful login
    Given the user has a valid account
    When the user enters an incorrect password
    Then an error message should be displayed
