import { myNavBar } from "./functions/navbar";
import { listOfItemsInDetails } from "./functions/detailsList";
import { footer } from "./functions/footer";
import { products } from "./functions/productList";
import { productList } from "./functions/localStorage";

window.onload = function () {
  myNavBar();
  listOfItemsInDetails();
  products();
  start();
  footer();
};

function start() {
  let productDiv: HTMLDivElement = document.getElementById(
    "product-div"
  ) as HTMLDivElement;

  for (let i = 0; i < productList.length; i++) {
    let productImg: HTMLImageElement = document.createElement("img");
    productImg.id = "productImg";
    productImg.alt = "Perfumebottle";
    productImg.src = productList[i].img;

    let price: HTMLParagraphElement = document.createElement("p");
    price.id = "price";
    price.innerHTML = productList[i].price + ":-".toString();

    let detailsLink: HTMLParagraphElement = document.createElement("p");
    detailsLink.id = "detailsLink";
    detailsLink.innerHTML = "View product";
    detailsLink.addEventListener("click", () => {
      redirect(productList[i].id);
    });

    let productName: HTMLHeadElement = document.createElement("h2");
    productName.id = "productName";
    productName.innerHTML = productList[i].name;
    productName.addEventListener("click", () => {
      redirect(productList[i].id);
    });

    productDiv.appendChild(productImg);
    productDiv.appendChild(price);
    productDiv.appendChild(detailsLink);
    productDiv.appendChild(productName);
  }
}

function redirect(productId: string) {
  location.href = "details.html?id=" + productId;
}
