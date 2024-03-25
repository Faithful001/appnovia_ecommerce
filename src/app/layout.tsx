import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { CartContextProvider } from "@/contexts/CartContext";
import { WishlistContextProvider } from "@/contexts/WishlistContext";

const noto_sans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Appnovia",
  description: "Appnovia Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>

      <body className={noto_sans.className}>
        <CartContextProvider>
          <WishlistContextProvider>{children}</WishlistContextProvider>
        </CartContextProvider>
      </body>
    </html>
  );
}
