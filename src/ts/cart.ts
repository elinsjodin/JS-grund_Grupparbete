import { myNavBar } from "./functions/navbar";
import { Cart } from "./models/cart";

let cart = new Cart();

window.onload = function () {
  myNavBar();
  ProductsInCart();
};

let cartRows: HTMLDivElement = document.getElementById(
  "cart-rows"
) as HTMLDivElement;

export function ProductsInCart() {
  cartRows.innerHTML = "";

  for (let i = 0; i < cart.items.length; i++) {
    let itemImg: HTMLImageElement = document.createElement("img");
    itemImg.className = "productImg";
    itemImg.alt = "Perfumebottle";
    itemImg.src = cart.items[i].product.img;

    let itemName: HTMLSpanElement = document.createElement("span");
    itemName.innerText = cart.items[i].product.name;

    let itemPrice: HTMLSpanElement = document.createElement("span");
    itemPrice.id = "cart-item-price";
    itemPrice.innerText = cart.items[i].product.price + ":-";

    let subBtn: HTMLButtonElement = document.createElement("button");
    subBtn.id = "subBtn";
    subBtn.innerHTML = "<i class='bi bi-dash'></i>";
    if (cart.items[i].qty !== 1) {
      subBtn.addEventListener("click", () => {
        cart.decrementCart(cart.items[i].product);
        ProductsInCart();
      });
    }

    let qtyInput: HTMLInputElement = document.createElement("input");
    qtyInput.setAttribute("readonly", "readonly");
    qtyInput.id = "qtyInput";
    qtyInput.value = cart.items[i].qty.toString();

    let addBtn: HTMLButtonElement = document.createElement("button");
    addBtn.id = "addBtn";
    addBtn.innerHTML = "<i class='bi bi-plus'></i>";
    if (cart.items[i].qty < 99) {
      addBtn.addEventListener("click", () => {
        cart.incrementCart(cart.items[i].product);
        ProductsInCart();
      });
    }

    let deleteBtn: HTMLButtonElement = document.createElement("button");
    deleteBtn.id = "deleteBtn";
    deleteBtn.innerHTML = "<i class='bi bi-x'></i>";
    deleteBtn.addEventListener("click", () => {
      cart.removeItemFromCart(cart.items[i].product);
      ProductsInCart();
    });
    cartRows.appendChild(itemImg);
    cartRows.appendChild(itemName);
    cartRows.appendChild(itemPrice);
    cartRows.appendChild(subBtn);
    cartRows.appendChild(qtyInput);
    cartRows.appendChild(addBtn);
    cartRows.appendChild(deleteBtn);
  }

  let total = cart.updateCartTotal();
  let cartTotal: HTMLDivElement = document.getElementById(
    "cart-total"
  ) as HTMLDivElement;
  cartTotal.innerHTML = "Total: " + total.toString() + ":-";
  cart.displayCartQty();
}

let checkoutBtn = document.getElementById(
  "checkout-button"
) as HTMLButtonElement;
checkoutBtn.addEventListener("click", checkout);

function checkout() {
  location.href = "checkout.html";
}
