import { listOfItemsInDetails } from "./functions/detailsList";
import { footer } from "./functions/footer";
import { cartList, localStorageKey } from "./functions/localStorage";
import { myNavBar } from "./functions/navbar";

window.onload = function () {
  myNavBar();
  handleAddToCart();
  listOfItemsInDetails();
  footer();
};

function handleAddToCart() {
  let addToCartBtn: HTMLButtonElement = document.createElement("button");
  addToCartBtn.setAttribute("type", "button");
  addToCartBtn.id = "add-to-cart-btn";
  addToCartBtn.innerText = "Add to Cart";
  addToCartBtn.addEventListener("click", pushToCart);
  document.body.appendChild(addToCartBtn);
}

function pushToCart(e) {
  e.preventDefault();
  cartList.push();
}
