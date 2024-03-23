import { productsData } from "@/data/productsData";
import { ProductsDataInterface } from "@/interfaces/data.interface";
import Image from "next/image";
import cart_icon from "../../../public/assets/icons/cart_icon.svg";
import eye_open_icon from "../../../public/assets/icons/eye_open_icon.svg";
import wishlist_icon from "../../../public/assets/icons/wishlist_icon.svg";

const Products = () => {
  return (
    <section className="products mx-5 flex flex-col items-center justify-center my-20">
      <p className="text-[29px] text-center max-w-[90%] mb-20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud.
      </p>
      <div>
        <span className="flex items-center gap-10 font-semibold text-[11px] mb-5">
          <p className="">ALL PRODUCTS</p>
          <p>LIFESTYLE</p>
          <p>BRAND</p>
          <p className="bg-[#EBEBEB] p-1">OUTWEAR</p>
        </span>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-content-center">
          {productsData.map((data: ProductsDataInterface, index: number) => (
            <div key={index} className="relative">
              <Image src={data.img} alt="" className=" border border-black" />
              {data.new && (
                <p className="px-1 border border-black bg-white text-[13px] absolute top-4 left-4">
                  NEW
                </p>
              )}
              {data.on_sale && (
                <p className="px-1 border border-black bg-white text-[13px] absolute top-4 left-4">
                  SALE
                </p>
              )}
              {data.sold && (
                <p className="px-1 bg-black text-white text-[13px] absolute top-4 left-4">
                  SOLD
                </p>
              )}
              <div className="flex flex-col items-center gap-3 absolute top-4 right-4">
                <Image src={wishlist_icon} alt="" className="cursor-pointer" />
                <Image src={eye_open_icon} alt="" className="cursor-pointer" />
              </div>

              <div className="border border-black flex justify-between items-center pl-5 h-12">
                <span>
                  <p className="text-[13px] font-medium">
                    {data.name.toUpperCase()}
                  </p>
                  <p className="text-sm -mt-1">${data.price}</p>
                </span>
                <span className="border-l border-black px-5 h-12 flex items-center justify-center group hover:bg-black cursor-pointer">
                  <Image
                    src={cart_icon}
                    alt=""
                    className="group-hover:invert"
                  />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
