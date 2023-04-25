Feature: Testing the Scratchpay API

  Scenario: Prevent user from getting email list without login
    Given the user is not logged in
    When the user tries to get the email list for practice ID 2
    Then the response should have a status code of 401

  Scenario: Search for clinics with a search term
    Given the user is logged in
    When the user searches for clinics with the term "veterinary" in their name
    Then the response should have a status code of 200
    And the response should contain a list of clinics with names containing the search term "veterinary"
