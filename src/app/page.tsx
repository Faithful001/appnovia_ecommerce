import Artists from "@/components/Artists/Artists";
import Flow from "@/components/Flow/Flow";
import Footer from "@/components/Footer/Footer";
import GenderCollection from "@/components/GenderCollection/GenderCollection";
import HeaderHero from "@/components/HeaderHero/HeaderHero";
import Instagram from "@/components/Instagram/Instagram";
import News from "@/components/News/News";
import OnyxFlow from "@/components/OnyxFlow/OnyxFlow";
import Products from "@/components/Products/Products";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeaderHero />
      <Products />
      <GenderCollection />
      <OnyxFlow />
      <News />
      <Artists />
      <Instagram />
      <Footer />
    </main>
  );
}
