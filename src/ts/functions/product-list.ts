import { Product } from "../models/products";
import perfumeimage from "../../components/perfumebottle.jpg";


export function listOfProducts(){
    let pr1: Product = new Product(
        perfumeimage,
        "No.1" + " " + "Musk",
        1050 + ":-",
        "1"
      );
      let pr2: Product = new Product(
        perfumeimage,
        "No.2" + " " + "Vanilla",
        1050 + ":-",
        "2"
      );
      let pr3: Product = new Product(
        perfumeimage,
        "No.3" + " " + "Sandalwood",
        1050 + ":-",
        "3"
      );
      let pr4: Product = new Product(
        perfumeimage,
        "No.4" + " " + "Citrus Noir",
        1050 + ":-",
        "4"
      );
      let pr5: Product = new Product(
        perfumeimage,
        "No.5" + " " + "Oud",
        1050 + ":-",
        "5"
      );
      let pr6: Product = new Product(
        perfumeimage,
        "No.6" + " " + "Amber",
        1050 + ":-",
        "6"
      );
      let pr7: Product = new Product(
        perfumeimage,
        "No.7" + " " + "Bergamot",
        1050 + ":-",
        "7"
      );
      let pr8: Product = new Product(
        perfumeimage,
        "No.8" + " " + "Orange Basil",
        1050 + ":-",
        "8"
      );
      let pr9: Product = new Product(
        perfumeimage,
        "No.9" + " " + "Ylang-Ylang",
        1050 + ":-",
        "9"
      );
      let pr10: Product = new Product(
        perfumeimage,
        "No.10" + " " + "Geranium",
        1050 + ":-",
        "10"
      );
let productList = [pr1, pr2, pr3, pr4, pr5, pr6, pr7, pr8, pr9, pr10];
}