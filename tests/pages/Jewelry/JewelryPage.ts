import { JEWELRY_LOCATORS } from '../../locators/Jewelry/JewelryLocators';
import { HEADER_LOCATORS } from '../../locators/header/HeaderLocators';
import BaseAction from '../../utils/basePage';
import { Page , expect } from '@playwright/test';
import { PageAssertions } from '../../utils/pageAssertions';
import { WISHLIST_LOCATORS } from '../../locators/products/WishlistLocators';


export class JewelryPage extends BaseAction {
    readonly assertions: PageAssertions;

    constructor(page: Page) {
        super(page);
        this.assertions = new PageAssertions(page);
    }

    public async goToJewelry() {
  
    await this.page.waitForLoadState('domcontentloaded');
    await this.clickElements(JEWELRY_LOCATORS.jewelryMenu);
}


    public async goToJewelryItem(productName: string) {
        await this.clickElements(JEWELRY_LOCATORS.jewelryItemByName(productName));
    } 

    public async addHeartItemToWishlist() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.clickElements(JEWELRY_LOCATORS.addToWishListButton);
        await this.page.waitForLoadState('domcontentloaded');

    }
     
      async goToWishlist() {
        await this.clickElements(HEADER_LOCATORS.wishlistLink); 
      }

     async verifyJewelryProductDisplayed(productName: string) {
          await this.page.waitForLoadState('domcontentloaded');
         await this.assertions.expectVisible(WISHLIST_LOCATORS.wishListItemByName(productName));
       }

    
    public async verifyOutOfStockMessage() {
        await this.assertions.expectVisible(JEWELRY_LOCATORS.outOfStockMessage);
    }
    public async removeJewelryItemFromWishlist() {
        await this.clickElements(WISHLIST_LOCATORS.RemoveWishlistCheckbox);
        await this.clickElements(WISHLIST_LOCATORS.updateWishlistBtn);
}
}
