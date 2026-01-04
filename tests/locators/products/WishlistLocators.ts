export const WISHLIST_LOCATORS = {
RemoveWishlistCheckbox:'//input[@name="removefromcart"]',
updateWishlistBtn: '//input[@name="updatecart"]',
 wishListItemByName: (productName: string) =>`//a[normalize-space()="${productName}"]`,
   }