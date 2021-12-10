export class Detail {
  img: HTMLImageElement;
  desc: string;
  ing: string;

  constructor(
    img: HTMLImageElement,
    desc: string,
    ing: string
    ) {
    this.img = img;
    this.desc = desc;
    this.ing = ing;
  }
}