"use client";

import { ProductsDataInterface } from "@/interfaces/data.interface";
import { LocalStorage } from "@/utils/LocalStorage/localStorage.util";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface WishlistContextInterface {
  wishlist: Set<ProductsDataInterface>;
  setWishlist: Dispatch<SetStateAction<Set<ProductsDataInterface>>>;
}

const WishlistContext = createContext<WishlistContextInterface | undefined>(
  undefined
);

export const WishlistContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [wishlist, setWishlist] = useState<Set<ProductsDataInterface>>(
    new Set()
  );

  useEffect(() => {
    const cartProducts = LocalStorage.get("wishlist_products");
    cartProducts && setWishlist(cartProducts);
  }, [setWishlist]);

  return (
    <WishlistContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error("useWishlist should be within the WishlistProvider");
  }
  return context;
};
