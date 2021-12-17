import { myNavBar } from "./functions/navbar";
import { footer } from "./functions/footer";
import { Cart } from "./models/cart";

let cart = new Cart();

window.onload = function () {
  myNavBar();
  footer();
  let totalCheckout = cart.updateCartTotal();
  let checkoutTotal: HTMLParagraphElement = document.getElementById(
    "cost-total"
  ) as HTMLParagraphElement;
  checkoutTotal.innerHTML = "Total: " + totalCheckout.toString() + " kr";
  cart.displayCartQty();
};
