import { cartList } from "../functions/localStorage";

export function cartDropDown() {
  let cartDropDown: HTMLDivElement = document.createElement("div");
  cartDropDown.id = "cart-dropdown-container";

  let shoppingCart: HTMLDivElement = document.createElement("div");
  shoppingCart.className = "shopping-cart";

  let shoppingCartHeader: HTMLDivElement = document.createElement("div");
  shoppingCartHeader.className = "shopping-cart-header";

  let shoppingCartLogo: HTMLSpanElement = document.createElement("span");
  shoppingCartLogo.className = "shopping-cart-logo";
  shoppingCartLogo.innerHTML = "<i class='bi bi-bag'></i>";

  let shoppingCartCount: HTMLSpanElement = document.createElement("span");
  shoppingCartCount.className = "shopping-cart-count";
  shoppingCartCount.innerHTML = count.toString();
  shoppingCartCount.addEventListener("change", cartCount);

  let shoppingCartTotal: HTMLSpanElement = document.createElement("span");
  shoppingCartTotal.className = "shopping-cart-total";
  shoppingCartTotal.innerText = "Total:" + "" + ":-";

  let shoppingCartItems: HTMLUListElement = document.createElement("ul");
  shoppingCartItems.className = "shopping-cart-items";
  shoppingCartItems.innerHTML = "";

  for (let i = 0; i < cartList.length; i++) {
    let cartLi: HTMLLIElement = document.createElement("li");
    let itemProperties = cartList[i];

    let liSpan = document.createElement("span");
    liSpan.innerHTML = itemProperties.toString(); //??
    cartLi.appendChild(liSpan);

    shoppingCartItems.appendChild(cartLi);
  }
  let shoppingCartCheckoutButton: HTMLButtonElement =
    document.createElement("button");
  shoppingCartCheckoutButton.className = "shopping-cart-checkout-button";
  shoppingCartCheckoutButton.innerText = "Checkout";
  shoppingCartCheckoutButton.addEventListener("click", () => {
    location.href = "checkout.html";
  });

  cartDropDown.appendChild(shoppingCart);
  shoppingCart.appendChild(shoppingCartHeader);
  shoppingCartHeader.appendChild(shoppingCartLogo);
  shoppingCartHeader.appendChild(shoppingCartCount);
  shoppingCartHeader.appendChild(shoppingCartTotal);
  shoppingCart.appendChild(shoppingCartItems);
  shoppingCart.appendChild(shoppingCartCheckoutButton);

  $(".cart-button").on("click", function () {
    $(".cart-dropdown-container").fadeToggle("fast");
  });
}

//   let cartLi: HTMLLIElement = document.createElement("li");
//   cartLi.className = "cart-list-item";

//   let cartItemImg: HTMLImageElement = document.createElement("img");
//   cartItemImg.className = "cart-item-img";

//   let cartItemName: HTMLImageElement = document.createElement("img");
//   cartItemName.className = "cart-item-name";

//   let cartItemPrice: HTMLImageElement = document.createElement("img");
//   cartItemPrice.className = "cart-item-price";

//   let cartItemQty: HTMLImageElement = document.createElement("img");
//   cartItemQty.className = "cart-item-qty";
//   cartItemQty.innerText = "Quantity:";

//   shoppingCartItems.appendChild(cartLi);
//   cartLi.appendChild(cartItemImg);
//   cartLi.appendChild(cartItemName);
//   cartLi.appendChild(cartItemPrice);
//   cartLi.appendChild(cartItemQty);
