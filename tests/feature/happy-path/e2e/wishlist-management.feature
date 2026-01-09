@e2e @wishlist
Feature: Wishlist management on webShop website

  Background:
   Given I navigate to webShop website
   When I add "Black & White Diamond Heart" to wishlist

@add_wishlist
  Scenario: Add product to wishlist
   Then I should see "Black & White Diamond Heart" in wishlist
   
@remove_wishlist
  Scenario: Remove product from wishlist
   Given I have "Black & White Diamond Heart" is in wishlist
   When I remove "Black & White Diamond Heart" from wishlist
   Then cart should be empty
