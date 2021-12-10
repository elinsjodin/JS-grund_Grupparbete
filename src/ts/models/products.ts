import { Detail } from "./details";

export class Product {
  img: string;
  name: string;
  price: number;
  id?: string;
  details: Detail;

  constructor(img: string, name: string, price: number, viewPr: string) {
    this.img = img;
    this.name = name;
    this.price = price;
    this.id = viewPr;
  }
}
