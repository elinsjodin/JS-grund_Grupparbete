export class Product {
  img: string;
  name: string;
  price: number | string;
  id?: string;
  qty?: number;

  constructor(
    img: string,
    name: string,
    price: string | number,
    viewPr: string,
    qty?: number
  ) {
    this.img = img;
    this.name = name;
    this.price = price;
    this.id = viewPr;
    this.qty = qty;
  }
}
