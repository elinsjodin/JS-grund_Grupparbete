import { Cart } from "../models/cart";

export function myNavBar() {
  let cart = new Cart();

  let navBarContainer: HTMLElement = document.getElementById(
    "nav-container"
  ) as HTMLElement;

  // hamburger menu button
  let hamburgerContainer: HTMLDivElement = document.createElement("div");
  let hamburgerButton: HTMLDivElement = document.createElement("div");
  const dropdownMenu: HTMLUListElement = document.getElementById(
    "dropdown-menu"
  ) as HTMLUListElement;

  hamburgerContainer.id = "hamburger-btn";
  hamburgerButton.className = "menu-btn";

  hamburgerContainer.appendChild(hamburgerButton);
  navBarContainer.appendChild(hamburgerContainer);

  let hamburgerBtnOpen: boolean = false;
  hamburgerContainer.addEventListener("click", () => {
    if (!hamburgerBtnOpen) {
      hamburgerContainer.classList.add("is-open");
      dropdownMenu.classList.add("is-down");
      hamburgerBtnOpen = true;
    } else {
      hamburgerContainer.classList.remove("is-open");
      dropdownMenu.classList.remove("is-down");
      hamburgerBtnOpen = false;
    }
  });

  // LOGO
  let navBarLogo: HTMLHeadingElement = document.createElement("p");
  navBarLogo.className = "navbar-logo";
  navBarLogo.innerText = "NLP";
  navBarLogo.addEventListener("click", () => {
    location.href = "http://localhost:1234/index.html";
  });

  navBarContainer.appendChild(navBarLogo);

  let cartButton: HTMLButtonElement = document.getElementById(
    "cart-button"
  ) as HTMLButtonElement;
  cartButton.addEventListener("click", () => {
    location.href = "http://localhost:1234/pages/cart.html";
  });

  // let cartBtnOpen: boolean = false;
  // cartButtonDesktop.addEventListener("click", () => {
  //   if (!cartBtnOpen) {
  //     cartButtonDesktop.classList.add("is-open");
  //     cartDropDownContainer.classList.add("is-down");
  //     cartBtnOpen = true;
  //   } else {
  //     cartButtonDesktop.classList.remove("is-open");
  //     cartDropDownContainer.classList.remove("is-down");
  //     cartBtnOpen = false;
  //   }
  // });

  let cartCounter: HTMLSpanElement = document.getElementById(
    "cart-count"
  ) as HTMLSpanElement;
  cartCounter.innerHTML = cart.displayCartQty().toString();

  cart.displayCartQty();
}
