import { cartDropDown } from "./cartModal";

export function myNavBar() {
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
  let navBarLogo: HTMLHeadingElement = document.createElement("h3");
  navBarLogo.className = "navbar-logo";
  navBarLogo.innerText = "NLP";

  navBarContainer.appendChild(navBarLogo);

  // CARTBUTTON
  let cartButtonDesktop: HTMLButtonElement = document.createElement("button");
  cartButtonDesktop.setAttribute("type", "button");
  cartButtonDesktop.className = "cart-button-desktop";
  cartButtonDesktop.addEventListener("click", cartDropDown);

  let cartButtonMobile: HTMLButtonElement = document.createElement("button");
  cartButtonMobile.setAttribute("type", "button");
  cartButtonMobile.className = "cart-button-mobile";
  cartButtonMobile.addEventListener("click", () => {
    if (window.location.href === "http://localhost:1234/pages/cart.html") {
      return false;
    } else {
      location.href = "cart.html";
    }
  });

  let cartBtnOpen: boolean = false;
  cartButtonDesktop.addEventListener("click", () => {
    if (!cartBtnOpen) {
      cartButtonDesktop.classList.add("is-open");
      cartDropDownContainer.classList.add("is-down");
      cartBtnOpen = true;
    } else {
      cartButtonDesktop.classList.remove("is-open");
      cartDropDownContainer.classList.remove("is-down");
      cartBtnOpen = false;
    }
  });

  let cartLogo: HTMLAnchorElement = document.createElement("a");
  cartLogo.className = "cart-logo";
  cartLogo.innerHTML = "<i class='bi bi-bag'></i>";

  let cartLogoDesktop: HTMLAnchorElement = document.createElement("a");
  cartLogoDesktop.className = "cart-logo";
  cartLogoDesktop.innerHTML = "<i class='bi bi-bag'></i>";

  cartButtonDesktop.appendChild(cartLogoDesktop);
  cartButtonMobile.appendChild(cartLogo);

  let cartCounter: HTMLSpanElement = document.createElement("span");
  cartCounter.className = "cart-count";

  let cartCounterDesktop: HTMLSpanElement = document.createElement("span");
  cartCounterDesktop.className = "cart-count";

  cartButtonDesktop.appendChild(cartCounterDesktop);
  cartButtonMobile.appendChild(cartCounter);

  navBarContainer.appendChild(cartButtonDesktop);
  navBarContainer.appendChild(cartButtonMobile);
}
