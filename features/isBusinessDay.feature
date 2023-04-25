Feature: Check if a date is a business day

Scenario: A weekday is a business day
    Given a date "2023-04-25"
    When I check if it's a business day for country "US"
    Then the result should be "true"

Scenario: A weekend day is not a business day
    Given a date "2023-04-22"
    When I check if it's a business day for country "US"
    Then the result should be "false"

Scenario: A holiday is not a business day
    Given a date "2023-07-04"
    When I check if it's a business day for country "US"
    Then the result should be "false"

Scenario: A valid business day for another country
    Given a date "2023-04-24"
    When I check if it's a business day for country "JP"
    Then the result should be "true"

Scenario: An invalid business day for another country
    Given a date "2023-05-05"
    When I check if it's a business day for country "JP"
    Then the result should be "false"