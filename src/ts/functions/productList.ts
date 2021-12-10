import { Product } from "../models/products";
import perfumeimage from "../../components/perfumebottle.jpg";
import { detailsList, productList } from "./localStorage";

export function products() {
  let pr1: Product = new Product(
    perfumeimage,
    "No.1 Musk",
    1050,
    "1",
    detailsList[0]
  );
  let pr2: Product = new Product(
    perfumeimage,
    "No.2" + " " + "Vanilla",
    1050,
    "2",
    detailsList[1]
  );
  let pr3: Product = new Product(
    perfumeimage,
    "No.3" + " " + "Sandalwood",
    1050,
    "3",
    detailsList[2]
  );
  let pr4: Product = new Product(
    perfumeimage,
    "No.4" + " " + "Citrus Noir",
    1050,
    "4",
    detailsList[3]
  );
  let pr5: Product = new Product(
    perfumeimage,
    "No.5" + " " + "Oud",
    1050,
    "5",
    detailsList[4]
  );
  let pr6: Product = new Product(
    perfumeimage,
    "No.6" + " " + "Amber",
    1050,
    "6",
    detailsList[5]
  );
  let pr7: Product = new Product(
    perfumeimage,
    "No.7" + " " + "Bergamot",
    1050,
    "7",
    detailsList[6]
  );
  let pr8: Product = new Product(
    perfumeimage,
    "No.8" + " " + "Orange Basil",
    1050,
    "8",
    detailsList[7]
  );
  let pr9: Product = new Product(
    perfumeimage,
    "No.9" + " " + "Ylang-Ylang",
    1050,
    "9",
    detailsList[8]
  );
  let pr10: Product = new Product(
    perfumeimage,
    "No.10" + " " + "Geranium",
    1050,
    "10",
    detailsList[9]
  );

  productList.push(pr1, pr2, pr3, pr4, pr5, pr6, pr7, pr8, pr9, pr10);

  console.log(productList);
}
