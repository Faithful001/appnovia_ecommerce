"use client";

import NavigateButton from "@/components/ui/Button/NavigateButton";
import { useWishlist } from "@/contexts/WishlistContext";
import { ProductsDataInterface } from "@/interfaces/data.interface";
import Image from "next/image";
import wishlist_icon from "../../../public/assets/icons/wishlist_icon.svg";
import eye_open_icon from "../../../public/assets/icons/eye_open_icon.svg";
import { useEffect } from "react";
import { LocalStorage } from "@/utils/LocalStorage/localStorage.util";

const Wishlist = () => {
  const { wishlist, setWishlist } = useWishlist();

  const wishlistArray = Array.from(wishlist);

  function removeFromWishlist(product: ProductsDataInterface) {
    const updatedFavorites = new Set(
      Array.from(wishlist).filter((favorite) => favorite !== product)
    );

    setWishlist(updatedFavorites);
    LocalStorage.set("wishlist_products", Array.from(updatedFavorites));
  }

  return (
    <div className="wishlist">
      <NavigateButton location={-1} />
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-center text-2xl font-bold">Your wishlist items</h1>
        <div className="flex flex-col items-center justify-center">
          {wishlistArray.length > 0 ? (
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-content-center">
              {" "}
              {wishlistArray.map(
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
                        onClick={() => removeFromWishlist(data)}
                      >
                        <Image
                          src={wishlist_icon}
                          alt=""
                          className="group-hover:invert cursor-pointer"
                        />
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>
          ) : (
            <h1 className="text-center">Your wishlist seems empty :) </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
