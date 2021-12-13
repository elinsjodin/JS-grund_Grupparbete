import { listOfItemsInDetails } from "./functions/detailsList";
import { footer } from "./functions/footer";
import {
  cartList,
  localStorageKey,
  productList,
} from "./functions/localStorage";
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
  goToDetailsPage();
  footer();
};

console.log(productList);

let productsInList = JSON.parse(localStorage.getItem("Product list"));
productList = JSON.parse("Product list");

let productDetailsDiv: HTMLDivElement = document.getElementById(
  "product-details-container"
) as HTMLDivElement;

let urlParams = new URLSearchParams(window.location.search);
let productId = urlParams.get("id");

export function goToDetailsPage() {
  for (let i = 0; i < productList.length; i++) {
    if (productId == productList[i].id) {
      let productImg: HTMLImageElement = document.createElement("img");
      productImg.id = "productImg";
      productImg.alt = "Perfumebottle";
      productImg.src = productList[i].img;

      let prodctPrice: HTMLParagraphElement = document.createElement("p");
      prodctPrice.className = "price";
      prodctPrice.innerHTML = productList[i].price + ":-".toString();

      let productName: HTMLHeadElement = document.createElement("h2");
      productName.className = "productName";
      productName.innerHTML = productList[i].name;

      let productDesc: HTMLSpanElement = document.createElement("span");
      productDesc.className = "product-desc";
      productDesc.innerHTML = productList[i].detail.desc;

      let productIng: HTMLSpanElement = document.createElement("span");
      productIng.className = "product-ing";
      productIng.innerHTML = productList[i].detail.ing;

      let addToCartBtn: HTMLButtonElement = document.createElement("button");
      addToCartBtn.setAttribute("type", "button");
      addToCartBtn.id = "add-to-cart-btn";
      addToCartBtn.innerText = "Add to Cart";
      addToCartBtn.addEventListener("click", pushToCart);

      productDetailsDiv.appendChild(productImg);
      productDetailsDiv.appendChild(prodctPrice);
      productDetailsDiv.appendChild(productName);
      productDetailsDiv.appendChild(productDesc);
      productDetailsDiv.appendChild(productIng);
      productDetailsDiv.appendChild(addToCartBtn);
    }
  }
}

// for(var i=0;i<localStorage.length; i++) {
//   var key = localStorage.key( i );
//   var item = JSON.parse( localStorage.getItem( key ) );
// }

function pushToCart(e) {
  e.preventDefault();
  cart.addToCart(currentProduct);

  for (let i = 0; i < cart.items.length; i++) {
    cart.items.push(cart[i].items, 1);
  }
}
