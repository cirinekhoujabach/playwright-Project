import { When, Then } from '@cucumber/cucumber';
import { JewelryPage } from '../../pages/Jewelry/JewelryPage';
import { CustomWorld } from '../../utils/custom-world';

When ('I add {string} to wishlist', async function (this:CustomWorld, productName: string) {
    const page = this.page!;
    const jewelryPage = new JewelryPage(page);
    await jewelryPage.goToJewelry();
    await jewelryPage.goToJewelryItem(productName);
    await jewelryPage.addHeartItemToWishlist();
   
});
Then ('I should see {string} in wishlist', async function (this:CustomWorld, productName: string) {
    const page = this.page!;
    const jewelryPage = new JewelryPage(page);
    await jewelryPage.goToWishlist();
    await jewelryPage.verifyJewelryProductDisplayed(productName);
});