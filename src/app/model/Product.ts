export class Product{
  public name !: string;
  public img !: string;
  public price !: number;
  public status !: boolean;

  constructor(name: string, img: string, price: number, status: boolean) {
    this.name = name;
    this.img = img;
    this.price = price;
    this.status = status;
  }
}
