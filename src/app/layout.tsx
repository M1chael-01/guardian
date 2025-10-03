import type { Metadata } from "next";
import { Exo_2, Inter, DM_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";

const exo2 = Exo_2({
  subsets: ["latin", "latin-ext"],
  weight: ["500"],
  variable: "--font-exo2",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  variable: "--font-dmsans",
});

export const metadata: Metadata = {
  title: "Guardians - Solo Mining",
  description: "Decentralize the future of Bitcoin—one mini-miner at a time.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${exo2.variable} ${inter.variable} ${dmSans.variable} bg-[#0a0f1c] text-white min-h-screen`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
