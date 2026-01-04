 import BaseAction from '../../utils/basePage';
import { Page, expect } from '@playwright/test';
import { PRODUCT_SEARCH_LOCATORS } from '../../locators/products/ProductSearchLocators';

export class ProductSearchPage extends BaseAction {
  constructor(page: Page) {
    super(page);
  }

  async searchProduct(productName: string) {
    await this.page.fill(PRODUCT_SEARCH_LOCATORS.searchInput, productName);
    await this.page.click(PRODUCT_SEARCH_LOCATORS.searchButton);
  }

async verifyResultsDisplayed() {
  await expect(this.page.locator(PRODUCT_SEARCH_LOCATORS.productItem).first()).toBeVisible();
}

  async verifyNoResultsDisplayed() {
    await expect(this.page.locator(PRODUCT_SEARCH_LOCATORS.noResultMessage))
      .toHaveText('No products were found that matched your criteria.');
  }

  async sortByLowestPrice() {
  const valueToSelect = "https://demowebshop.tricentis.com/search?q=camera&orderby=10";
  await this.page.waitForSelector(PRODUCT_SEARCH_LOCATORS.sortDropdown, { state: 'visible', timeout: 15000 });
  await this.page.selectOption(PRODUCT_SEARCH_LOCATORS.sortDropdown, valueToSelect);
 }


  async getFirstProductPrice(): Promise<number> {
    const priceLocator = await this.page.locator(PRODUCT_SEARCH_LOCATORS.productPrice).first();
    const text = await priceLocator.textContent();
    return parseFloat(text!.replace(/[^0-9.]/g, ''));
  }

  async addFirstProductToCart() {
    await this.page.click(PRODUCT_SEARCH_LOCATORS.productItem); // Click on the first product item
    await this.page.locator(PRODUCT_SEARCH_LOCATORS.addToCartBtn).first().click();
  }
}
