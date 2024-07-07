import type { Metadata } from "next";
import { Dongle } from "next/font/google";
import "../globals.css";
import { redirect } from "next/navigation";
import { getAuth } from "../features/auth/queries/get-auth";
import Header from "@/components/reservation/header";
import Footer from "@/components/reservation/footer";
import Sidebar from "@/components/reservation/sidebar";

const dongle = Dongle({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--dongle",
});

export const metadata: Metadata = {
  title: "Pamana",
  description: "Resorts & Hotels",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await getAuth();
  if (!user) {
    redirect("/sign-in");
  }
  return (
    <html lang="en">
      <body
        className={`${dongle.className} font-sans flex flex-col bg-[#F6F8F7] h-screen`}
      >
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-col w-full">
            <Header />
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
