import { Detail } from "./details";

export class Product {
  img: string;
  name: string;
  price: number;
  id?: string;
  detail: Detail;

  constructor(
    img: string,
    name: string,
    price: number,
    viewPr: string,
    details: Detail
  ) {
    this.img = img;
    this.name = name;
    this.price = price;
    this.id = viewPr;
    this.detail = details;
  }
}
