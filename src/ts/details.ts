import { ProductsInCart } from "./cart";
import { listOfItemsInDetails } from "./functions/detailsList";
import { footer } from "./functions/footer";
import { myNavBar } from "./functions/navbar";
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

let productsInList = localStorage.getItem("Productlist");
let productDetails: Product[] = JSON.parse(productsInList);

let detailsHeroContainer: HTMLDivElement = document.getElementById(
  "details-hero-wrapper"
) as HTMLDivElement;
let productDetailsDiv: HTMLDivElement = document.getElementById(
  "product-details-container"
) as HTMLDivElement;

let urlParams = new URLSearchParams(window.location.search);
let productId = urlParams.get("id");

export function goToDetailsPage() {
  for (let i = 0; i < productDetails.length; i++) {
    if (productId === productDetails[i].id) {
      currentProduct = productDetails[i];
      let imgContainer: HTMLDivElement = document.createElement("div");
      imgContainer.className = "details-img-container";
      let productImg: HTMLImageElement = document.createElement("img");
      productImg.className = "details-img";
      productImg.alt = "Perfumebottle";
      productImg.src = productDetails[i].img;

      let prodctPrice: HTMLParagraphElement = document.createElement("p");
      prodctPrice.className = "details-price";
      prodctPrice.innerHTML = productDetails[i].price + " kr".toString();

      let productName: HTMLHeadElement = document.createElement("h2");
      productName.className = "details-name";
      productName.innerHTML = productDetails[i].name;

      let productDesc: HTMLParagraphElement = document.createElement("p");
      productDesc.className = "details-desc";
      productDesc.innerHTML = productDetails[i].detail.desc;

      let productIng: HTMLParagraphElement = document.createElement("p");
      productIng.className = "details-ing";
      productIng.innerHTML = productDetails[i].detail.ing;

      let buttonContainer: HTMLDivElement = document.createElement("div");
      buttonContainer.className = "button-container";

      let addToCartBtn: HTMLButtonElement = document.createElement("button");
      addToCartBtn.setAttribute("type", "button");
      addToCartBtn.id = "add-to-cart-btn";
      addToCartBtn.innerText = "Add to Cart";
      addToCartBtn.addEventListener("click", pushToCart);

      let ingContainer: HTMLDivElement = document.createElement("div");
      ingContainer.className = "dropdown-panel";
      ingContainer.classList.add("one");
      let descContainer: HTMLDivElement = document.createElement("div");
      descContainer.className = "dropdown-panel";
      descContainer.classList.add("two");

      let descTitle: HTMLHeadingElement = document.createElement("h4");
      descTitle.className = "toggle-panel";
      descTitle.innerText = "ABOUT FRAGRANCE";
      let toggleOpen: boolean = false;
      descTitle.addEventListener("click", () => {
        if (!toggleOpen) {
          productDesc.classList.add("toggle-panel-active");
          toggleOpen = true;
        } else {
          productDesc.classList.remove("toggle-panel-active");
          toggleOpen = false;
        }
      });

      let ingTitle: HTMLHeadingElement = document.createElement("h4");
      ingTitle.className = "toggle-panel";
      ingTitle.innerText = "INGREDIENTS";
      ingTitle.addEventListener("click", () => {
        if (!toggleOpen) {
          productIng.classList.add("toggle-panel-active");
          toggleOpen = true;
        } else {
          productIng.classList.remove("toggle-panel-active");
          toggleOpen = false;
        }
      });

      productDetailsDiv.appendChild(productName);
      productDetailsDiv.appendChild(prodctPrice);
      imgContainer.appendChild(productImg);
      productDetailsDiv.appendChild(imgContainer);
      buttonContainer.appendChild(addToCartBtn);
      detailsHeroContainer.appendChild(productDetailsDiv);
      detailsHeroContainer.appendChild(buttonContainer);
      productDetailsDiv.appendChild(descContainer);
      productDetailsDiv.appendChild(ingContainer);
      descContainer.appendChild(descTitle);
      descContainer.appendChild(productDesc);
      ingContainer.appendChild(ingTitle);
      ingContainer.appendChild(productIng);
    }
  }
}
function pushToCart(e) {
  e.preventDefault();
  cart.addToCart(currentProduct);
  cart.displayCartQty();
}
