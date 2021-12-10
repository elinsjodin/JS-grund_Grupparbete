import { Detail } from "../models/details";

export let cartList = [];
export let detailsList: Detail[] = [];
export let localStorageKey = JSON.parse(localStorage.getItem("localStorageKey"));