import { Metadata, ResolvingMetadata } from "next";
import { Provider } from "./utils/provider"
import "/app/globals.css";
import Navmenu from "@/components/Navmenu";
import BgGradient from '@/public/assets/glow-vector.svg'
import Image from "next/image";
import StickyBar from "@/components/StickyBar";
import { Toaster } from "sonner";

export const metadata:Metadata={
  title: "Sayantan Paul | Developer ",
  description: "Sayantan Paul is a passionate Cross Platform Developer focusing on continuous learning and solving real-world challenges.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning suppressContentEditableWarning className={`bg-[#FFFFFF] dark:bg-[#0F0B17] text-[#22242C] selection:bg-[#0F0B17] dark:selection:text-[#06030B] selection:text-white dark:selection:bg-[#F3F3F3] dark:text-[#F2F3F3] duration-300 transition-all ease-in-out`}>
        <section>
        <Image src={BgGradient} priority alt="Bg_gradient" width={720} height={410} className="absolute lg:w-screen md:w-[1000px] w-[1000px]  inset-0 lg:mx-auto md:mx-auto lg:-top-[732px] md:-top-[264px] -top-[172px] lg:opacity-70 opacity-50 -z-30 lg:max-w-[1440px] overflow-hidden select-none h-f" />

        <div className="absolute inset-0 -z-10 w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] h-screen"></div>
        {/* next theme provider via util.tsx */}
        <Provider>
          <div className=" pt-4 lg:px-0 px-2 top-0 ">
            <header>
              <Navmenu />
            </header>
          </div>
          
            <main className="mx-auto max-w-full lg:max-w-[1018px] flex lg:flex-row flex-col lg:gap-16 gap-3 lg:pt-[64px] md:pt-[24px] pt-4 px-2 lg:px-0 md:px-4 lg:pl-0">  
              {children}
            </main>
          
        </Provider>
        <div className='absolute z-40'>
          <Toaster closeButton position="top-right"/>
        </div>
        </section>
      </body>
    </html>
  );
}
