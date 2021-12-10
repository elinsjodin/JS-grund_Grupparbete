import { listOfItemsInDetails } from "./functions/detailsList";
import { footer } from "./functions/footer";
import { cartList, localStorageKey } from "./functions/localStorage";
import { myNavBar } from "./functions/navbar";
import { cartCount } from "./functions/cartCount";
import { Detail } from "./models/details";
import { Cart } from "./models/cart";
import { Product } from "./models/products";

let cart = new Cart();
let currentProduct: Product;

window.onload = function () {
  myNavBar();
  handleAddToCart();
  listOfItemsInDetails();
  footer();
};

let urlParams = new URLSearchParams(window.location.search);
let productId = urlParams.get("id");

function renderDetailsPage() {
  for(let i = 0; i < productList.length; i++){
    if( productId == productList[i].id){
      
    }
  }


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
  cart.addToCart(currentProduct);
  cartCount();

  for (let i = 0; i < cart.items.length; i++) {
    cart.items[i];
  }
}
