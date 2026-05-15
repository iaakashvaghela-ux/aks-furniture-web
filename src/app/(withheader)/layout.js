import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import StyledJsxRegistry from "../registry";
import ReduxProvider from "@/components/providers/ReduxProvider";
import { getCartItems } from "./api-fetching/cartApi/cartApi";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "MONSTA",
  description: "furniture online shop",
};

 
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${playfair.variable} ${outfit.variable} antialiased font-sans `}
        suppressHydrationWarning
      >
        <StyledJsxRegistry>
          <ReduxProvider>
            <Header />
            {children}
            <Footer />
          </ReduxProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}


