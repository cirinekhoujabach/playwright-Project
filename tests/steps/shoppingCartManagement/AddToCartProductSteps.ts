import { When, Then } from '@cucumber/cucumber';
import { ComputersPage } from '../../pages/computers/ComputersPage';
import { CustomWorld } from '../../utils/custom-world';

When ('I add {string} to the cart', async function (this:CustomWorld , itemName: string) {
    const page = this.page!;
    const computersPage = new ComputersPage(page);
    await computersPage.goToComputers();
    await computersPage.goToDesktops();
    await computersPage.addFirstComputerToCart(itemName);
   
});
Then ('I should see {string} in cart', async function (this:CustomWorld, itemName: string) {
    const page = this.page!;
    const computersPage = new ComputersPage(page);
    await computersPage.goToShoppingCart();
    await computersPage.verifyProductDisplayed(itemName);
});