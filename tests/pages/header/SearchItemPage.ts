import { Page, expect } from '@playwright/test';
import BaseAction from '../../utils/basePage';
import { HEADER_LOCATORS } from '../../locators/header/HeaderLocators';
import { PageAssertions } from '../../utils/pageAssertions';
import { COMPUTER_LOCATORS } from '../../locators/computers/ComputersLocators';

export class SearchItemPage extends BaseAction {
    readonly assertions: PageAssertions;
  constructor(page: Page) {
    super(page);
    this.assertions = new PageAssertions(page);
  }


  async searchForItem(itemName: string) {
    await this.fillText(HEADER_LOCATORS.searchToolBar, itemName);
    await this.clickElements(HEADER_LOCATORS.searchButton);
}
  async verifyItemSearchResults(itemName: string) {
  await this.assertions.expectVisible(COMPUTER_LOCATORS.computerItemSearchResult(itemName));
}
 
   async verifyNoItemFoundMessage(message:string) {
    await this.assertions.expectVisible(HEADER_LOCATORS.searchNotFoundMessage);
    await this.assertions.expectText(HEADER_LOCATORS.searchNotFoundMessage, message);
   }
}