import Header from "../Header/Header";
import Hero from "../Hero/Hero";

const HeaderHero = () => {
  return (
    <div className="header-hero flex flex-col h-screen px-16">
      <Header />
      <Hero />
    </div>
  );
};

export default HeaderHero;
