export function cartCount() {
  let count: number = 0;

  let cartCounter: HTMLSpanElement = document.createElement("span");
  cartCounter.id = "cart-count";

  count++;
  cartCounter.innerHTML = count.toString();
}
