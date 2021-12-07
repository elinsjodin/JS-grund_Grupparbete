import { myNavBar } from "./functions/navbar"

import { Product } from "./models/products";

import perfumeimage from "./../components/perfumebottle.jpg";

window.onload = function () {
  start();
  myNavBar();
};

let pr1: Product = new Product(
  perfumeimage,
  "No.1" + " " + "Musk",
  1050 + ":-",
  "1"
);
// pr1.img =
//   "/Users/elinsjodin/Desktop/Studier/Javascript/JS-grund_Grupparbete/components/perfumebottle.jpg";
// pr1.name = "No.1" + " " + "Musk";
// pr1.price;
// pr1.viewPr;

// let pr2: Product = new Product();
// pr2.img = productImg;
// pr2.name = "No.2" + " " + "Vanilla";

// let pr3: Product = new Product();
// pr3.img = productImg;
// pr3.name = "No.3" + " " + "Sandalwood";

// let pr4: Product = new Product();
// pr4.img = productImg;
// pr4.name = "No.4" + " " + "Citrus Noir";

// let pr5: Product = new Product();
// pr5.img = productImg;
// pr5.name = "No.5" + " " + "Oud";

// let pr6: Product = new Product();
// pr6.img = productImg;
// pr6.name = "No.6" + " " + "Amber";

// let pr7: Product = new Product();
// pr7.img = productImg;
// pr7.name = "No.7" + " " + "Bergamot";

// let pr8: Product = new Product();
// pr8.img = productImg;
// pr8.name = "No.8" + " " + "Orange Basil";

// let pr9: Product = new Product();
// pr9.img = productImg;
// pr9.name = "No.9" + " " + "Ylang-Ylang";

// let pr10: Product = new Product();
// pr10.img = productImg;
// pr10.name = "No.10" + " " + "Geranium";

let productList = [pr1];

// pr2, pr3, pr4, pr5, pr6, pr7, pr8, pr9, pr10

function start() {
  render();
}

function render() {
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
    price.innerHTML = productList[i].price.toString();

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
  location.href = "pages/details.html?id=" + productId;
}
