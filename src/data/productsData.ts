import { ProductsDataInterface } from "@/interfaces/data.interface";
import img1 from "../../public/assets/img/img1.svg";
import img2 from "../../public/assets/img/img2.svg";
import img3 from "../../public/assets/img/img3.svg";
import img4 from "../../public/assets/img/img4.svg";
import img5 from "../../public/assets/img/img5.svg";
import img6 from "../../public/assets/img/img6.svg";
import img7 from "../../public/assets/img/img7.svg";
import img8 from "../../public/assets/img/img8.svg";

export const productsData: ProductsDataInterface[] = [
  {
    name: "Black Jacket",
    img: img1,
    new: true,
    on_sale: false,
    sold: false,
    price: 350.0,
  },
  {
    name: "Leather Jacket",
    img: img2,
    new: false,
    on_sale: false,
    sold: false,
    price: 300.0,
  },
  {
    name: "Black Outfit",
    img: img3,
    new: false,
    on_sale: true,
    sold: false,
    price: 350.0,
  },
  {
    name: "T-shirt",
    img: img4,
    new: false,
    on_sale: false,
    sold: false,
    price: 350.0,
  },
  {
    name: "Black Vest",
    img: img5,
    new: false,
    on_sale: false,
    sold: false,
    price: 350.0,
  },
  {
    name: "Leather Jacket",
    img: img6,
    new: false,
    on_sale: false,
    sold: false,
    price: 350.0,
  },
  {
    name: "Beige T-shirt",
    img: img7,
    new: false,
    on_sale: false,
    sold: true,
    price: 350.0,
  },
  {
    name: "Black Hat",
    img: img8,
    new: false,
    on_sale: false,
    sold: false,
    price: 350.0,
  },
];
