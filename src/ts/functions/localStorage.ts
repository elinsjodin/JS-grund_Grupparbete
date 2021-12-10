import { Detail } from "../models/details";
import { Item } from "../models/item";

export let detailsList: Detail[] = [];
export let cartList: Item[] = [];
export let localStorageKey = JSON.parse(
  localStorage.getItem("localStorageKey")
);
