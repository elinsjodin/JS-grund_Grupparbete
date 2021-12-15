export function footer() {
  let footerContainer: HTMLDivElement = document.getElementById(
    "footer-container"
  ) as HTMLDivElement;

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

  footerContainer.appendChild(contact);
  footerContainer.appendChild(faq);
  footerContainer.appendChild(philosphy);
  footerContainer.appendChild(brand);
}
