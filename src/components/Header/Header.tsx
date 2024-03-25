"use client";

import Image from "next/image";
import corsea_icon from "../../../public/assets/icons/corsea_icon.svg";
import search_icon from "../../../public/assets/icons/search_icon.svg";
import cart_icon from "../../../public/assets/icons/cart_icon.svg";
import wishlist_icon from "../../../public/assets/icons/wishlist_icon.svg";
import profile_icon from "../../../public/assets/icons/profile_icon.svg";
import { navbarData } from "@/data/navbarData";
import { NavbarDataInterface } from "@/interfaces/data.interface";
import Link from "next/link";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Searchbar from "../ui/Searchbar/Searchbar";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";
import { useWishlist } from "@/contexts/WishlistContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [searchbarIsActive, setSearchbarIsActive] = useState<boolean>(false);
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const { products } = useCart();
  const { wishlist } = useWishlist();

  console.log(menuIsOpen);

  const searchbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchbarRef.current &&
        !searchbarRef.current.contains(event.target as Node)
      ) {
        setSearchbarIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <section className="header flex items-center justify-between text-[11px] border-b lg:border-black border-white py-5 ">
      <ToastContainer />
      <div className="flex gap-10">
        <Image
          src={corsea_icon}
          alt=""
          className={`lg:invert-0 invert ${
            searchbarIsActive ? "sm:block hidden" : "block"
          } `}
        />
        <div className="md:flex hidden items-center gap-10">
          {navbarData.map((data: NavbarDataInterface, index: number) => (
            <Link
              href={data.link}
              key={index}
              className="font-semibold lg:text-black text-white "
            >
              {data.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-3">
        {searchbarIsActive && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3 }}
          >
            <Searchbar ref={searchbarRef} />
          </motion.div>
        )}
        {!searchbarIsActive && (
          <span
            className="flex items-center gap-2 cursor-pointer lg:invert-0 invert"
            onClick={() => setSearchbarIsActive(true)}
          >
            <p className="font-semibold">SEARCH</p>
            <Image src={search_icon} alt="" />
          </span>
        )}

        <div
          className={`md:flex md:flex-row flex flex-col md:static fixed z-10 top-0 md:p-0 p-10 md:bg-transparent bg-white items-center justify-center md:h-auto md:w-auto h-screen w-full md:gap-5 gap-10 md:transition-none transition-all duration-300 ${
            menuIsOpen ? "left-0" : "-left-full"
          }`}
        >
          <span
            className="cursor-pointer md:hidden block absolute top-5 right-10"
            onClick={() => setMenuIsOpen(false)}
          >
            close
          </span>
          <div className="md:hidden flex flex-col items-center gap-10 ">
            {navbarData.map((data: NavbarDataInterface, index: number) => (
              <Link
                href={data.link}
                key={index}
                className="font-semibold text-black "
              >
                {data.name}
              </Link>
            ))}
          </div>
          <div
            className={`md:flex md:flex-row flex flex-col items-center justify-center md:gap-3 gap-10 ${
              menuIsOpen ? "invert-0" : "lg:invert-0 invert"
            }`}
          >
            <Link
              href={"/cart"}
              className="flex items-center gap-2 font-semibold cursor-pointer"
            >
              <p className="">CART</p>
              <span className="flex items-center gap-1">
                <Image src={cart_icon} alt="" className="" />
                <p>{Array.from(products).length}</p>
              </span>
            </Link>
            <Link
              href={"/wishlist"}
              className="flex items-center gap-1 cursor-pointer"
            >
              <Image src={wishlist_icon} alt="" className="" />
              <p className="font-semibold">{Array.from(wishlist).length}</p>
            </Link>
            <Image src={profile_icon} alt="" className="cursor-pointer" />
          </div>
        </div>
        <span
          className="material-symbols-outlined md:hidden block cursor-pointer lg:invert-0 invert"
          onClick={() => setMenuIsOpen(true)}
        >
          menu
        </span>
      </div>
    </section>
  );
};

export default Header;
