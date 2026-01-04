export const COMPUTER_LOCATORS = {
  computersMenu: '//ul[@class="top-menu"]//a[normalize-space()="Computers"]',
  desktopsSubmenu: '//ul[@class="top-menu"]//a[normalize-space()="Desktops"]',
  //computerItem: '//a[normalize-space()="Build your own cheap computer"]',
  computerItem: (itemName: string) =>`//a[contains(normalize-space(), "${itemName}")]`,
  firstComputerAddToCart:'//input[@id="add-to-cart-button-72"]',
  // Locator dynamique pour le panier
  cartItemByName: (productName: string) =>`//table[contains(@class,"cart")]//a[normalize-space()="${productName}"]`,
  firstProductAddToCart: '//body[1]/div[4]/div[1]/div[4]/div[2]/div[2]/div[2]/div[3]/div[1]/div[1]/div[2]/div[3]/div[2]/input[1]',
  shoppingCartLink: 'a[href="/cart"]',
  cartItemName: '//h1[normalize-space()="Build your own cheap computer"]',
  desktopItem:'`//h2[@class="product-title"]/a[contains(text(),"${itemName}")]`',
  notebooksSubmenu: '//ul[@class="top-menu"]//a[normalize-space()="Notebooks"]',  
  firstNotebookAddToCart: '(//input[@value="Add to cart"])[1]',
  termsOfService: '#termsofservice',
  checkoutButton: 'button#checkout',
  billingSave:'//input[@onclick="Billing.save()"]',
  shippingSave:'//input[@onclick="Shipping.save()"]',
  shippingMethod: '//input[@class="button-1 shipping-method-next-step-button"]',
  paymentMethod: '//input[@class="button-1 payment-method-next-step-button"]',
  paymentInfoContinueBtn: '//input[@class="button-1 payment-info-next-step-button"]',
  confirmOrderBtn: '//input[@value="Confirm"]',
  orderConfirmation: '//strong[normalize-space()="Your order has been successfully processed!"]',

  desktopItems: 'div.item-box',
  desktopPrice: '.prices .price',
  
};
