import { Playfair_Display, Outfit } from "next/font/google";
import "../(withheader)/globals.css";
import StyledJsxRegistry from "../registry";
import ReduxProvider from "@/components/providers/ReduxProvider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Monsta | Exclusive Access",
  description: "Secure login to the Monsta luxury furniture platform.",
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
              {children}
          </ReduxProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}



