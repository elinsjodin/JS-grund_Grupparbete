export class Item {
  img: string;
  name: string;
  price: number | string;
  qty: number;

  constructor(img: string, name: string, price: string | number, qty: number) {
    this.img = img;
    this.name = name;
    this.price = price;
    this.qty = qty;
  }
}
