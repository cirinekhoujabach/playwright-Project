@e2e
Feature: Product search on webShop website

  Background:
    Given I navigate to webShop website

 @search_Product
  #Scenario: Search for a product by keyword
  #  When I search for "computer"
  #  Then I should see search results containing "computer"

 
 # Scenario: Search for a non-existent product
 #   When I search for "invalidproduct123"
  #  Then I should see "No products were found" message

 Scenario Outline: Search for a product by keyword
    When I search for "<product>"
    Then I should see "<expectedResult>"
   
    Examples:
      | product             | expectedResult                                       |
      | computer            |  Build your own cheap computer                       |
      | invalidproduct123   |No products were found that matched your criteria.    |