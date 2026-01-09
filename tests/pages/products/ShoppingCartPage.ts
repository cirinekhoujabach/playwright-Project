import BaseAction from '../../utils/basePage';
import { Page, expect } from '@playwright/test';
import { SHOPPING_CART_LOCATORS } from '../../locators/products/ShoppingCartLocators';
import { PageAssertions } from '../../utils/pageAssertions';

export class ShoppingCartPage extends BaseAction {
  readonly assertions: PageAssertions;
  constructor(page: Page) {
    super(page);
    this.assertions = new PageAssertions(page);
  }

  async openCart() {
    await this.page.click(SHOPPING_CART_LOCATORS.cartLink);

  }

  async updateQuantity(quantity: number) {
    await this.page.fill(
      SHOPPING_CART_LOCATORS.quantityInput,
      quantity.toString()
    );
    await this.page.click(SHOPPING_CART_LOCATORS.updateCartBtn);
  }

  async verifyTotalPriceAtLeast(minPrice: number) {
    const text = await this.page
      .locator(SHOPPING_CART_LOCATORS.totalPrice)
      .innerText();

    const price = Number(text.replace(/[^0-9.]/g, ''));
    expect(price).toBeGreaterThanOrEqual(minPrice);
  }

  async removeItemFromCart(productName: string) {
    await this.clickElements(SHOPPING_CART_LOCATORS.removeCheckboxByProductName(productName));
    await this.clickElements(SHOPPING_CART_LOCATORS.updateShoppingCartBtn);
  }

  async verifyCartIsEmpty() {
    await this.assertions.expectListEmpty(SHOPPING_CART_LOCATORS.cartItemRows);
  }
}