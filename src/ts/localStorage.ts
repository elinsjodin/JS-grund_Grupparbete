export function handleLocalStorage() {
  let LOCAL_STORAGE_CART_KEY = "product.items";
  let products = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART_KEY));

  function saveProducts() {
    localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(products));
  }
}
