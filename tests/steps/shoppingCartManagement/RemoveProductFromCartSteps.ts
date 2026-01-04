import {Given, When, Then } from '@cucumber/cucumber';
import { ComputersPage } from '../../pages/computers/ComputersPage';
import { CustomWorld } from '../../utils/custom-world';
import { ShoppingCartPage } from '../../pages/products/ShoppingCartPage';

Given('I have {string} in cart' , async function (this:CustomWorld , itemName: string) {
    const page = this.page!;
    const computersPage = new ComputersPage(page);
    await computersPage.goToShoppingCart();     
    await computersPage.verifyProductDisplayed(itemName);
});
When ('I remove {string} from cart', async function (this:CustomWorld , productName: string) {
    const page = this.page!;
    const shoppingCartPage = new ShoppingCartPage(page);
    await shoppingCartPage.removeItemFromCart(productName);
   /* await this.waitForTimeout(2000);*/
});

Then ('cart should be empty', async function (this:CustomWorld) {
    const page = this.page!;
    const shoppingCartPage = new ShoppingCartPage(page);
    await shoppingCartPage.verifyCartIsEmpty();
 
});

