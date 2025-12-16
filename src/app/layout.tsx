import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kaydso — Predict. Prepare. Protect.",
  description:
    "Early warning system for drought, water scarcity, and food storage risk.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} font-sans antialiased text-slate-800 bg-[#E6EEEF]`}
      >
        {children}
      </body>
    </html>
  );
}
