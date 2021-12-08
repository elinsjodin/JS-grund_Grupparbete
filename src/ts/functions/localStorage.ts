import { Item } from "../models/item";

export let cartList: Item[] = [];
export let localStorageKey = JSON.parse(
  localStorage.getItem("localStorageKey")
);
