# Auctionata Demonstrator

Small demonstrator based on a coding challenge provided by Auctionata. It should show my style of writing code and how
I approach solving a given problem.

# Demo

There is a running demo at: https://auctionata-demonstrator.herokuapp.com/

You can log in with multiple browsers and different accounts to simulate true multi user environments.

The 'place bid' button places a bid.
Whoever places first is the highest bidder.
The 'RESET BID' button resets the highest bidder to provide retestability.

# Getting started (developers)

If not already present on your system, you need to install the Meteor platform and then the project's dependencies.

```bash
# for *nix systems
$ curl https://install.meteor.com/ | sh
$ cd app
# install dependencies
$ npm install
# run the demo
$ meteor
```


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

# Project structure

Meteor is a full stack platform, thus client and server can (and do) share code. The whole code, front end and back end
live in the same repository.

Client side modules are initialised from ```client/main.js``` and server side modules likewise from 
```server/main.js```. All modules live in the ```imports``` directory.

Tests are placed beside their modules and have the file extension ```spec.js```

# Progression plan / what's not inside

This is a bare bones full stack demonstrator. Many parts are missing that would be needed for a full size scalable
application:

* Event sourcing system ie. Redux
* Routing ie. React-Router
* A proper test harness with unit / integration / end to end tests
* User management and authorization
* Auction / item management
* Payment system integration
* Proper deployment solution over multiple instances ie. Docker
