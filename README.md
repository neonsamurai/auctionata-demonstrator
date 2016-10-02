# Auctionata Demonstrator

Small demonstrator based on a coding challenge provided by Auctionata. It should show my style of writing code and how
I approach solving a given problem.

# The task at hand

```gherkin
Feature: Processing an online auction.

  As a potential buyer in an online auction
  I want to be ableto bid on an item
  So that I can participate in an auction

  Background:
    Given I am in the auction room

  Scenario: Displaying information about the current item
    Then I see the current item picture, description and name
    And I see the current highest bid with a button to place a new bid

  Scenario: Single user bidding on an item
    When I place a bid on an item
    And I am the only bidder
    Then I am the highest bidder

  Scenario: Multiple users bidding on an item - you are first
    When I place a bid on an item
    And I am not the only bidder
    And my bid was placed first
    Then I am the highest bidder

  Scenario: Mulitple users bidding on an item - you are not first
    When I place a bid on an item
    And I am not the only bidder
    And my bid was not placed first
    Then I am not the highest bidder
```

# Assesment of the Feature

The given feature demands some interesting requirements:

* multiple users acting on the same item
* processing of user input in real time (or a best effort approximation of real time)
* notification of users / updating the user's view in real time

# Choosing technology and rationale behind it

Given the technical requirements and time constraints I opt for using the [Meteor](https://www.meteor.com) platform.
It provides great support for applications in demand of real time updates and reactive user interfaces, a solid 
preconfigured build pipeline and free deployment options.

As the defacto standard library for UIs is [React](https://facebook.github.io/react/) I will use it along with the
current ES2015 standard.
