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

interface CartContextInterface {
  products: Set<ProductsDataInterface>;
  setProducts: Dispatch<SetStateAction<Set<ProductsDataInterface>>>;
}

const CartContext = createContext<CartContextInterface | undefined>(undefined);

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<Set<ProductsDataInterface>>(
    new Set()
  );

  useEffect(() => {
    const cartProducts = LocalStorage.get("cart_products");
    cartProducts && setProducts(cartProducts);
  }, [setProducts]);

  return (
    <CartContext.Provider value={{ products, setProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("the useCart context must be within CartContext Provider");
  }
  return context;
};
