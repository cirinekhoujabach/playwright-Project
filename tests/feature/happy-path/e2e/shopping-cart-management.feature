@e2e 
Feature: Shopping cart management on webShop website

  Background:
    Given I navigate to webShop website
    When I add "Build your own cheap computer" to the cart

  @add_Cart  
  Scenario: Add a product to cart
    Then I should see "Build your own cheap computer" in cart

  @remove_Cart 
  Scenario: Remove a product from cart
    Given I have "Build your own cheap computer" in cart
    When I remove "Build your own cheap computer" from cart
    Then cart should be empty
