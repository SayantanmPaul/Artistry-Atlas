import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "../utils/provider"
import "./globals.css";
import Navmenu from "@/components/Navmenu";
import BgGradient from '../../public/assets/glow-vector.svg'
import Image from "next/image";
import StickyBar from "@/components/StickyBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-full relative bg-[#FFFFFF] dark:bg-[#0F0B17] text-[#22242C] selection:bg-[#0F0B17] dark:selection:text-[#06030B] selection:text-white dark:selection:bg-[#F3F3F3] dark:text-[#F2F3F3] duration-300 transition-all ease-in-out`}>
        <Image src={BgGradient} alt="Bg_gradient" width={1280} height={1020} className="absolute lg:bg-cover w-full inset-0 m-auto lg:-top-[432px] -top-[100px] lg:opacity-70 opacity-50 -z-10 lg:max-w-[1440px] overflow-hidden select-none" />
        {/* next theme provider via util.tsx */}
        <Provider>
          <div className=" pt-4 lg:px-0 px-4 z-10 backdrop-blur-md">
            <Navmenu />
          </div>
          <section>
            <main className="mx-auto max-w-[358px] lg:max-w-[1018px] flex flex-row gap-16 lg:pt-[64px] pt-4">
              <StickyBar />
              {children}
            </main>
          </section>
        </Provider>
      </body>
    </html>
  );
}
