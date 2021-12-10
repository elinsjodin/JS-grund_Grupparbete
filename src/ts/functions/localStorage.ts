import { Detail } from "../models/details";
import { Item } from "../models/item";
import { Product } from "../models/products";

export let productList: Product[] = [];
export let detailsList: Detail[] = [];
export let cartList: Item[] = [];
export let localStorageKey = JSON.parse(
  localStorage.getItem("localStorageKey")
);
