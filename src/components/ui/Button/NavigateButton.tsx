"use client";
import { useRouter } from "next/navigation";

const NavigateButton = ({ location }: { location: number | string }) => {
  const router = useRouter();

  const handleClick = () => {
    if (typeof window !== "undefined") {
      typeof location === "string"
        ? router.push(location)
        : typeof location === "number"
        ? window.history.go(location)
        : null;
    }
  };

  return (
    <div className="navigation-button">
      <span
        className="material-symbols-outlined hover:bg-[#b9b9b94b] rounded-full p-2 cursor-pointer"
        onClick={handleClick}
      >
        arrow_back
      </span>
    </div>
  );
};

export default NavigateButton;
