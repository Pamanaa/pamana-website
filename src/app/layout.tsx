import type { Metadata } from "next";
import { Dongle } from "next/font/google";
import "./globals.css";

const dongle = Dongle({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--dongle",
});

export const metadata: Metadata = {
  title: "Pamana",
  description: "Resorts & Hotels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dongle.className} font-sans`}>{children}</body>
    </html>
  );
}
