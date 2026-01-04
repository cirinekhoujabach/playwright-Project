@e2e @outofstock
Feature: Product search on webShop website

Background:
Given I navigate to webShop website

Scenario: Add out of stock product to cart
  Given I navigate to a product out of stock
  When  I click on the product "Diamond Pave Earrings" out of stock
  Then out of stock message should be displayed