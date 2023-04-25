Feature: Calculate total delay including weekend days and holidays

Scenario: Delay without weekends or holidays
    Given an initial date "2023-04-23"
    And a delay of 3 business days
    When I calculate the total delay for country "US"
    Then the result should be:
    | holidayDays | totalDays | weekendDays |
    | 1 | 6 | 2 |

Scenario: Delay with weekends but no holidays
    Given an initial date "2023-04-21"
    And a delay of 3 business days
    When I calculate the total delay for country "US"
    Then the result should be:
    | holidayDays | totalDays | weekendDays |
    | 0 | 5 | 2 |

Scenario: Delay with holidays but no weekends
    Given an initial date "2023-12-28"
    And a delay of 2 business days
    When I calculate the total delay for country "US"
    Then the result should be:
    | holidayDays | totalDays | weekendDays |
    | 0 | 2 | 0 |

Scenario: Delay with both weekends and holidays
    Given an initial date "2023-04-20"
    And a delay of 5 business days
    When I calculate the total delay for country "US"
    Then the result should be:
    | holidayDays | totalDays | weekendDays |
    | 0 | 7 | 2 |

Scenario: Delay with a zero value
    Given an initial date "2023-04-23"
    And a delay of 0 business days
    When I calculate the total delay for country "US"
    Then the result should be:
    | holidayDays | totalDays | weekendDays |
    | 0 | 0 | 0 |