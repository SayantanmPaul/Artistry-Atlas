import { Metadata, ResolvingMetadata } from "next";
import { Provider } from "./utils/provider"
import "/app/globals.css";
import Navmenu from "@/components/Navmenu";
import BgGradient from '@/public/assets/glow-vector.svg'
import Image from "next/image";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react"
import TopLoadingBar from "@/components/TopLoadingBar";
import Preloader from "@/components/Preloader";

export const metadata:Metadata={
  title: {
    default: "Sayantan Paul | Developer ",
    template: "%s: Sayantan Paul | Developer "
  },
  description: "Sayantan Paul is a passionate Cross Platform Developer focusing on continuous learning and solving real-world challenges.",
  twitter: {
    card: "summary_large_image"
  },
  openGraph: {
    title: "Sayantan Paul | Developer",
    description: "Sayantan Paul is a passionate Cross Platform Developer focusing on continuous learning and solving real-world challenges.",
    url: "https://www.sayantanpaul.com/",
    siteName: 'Sayantan Paul',
    images: [
      {
        url: "/opengraph-image.png",
        width: 800,
        height: 600
      },
      {
        url: "/opengraph-image.png",
        width: 1800,
        height: 1600,
        alt: "Sayantan Paul | Developer"
      },
    ]
  },
  keywords: ["Cross Platform Developer", "Full Stack Developer", "Software Engineer", "Full Stack Software Engineer", "Backend Developer", "Frontend Developer", "Developer Analyst", "Data Analyst"]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning suppressContentEditableWarning className={`bg-[#FFFFFF] dark:bg-[#0F0B17] text-[#22242C] selection:bg-[#0F0B17] dark:selection:text-[#06030B] selection:text-white dark:selection:bg-[#F3F3F3] dark:text-[#F2F3F3] duration-300 transition-all ease-in-out`}>
        <Preloader/>
        <TopLoadingBar/>
        <section>
        <div className="">
        <div className="fixed inset-0 -z-10 w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] h-screen"></div>
        <Image src={BgGradient} priority alt="Bg_gradient" width={1020} height={1020} className="absolute w-screen mx-auto inset-0 lg:-top-[732px] md:-top-[264px] -top-[172px] lg:opacity-70 opacity-50 -z-30 lg:max-w-[1440px] overflow-hidden select-none object-cover" />
        
        {/* next theme provider via util.tsx */}
        <Provider>
          <div className=" pt-4 lg:px-0 px-2 top-0 ">
            <header>
              <Navmenu />
            </header>
          </div>
            <main className="">  
              {children}
            </main>
        </Provider>
        <div className='absolute z-40'>
          <Toaster closeButton position="top-right"/>
        </div>
        </div>
        </section>
      </body>
      <Analytics/>
    </html>
  );
}
