"use client";

import { useCart } from "@/contexts/CartContext";
import { ProductsDataInterface } from "@/interfaces/data.interface";
import Image from "next/image";
import wishlist_icon from "../../../public/assets/icons/wishlist_icon.svg";
import eye_open_icon from "../../../public/assets/icons/eye_open_icon.svg";
import { LocalStorage } from "@/utils/LocalStorage/localStorage.util";
import NavigateButton from "@/components/ui/Button/NavigateButton";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Cart = () => {
  const { products, setProducts } = useCart();

  const [totalPrice, setTotalPrice] = useState<number>(0);

  const productsArray = Array.from(products);

  useEffect(() => {
    const price = productsArray.reduce((acc, curr) => acc + curr.price, 0);
    setTotalPrice(price);
  }, [productsArray]);

  function removeFromCart(product: ProductsDataInterface) {
    toast("Item removed from cart");
    const updatedFavorites = new Set(
      Array.from(products).filter((favorite) => favorite !== product)
    );

    setProducts(updatedFavorites);
    LocalStorage.set("cart_products", Array.from(updatedFavorites));
  }

  return (
    <div className="cart md:px-16 px-8 py-5">
      <ToastContainer />

      <NavigateButton location={-1} />
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-center text-2xl font-bold">Your cart items</h1>
        <div className="flex flex-col items-center justify-center">
          {productsArray.length > 0 ? (
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-content-center">
              {productsArray.map(
                (data: ProductsDataInterface, index: number) => (
                  <div key={index} className="relative">
                    <Image
                      src={data.img}
                      alt=""
                      className=" border border-black"
                    />
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
                      <Image
                        src={wishlist_icon}
                        alt=""
                        className="cursor-pointer"
                      />
                      <Image
                        src={eye_open_icon}
                        alt=""
                        className="cursor-pointer"
                      />
                    </div>

                    <div className="border border-black flex justify-between items-center pl-5 h-12">
                      <span>
                        <p className="text-[13px] font-medium">
                          {data.name.toUpperCase()}
                        </p>
                        <p className="text-sm -mt-1">${data.price}</p>
                      </span>
                      <span
                        className="border-l border-black px-5 h-12 flex items-center justify-center group hover:bg-black cursor-pointer"
                        onClick={() => removeFromCart(data)}
                      >
                        <span className="material-symbols-outlined group-hover:invert">
                          delete
                        </span>
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>
          ) : (
            <h1 className="text-center">Your cart seems empty :) </h1>
          )}
        </div>
        {productsArray.length > 0 && (
          <>
            <p className="text-left">Total: ${totalPrice}</p>

            <button className="rounded-md bg-black text-white px-8 py-2">
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
