import { cartList, localStorageKey } from "../functions/localStorage";

export function cartDropDown() {
  let cartDropDownContainer: HTMLDivElement = document.createElement("div");
  cartDropDownContainer.id = "cart-dropdown-container";

  let shoppingCart: HTMLDivElement = document.createElement("div");
  shoppingCart.className = "shopping-cart";

  let shoppingCartHeader: HTMLDivElement = document.createElement("div");
  shoppingCartHeader.className = "shopping-cart-header";

  let shoppingCartLogo: HTMLSpanElement = document.createElement("span");
  shoppingCartLogo.className = "shopping-cart-logo";
  shoppingCartLogo.innerHTML = "<i class='bi bi-bag'></i>";

  let shoppingCartCount: HTMLSpanElement = document.createElement("span");
  shoppingCartCount.className = "shopping-cart-count";
  shoppingCartCount.innerHTML = counter.toString(); //Skapa funtion
  shoppingCartCount.addEventListener("change", cartCounter); //Skapa funktion

  let shoppingCartTotal: HTMLSpanElement = document.createElement("span");
  shoppingCartTotal.className = "shopping-cart-total";
  shoppingCartTotal.innerText = "Total:" + "" + ":-";

  let shoppingCartItems: HTMLUListElement = document.createElement("ul");
  shoppingCartItems.className = "shopping-cart-items";
  shoppingCartItems.innerHTML = "";

  let cartItems = cartList;

  for (let i = 0; i < cartItems.length; i++) {
    let cartLi: HTMLLIElement = document.createElement("li");
    let itemImg = cartItems[i].product.img;
    let itemTitel = cartItems[i].product.name;
    let cartTotal = cartItems[i].product.price;
    let cartCount = cartItems[i].qty;

    let liImg = document.createElement("span");
    liImg.innerHTML = itemImg.toString();
    cartLi.appendChild(liImg);

    let liTitel = document.createElement("span");
    liTitel.innerHTML = itemTitel.toString();
    cartLi.appendChild(liTitel);

    let liPrice = document.createElement("span");
    liPrice.innerHTML = cartTotal.toString();
    cartLi.appendChild(liPrice);

    let licartCount = document.createElement("span");
    licartCount.innerHTML = cartCount.toString();
    cartLi.appendChild(licartCount);

    shoppingCartItems.appendChild(cartLi);
  }
  let viewCartButton: HTMLButtonElement = document.createElement("button");
  viewCartButton.className = "view-cart-button";
  viewCartButton.innerText = "View Cart";
  viewCartButton.addEventListener("click", () => {
    if (window.location.href === "http://localhost:1234/pages/cart.html") {
      return false;
    } else {
      location.href = "cart.html";
    }
  });
  let shoppingCartCheckoutButton: HTMLButtonElement =
    document.createElement("button");
  shoppingCartCheckoutButton.className = "shopping-cart-checkout-button";
  shoppingCartCheckoutButton.innerText = "Checkout";
  shoppingCartCheckoutButton.addEventListener("click", () => {
    if (window.location.href === "http://localhost:1234/pages/checkout.html") {
      return false;
    } else {
      location.href = "checkout.html";
    }
  });

  cartDropDownContainer.appendChild(shoppingCart);
  shoppingCart.appendChild(shoppingCartHeader);
  shoppingCartHeader.appendChild(shoppingCartLogo);
  shoppingCartHeader.appendChild(shoppingCartCount);
  shoppingCartHeader.appendChild(shoppingCartTotal);
  shoppingCart.appendChild(shoppingCartItems);
  shoppingCart.appendChild(viewCartButton);
  shoppingCart.appendChild(shoppingCartCheckoutButton);
}
