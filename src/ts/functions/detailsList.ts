import { Detail } from "../models/details";
// import perfumeimage from "../../components/perfumebottle.jpg";
import { detailsList } from "./localStorage";
import { Product } from "../models/products";

export function listOfItemsInDetails() {
  let itemOne: Detail = new Detail(
    "Musk: This fragrance is made with cedar wood mixed with heart notes of musk and top notes of citrus.",
    "Alcohol, Aqua, Parfume (fragrance)."
  );
  let itemTwo: Detail = new Detail(
    "Vanilla: Our Vanilla fragrance contains base notes of gourmand vanilla and warm amber with top notes of tonka bean and cacao.",
    "Alcohol, Aqua, Parfume (fragrance)."
  );
  let itemThree: Detail = new Detail(
    "Sandalwood: This is our most traditional scent, pure sandalwood mixed with a little black peppar.",
    "Alcohol, Aqua, Parfume (fragrance)."
  );
  let itemFour: Detail = new Detail(
    "Citrus Noir: Our most popular fragrance is a woody, smoky scent made from notes of black lime and dried lemon.",
    "Alcohol, Aqua, Parfume (fragrance)."
  );
  let itemFive: Detail = new Detail(
    "Oud: To make our Oud fragrance really special we mixed traditional oud with amber and spicy vanilla to give it a true oriental and warm feeling with base notes of cinnamon and vanilla, heart notes of oud and top notes of amber.",
    "Alcohol, Aqua, Parfume (fragrance)."
  );
  let itemSix: Detail = new Detail(
    "Amber: To create this wonderful and oriental fragrance we mixed amber with notes of violet and rose.",
    "Alcohol, Aqua, Parfume (fragrance)."
  );
  let itemSeven: Detail = new Detail(
    "Bergamot: This fresh scent is created with the Italian riviera in mind and is made with fresh citrus, red ginger and cedarwood.",
    "Alcohol, Aqua, Parfume (fragrance)."
  );
  let itemEight: Detail = new Detail(
    "Orange Basil: Orange Basil is one of our most unique fragrances and contains notes of citrus peel, cardamom and basil leaves.",
    "Alcohol, Aqua, Parfume (fragrance)."
  );
  let itemNine: Detail = new Detail(
    "Ylang-Ylang: This soft scent is made of floral notes such as rose and patchouli, topped with yang-yang and vanilla flower.",
    "Alcohol, Aqua, Parfume (fragrance)."
  );
  let itemTen: Detail = new Detail(
    "Geranium: To give this scent a true floral touch we mixed geranium with notes of rose petals and topped it with patchouli and lavender.",
    "Alcohol, Aqua, Parfume (fragrance)."
  );

  detailsList.push(
    itemOne,
    itemTwo,
    itemThree,
    itemFour,
    itemFive,
    itemSix,
    itemSeven,
    itemEight,
    itemNine,
    itemTen
  );

  localStorage.setItem("Details list", JSON.stringify(detailsList));
}
