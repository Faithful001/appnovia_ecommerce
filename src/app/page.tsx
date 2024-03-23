import GenderCollection from "@/components/GenderCollection/GenderCollection";
import HeaderHero from "@/components/HeaderHero/HeaderHero";
import OnyxFlow from "@/components/OnyxFlow/OnyxFlow";
import Products from "@/components/Products/Products";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeaderHero />
      <Products />
      <GenderCollection />
      <OnyxFlow />
    </main>
  );
}
