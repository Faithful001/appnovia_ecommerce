import HeaderHero from "@/components/HeaderHero/HeaderHero";
import Products from "@/components/Products/Products";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-16">
      <HeaderHero />
      <Products />
    </main>
  );
}
