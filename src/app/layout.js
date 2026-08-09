import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "THREE OFF THE TEE | Golf. Second Chances. Good People.",
  description: "Southern California golf lifestyle brand built around second chances, community, faith, and everyday golf culture. Founded by LA County firefighter Jake Raden. Take the drop. Reload. Keep swinging.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} dark h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#081B12] text-[#F7F5F0] font-sans selection:bg-[#E8A246] selection:text-black">
        {children}
      </body>
    </html>
  );
}
