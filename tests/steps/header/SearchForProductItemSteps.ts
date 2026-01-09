import { When,Then } from '@cucumber/cucumber';
import { CustomWorld } from '../../utils/custom-world';
import { SearchItemPage } from '../../pages/header/SearchItemPage';


When ('I search for {string}', async function (this:CustomWorld, itemName: string) {
    const page = this.page!;
    const searchValidItemPage = new SearchItemPage(page);
    await searchValidItemPage.searchForItem(itemName);
});

Then ('I should see {string}', async function (this:CustomWorld, itemName: string) {
    const page = this.page!;    
   const searchValidItemPage = new SearchItemPage(page);
   if (itemName.includes('No products')) {
     await searchValidItemPage.verifyNoItemFoundMessage(itemName);
   } else  {
     await searchValidItemPage.verifyItemSearchResults(itemName);
    }
});

