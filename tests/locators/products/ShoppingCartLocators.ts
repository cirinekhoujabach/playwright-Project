export const SHOPPING_CART_LOCATORS = {
  cartLink: 'a[href="/cart"]',
  quantityInput: 'input.qty-input',
  updateCartBtn: 'input[name="updatecart"]',
  totalPrice: 'tr:has-text("Total") strong',
   // Locator dynamique pour le checkbox de suppression
  removeCheckboxByProductName: 
  (productName: string) => 
    `//tr[contains(@class,"cart-item-row")]//a[normalize-space()="${productName}"]/../..//input[@name="removefromcart"]`,
   cartItemRows: '//tr[contains(@class,"cart-item-row")]',

  updateShoppingCartBtn:'//input[@name="updatecart"]',
   }
