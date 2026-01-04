import {Given, When, Then } from '@cucumber/cucumber';
import { JewelryPage } from '../../pages/Jewelry/JewelryPage';
import { CustomWorld } from '../../utils/custom-world';
import { ShoppingCartPage } from '../../pages/products/ShoppingCartPage';

Given('I have {string} is in wishlist' , async function (this:CustomWorld , productName: string) {
    const page = this.page!;
    const jewelryPage = new JewelryPage(page);
    await jewelryPage.goToWishlist();     
    await jewelryPage.verifyJewelryProductDisplayed(productName);
});
When ('I remove {string} from wishlist', async function (this:CustomWorld , itemName: string) {
    const page = this.page!;
    const jewelryPage = new JewelryPage(page);
    await jewelryPage.removeJewelryItemFromWishlist();
});

