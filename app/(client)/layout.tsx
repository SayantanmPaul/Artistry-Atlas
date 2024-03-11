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
  title: "Sayantan Paul | Software Developer ",
  description: "Sayantan Paul is a passionate Cross Platform Developer focusing on continuous learning and solving real-world challenges.",
  icons: {
    icon: './favicon.ico'
  }
};  

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${inter.className} h-full relative bg-[#FFFFFF] dark:bg-[#0F0B17] text-[#22242C] selection:bg-[#0F0B17] dark:selection:text-[#06030B] selection:text-white dark:selection:bg-[#F3F3F3] dark:text-[#F2F3F3] duration-300 transition-all ease-in-out`}>
        <Image src={BgGradient} alt="Bg_gradient" width={1280} height={1020} className="absolute lg:bg-cover w-full inset-0 m-auto lg:-top-[832px] -top-[210px] lg:opacity-70 opacity-50 -z-30 lg:max-w-[1440px] overflow-hidden select-none" />
        {/* next theme provider via util.tsx */}
        <Provider>
          <div className=" pt-4 lg:px-0 px-2 backdrop-blur-md ">
            <header>
              <Navmenu />
            </header>
          </div>
          <section>
            <main className="mx-auto max-w-full lg:max-w-[1018px] flex lg:flex-row md:flex-row flex-col lg:gap-16 gap-3 lg:pt-[64px] md:pt-[24px] pt-4 px-2 lg:px-0 md:px-4">  
              <StickyBar />
              <div className="">
              {children}
              </div>
            </main>
          </section>
        </Provider>
      </body>
    </html>
  );
}
