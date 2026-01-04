export const JEWELRY_LOCATORS = {
    jewelryMenu : 'a[href="/jewelry"]',
    jewelryItemByName: (productName: string) => `//a[normalize-space()="${productName}"]`,
    outOfStockMessage : '//span[@class="value"]',
    heartItem: '//a[normalize-space()="Black & White Diamond Heart"]',
    addToWishListButton: '#add-to-wishlist-button-14',
    
}