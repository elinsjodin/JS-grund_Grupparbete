import { footer } from "./functions/footer";
import { myNavBar } from "./functions/navbar";
import { Cart } from "./models/cart";

let cart = new Cart();

window.onload = function () {
  myNavBar();
  ProductsInCart();
  footer();
};

let cartWrapper: HTMLDivElement = document.getElementById(
  "cart-wrapper"
) as HTMLDivElement;

export function ProductsInCart() {
  cartWrapper.innerHTML = "";

  for (let i = 0; i < cart.items.length; i++) {
    let cartRows: HTMLDivElement = document.createElement("div");
    cartRows.className = "cart-rows";

    let itemImg: HTMLImageElement = document.createElement("img");
    itemImg.className = "cart-item-img";
    itemImg.alt = "Perfumebottle";
    itemImg.src = cart.items[i].product.img;
    let imageContainer: HTMLDivElement = document.createElement("div");
    imageContainer.className = "cart-image-container";

    let itemName: HTMLSpanElement = document.createElement("span");
    itemName.className = "cart-item-name";
    itemName.innerText = cart.items[i].product.name;
    
    let itemPrice: HTMLSpanElement = document.createElement("span");
    itemPrice.className = "cart-item-price";
    itemPrice.innerText = cart.items[i].product.price + ":-";

    let nameAndPriceContainer: HTMLDivElement = document.createElement("div");
    nameAndPriceContainer.className = "name-price-container";
    // let priceContainer: HTMLDivElement = document.createElement("div");
    // priceContainer.className = "cart-price-container";


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
    qtyInput.className = "qtyInput";
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

    // cartRows.appendChild(priceContainer);
    // priceContainer.appendChild(itemPrice);
    imageContainer.appendChild(itemImg);
    nameAndPriceContainer.appendChild(itemName);
    nameAndPriceContainer.appendChild(itemPrice);
    cartRows.appendChild(imageContainer);
    cartRows.appendChild(nameAndPriceContainer);
    cartRows.appendChild(subBtn);
    cartRows.appendChild(qtyInput);
    cartRows.appendChild(addBtn);
    cartRows.appendChild(deleteBtn);
    cartWrapper.appendChild(cartRows);
  }

  let total = cart.updateCartTotal();
  let cartTotal: HTMLDivElement = document.getElementById(
    "total-cart-price"
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
