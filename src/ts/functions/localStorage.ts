import { Product } from "../models/products";

export let cartList: Product[] = [];
export let localStorageKey = JSON.parse(
  localStorage.getItem("localStorageKey")
);
