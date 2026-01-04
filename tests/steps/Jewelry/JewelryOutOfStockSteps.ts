import { Given, When, Then } from '@cucumber/cucumber';
import { JewelryPage } from '../../pages/Jewelry/JewelryPage';
import { CustomWorld } from '../../utils/custom-world';

  Given ('I navigate to a product out of stock' , async function(this:CustomWorld) {
        const page = this.page!;
        const jewelryPage = new JewelryPage(page);
        await jewelryPage.goToJewelry();
  });

  When ('I click on the product {string} out of stock' , async function (this:CustomWorld, productName: string) {
        const page = this.page!;
        const jewelryPage = new JewelryPage(page);
        await jewelryPage.goToJewelryItem(productName);
  });
  Then ('out of stock message should be displayed' , async function (this:CustomWorld) { 
     const page = this.page!;
        const jewelryPage = new JewelryPage(page);  
        await jewelryPage.verifyOutOfStockMessage();
  });