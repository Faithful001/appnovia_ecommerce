import Image from "next/image";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import background_img from "../../../public/assets/bg/hero_bg.svg";

const HeaderHero = () => {
  return (
    <div className="header-hero flex flex-col h-screen md:px-16 px-8 pb-10 relative">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <Image
          src={background_img}
          className="w-full h-full object-cover"
          alt="Background"
        />
      </div>
      <Header />
      <Hero />
    </div>
  );
};

export default HeaderHero;
