window.onload = function() {
    hamburgerMenu();
}

function hamburgerMenu() {
    const hamburgerBtn: HTMLDivElement = document.getElementById("hamburger-btn") as HTMLDivElement;
    const dropdownMenu: HTMLUListElement = document.getElementById("dropdown-menu") as HTMLUListElement;
    let hamburgerBtnOpen: boolean = false;
    hamburgerBtn.addEventListener("click", () => {
        if(!hamburgerBtnOpen){
            hamburgerBtn.classList.add("is-open");
            dropdownMenu.classList.add("is-down");
            hamburgerBtnOpen = true;
        }
        else{
            hamburgerBtn.classList.remove("is-open");
            dropdownMenu.classList.remove("is-down");
            hamburgerBtnOpen = false;
        }
    });
}
