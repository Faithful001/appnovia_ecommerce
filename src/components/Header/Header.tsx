import Image from "next/image";
import corsea_icon from "../../../public/assets/icons/corsea_icon.svg";
import search_icon from "../../../public/assets/icons/search_icon.svg";
import cart_icon from "../../../public/assets/icons/cart_icon.svg";
import wishlist_icon from "../../../public/assets/icons/wishlist_icon.svg";
import profile_icon from "../../../public/assets/icons/profile_icon.svg";
import { navbarData } from "@/data/navbarData";
import { NavbarDataInterface } from "@/interfaces/data.interface";
import Link from "next/link";

const Header = () => {
  return (
    <section className="header flex items-center justify-between text-[11px] border-b border-black py-5">
      <div className="flex gap-10">
        <Image src={corsea_icon} alt="" />
        <div className="flex items-center gap-10">
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
      </div>
      <div className="flex items-center gap-5 ">
        <span className="flex gap-2 cursor-pointer">
          <p className="font-semibold">SEARCH</p>
          <Image src={search_icon} alt="" />
        </span>
        <span className="flex items-center gap-2 font-semibold cursor-pointer">
          <p className="">CART</p>
          <span className="flex items-center gap-1">
            <Image src={cart_icon} alt="" className="" />
            <p>0</p>
          </span>
        </span>
        <span className="flex items-center gap-1 cursor-pointer">
          <Image src={wishlist_icon} alt="" className="" />
          <p className="font-semibold">0</p>
        </span>
        <Image src={profile_icon} alt="" className="cursor-pointer" />
      </div>
    </section>
  );
};

export default Header;
