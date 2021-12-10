export class Product {
  img: string;
  name: string;
  price: number | string;
  id?: string;

  constructor(
    img: string,
    name: string,
    price: string | number,
    viewPr: string
  ) {
    this.img = img;
    this.name = name;
    this.price = price;
    this.id = viewPr;
  }
}
