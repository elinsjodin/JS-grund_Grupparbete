import { myNavBar } from "./functions/navbar";
import { listOfItemsInDetails } from "./functions/detailsList";
import { footer } from "./functions/footer";
import { products } from "./functions/productList";
import { productList } from "./functions/localStorage";
import { goToDetailsPage } from "./details";


window.onload = function () {
  myNavBar();
  listOfItemsInDetails();
  products();
  start();
  footer();
};

function start() {
  let productDiv: HTMLDivElement = document.getElementById(
    "hero-div"
  ) as HTMLDivElement;

  for (let i = 0; i < productList.length; i++) {
    let productContainer: HTMLDivElement = document.createElement("div");
    productContainer.className = "product-div";

    let productImg: HTMLImageElement = document.createElement("img");
    productImg.className = "product-img";
    productImg.alt = "Perfumebottle";
    productImg.src = productList[i].img;
    productImg.addEventListener("click", () => {
      redirect(productList[i].id);
    });

    let price: HTMLParagraphElement = document.createElement("p");
    price.className = "product-price";
    price.innerHTML = productList[i].price + "kr".toString();

    // let detailsLink: HTMLParagraphElement = document.createElement("p");
    // detailsLink.id = "detailsLink";
    // detailsLink.innerHTML = "View product";
    // detailsLink.addEventListener("click", () => {
    //   redirect(productList[i].id);
    // });

    let productName: HTMLHeadElement = document.createElement("h2");
    productName.className = "product-name";
    productName.innerHTML = productList[i].name;
    productName.addEventListener("click", () => {
      redirect(productList[i].id);
    });

    productContainer.appendChild(productImg);
    productContainer.appendChild(productName);
    productContainer.appendChild(price);
    productDiv.appendChild(productContainer);
    // productDiv.appendChild(detailsLink);
  }

  localStorage.setItem("Productlist", JSON.stringify(productList));
}

function redirect(productId: string) {
  location.href = "details.html?id=" + productId;
  goToDetailsPage();
}
