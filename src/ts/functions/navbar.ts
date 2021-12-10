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
  let cartButton: HTMLButtonElement = document.createElement("button");
  cartButton.setAttribute("type", "button");
  cartButton.className = "cart-button";
  cartButton.innerHTML = "<i class='bi bi-bag'></i>";
  cartButton.addEventListener("click", () => {
      if(window.location.href === "http://localhost:1234/pages/cart.html"){
          return false;
        }
        else{
            location.href = "cart.html";
        }
  });

  let cartCounter: HTMLSpanElement = document.getElementById(
    "cart-count"
  ) as HTMLSpanElement;

  //   navBarContainer.appendChild(cartCounter); // Detta skriver över loggan
  navBarContainer.appendChild(cartButton);
}
