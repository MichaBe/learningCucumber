Feature: Hear shout

Scenario: Listener is within range
    Given MrX is located 15 metres from MrY
    When MrY shouts "Hello"
    Then MrX can hear MrY's message