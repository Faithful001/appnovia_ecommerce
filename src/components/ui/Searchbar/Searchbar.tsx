import { forwardRef, useState, ChangeEvent, Ref } from "react";
import search_icon from "../../../../public/assets/icons/search_icon.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const Searchbar = forwardRef<HTMLDivElement>(({}, ref: Ref<HTMLDivElement>) => {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <motion.div
      className="searchbar relative"
      ref={ref}
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
      transition={{ duration: 0.3 }}
    >
      <input
        type="text"
        placeholder="Search for a product"
        className="p-2 pr-5 w-60 rounded-full bg-white border border-black"
        value={searchText}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchText(e.target.value)
        }
      />
      <Image src={search_icon} alt="" className="absolute top-3 right-2" />
    </motion.div>
  );
});

Searchbar.displayName = "Searchbar";

export default Searchbar;
