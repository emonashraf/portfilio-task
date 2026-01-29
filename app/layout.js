import './globals.css';
import 'remixicon/fonts/remixicon.css';
import heroImg from '../public/img/bg-shape.png';
import Aside from './components/Aside';
import Link from 'next/link';
import {
  RiHome8Line,
  RiUserLine,
  RiSuitcaseLine,
  RiEditBoxLine,
  RiMailAiLine,
  RiFacebookFill,
  RiLinkedinFill,
  RiPinterestFill,
  RiInstagramLine,
  RiTwitterXFill,
} from 'react-icons/ri';
import Image from 'next/image';
import Button from './components/Button';
import Language from './components/Language';
export const metadata = {
  title: 'Daryl Smith - Portfolio',
  description: 'A personal portfolio site built with Next.js and Tailwind CSS',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center min-h-screen p-4 font-sans text-[#979797]">
        <div
          className="fixed inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url('${heroImg.src}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}></div>

        <main className="relative z-10 w-[1320px]  bg-bg-2 grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-[0_0_60px_rgba(255,255,255,0.09)]">
          <div className="lg:col-span-4 min-h-[660px]">
            <Aside />
          </div>
          <section className="lg:col-span-8 relative flex flex-col max-h-[800px] h-full overflow-hidden">
            <header className="bg-bg-1 py-[28px] pl-10 pr-[92px] flex justify-between items-center shrink-0">
              <Link href="/" className="flex items-center space-x-4 group">
                <span className="w-10 h-10 rounded-[6px] grid place-items-center bg-gradient-to-l from-primary to-secondary group-hover:from-secondary">
                  <RiHome8Line size={24} className="text-white" />
                </span>
                <span className="text-2xl font-bold text-white">Home</span>
              </Link>
              <Button text="Talk To Me" href="/" variant="outline" />
            </header>
            <div className="py-6 md:py-8 lg:py-9 xl:py-10 px-2 sm:px-4 md:px-6 lg:px-10 xl:px-12 mr-[92px] flex-1 overflow-y-auto custom-scrollbar">
              {children}
            </div>
            <div className=" md:absolute top-[10%] clip-sidebar-right right-0 md:w-[92px] md:h-full flex flex-col items-center justify-center space-x-[42px] pb-[32px] pointer-events-none z-30">
              <footer className="text-sm md:[writing-mode:vertical-lr] text-[#A5A5A5] pointer-events-auto">
                © design by themefisher developed by gethugothemes
              </footer>
              <aside className="flex md:flex-col gap-2.5 pointer-events-auto">
                <Language />
              </aside>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}