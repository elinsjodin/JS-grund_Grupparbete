export function footer() {
  let footerContainer: HTMLDivElement = document.getElementById(
    "footer-container"
  ) as HTMLDivElement;

  let footer: HTMLDivElement = document.createElement("div");

  let contact: HTMLParagraphElement = document.createElement("p");
  contact.id = "contact";
  contact.innerText = "Contact";

  let faq: HTMLParagraphElement = document.createElement("p");
  faq.id = "FAQ";
  faq.innerText = "FAQ";

  let philosphy: HTMLParagraphElement = document.createElement("p");
  philosphy.id = "philosphy";
  philosphy.innerText = "Brand Philosphy";

  let brand: HTMLParagraphElement = document.createElement("p");
  brand.id = "brand";
  brand.innerHTML = "&#169;" + "NLP";

  footer.appendChild(contact);
  footer.appendChild(faq);
  footer.appendChild(philosphy);
  footer.appendChild(brand);
  footerContainer.appendChild(footer);
}
