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
  listOfItemsInDetails();
  goToDetailsPage();
  footer();
};

let productsInList = localStorage.getItem("Product list");
let productDetails: Product[] = JSON.parse(productsInList);
console.log(productDetails);

let productDetailsDiv: HTMLDivElement = document.getElementById(
  "product-details-container"
) as HTMLDivElement;

let urlParams = new URLSearchParams(window.location.search);
let productId = urlParams.get("id");

export function goToDetailsPage() {
  for (let i = 0; i < productDetails.length; i++) {
    if (productId === productDetails[i].id) {
      currentProduct = productDetails[i];
      let productImg: HTMLImageElement = document.createElement("img");
      productImg.id = "productImg";
      productImg.alt = "Perfumebottle";
      productImg.src = productDetails[i].img;

      let prodctPrice: HTMLParagraphElement = document.createElement("p");
      prodctPrice.className = "price";
      prodctPrice.innerHTML = productDetails[i].price + ":-".toString();

      let productName: HTMLHeadElement = document.createElement("h2");
      productName.className = "productName";
      productName.innerHTML = productDetails[i].name;

      let productDesc: HTMLSpanElement = document.createElement("span");
      productDesc.className = "product-desc";
      productDesc.innerHTML = productDetails[i].detail.desc;

      let productIng: HTMLSpanElement = document.createElement("span");
      productIng.className = "product-ing";
      productIng.innerHTML = productDetails[i].detail.ing;

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
  localStorage.setItem("Cartlist", JSON.stringify(cartList));
}

function pushToCart(e) {
  e.preventDefault();
  cart.addToCart(currentProduct);

  // for (let i = 0; i < cart.items.length; i++) {
  //   cart.items.push(
  //     cartList[i] //, 1);
  //   );
  // }
}
