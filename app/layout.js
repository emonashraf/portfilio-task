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
import Container from './components/Container';
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
        <Container className="container shadow-[0_0_60px_rgba(255,255,255,0.09)]">
          <header className="bg-bg-1 grid grid-cols-12">
            <div className="col-span-6 md:col-span-4 bg-bg-1 lg:border-r border-[#353535] px-5 sm:px-10 md:px-15 lg:px-20 xl:px-23 py-3 md:py-4 lg:py-5 xl:py-6">
              <Link
                href="/"
                className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-none font-bold text-white block">
                Daryl <span className="text-primary">Smith</span>
              </Link>
              <p className=" text-sm md:text-base xl:text-[18px] leading-none mt-2 text-[#C2C2C2]">
                UI/UX designer
              </p>
            </div>
            <div className="col-span-6 lg:col-span-8 flex items-center justify-between gap-4 py-3 md:py-4 lg:py-5 xl:py-6 xl:pl-10  xl:pr-23 pr-5">
              <Link
                href="/"
                className="hidden md:flex items-center space-x-4 group">
                <span className="w-10 h-10 rounded-[6px] grid place-items-center bg-gradient-to-l from-primary to-secondary group-hover:from-secondary">
                  <RiHome8Line size={24} className="text-white" />
                </span>
                <span className="text-2xl font-bold text-white">Home</span>
              </Link>
              <div className="w-100 md:w-auto flex justify-end">
                <Button text="Talk To Me" href="/" variant="outline" />
              </div>
            </div>
          </header>
          <main className="relative z-10 bg-bg-2 grid grid-cols-12 overflow-hidden max-h-[700px]">
            <div className="col-span-1 lg:col-span-4">
              <Aside />
            </div>
            <section className="col-span-11 sm:col-span-10 lg:col-span-7 relative flex flex-col max-h-[700px] h-full overflow-hidden">

              <div className="py-6 md:py-8 lg:py-9 xl:py-10 px-2 sm:px-4 md:px-6 lg:px-10 xl:px-12 flex-1 overflow-y-auto custom-scrollbar">
                {children}
              </div>
            </section>
            <div className="hidden  relative col-span-12 sm:col-span-1 lg:col-span-1  h-full sm:flex flex-col items-center justify-center space-x-[42px] pb-[32px] pointer-events-none z-30">
              <footer className="  text-sm [writing-mode:vertical-lr] text-[#A5A5A5] pointer-events-auto">
                <div className=" absolute top-0 right-0 h-full w-full clip-sidebar-right"></div>
                © design by themefisher developed by gethugothemes
              </footer>
              <aside className="flex flex-col gap-2.5 pointer-events-auto">
                <Language />
              </aside>
            </div>
          </main>
          <div className=' sm:hidden flex flex-col items-center gap-2 justify-center center p-3 border-t border-white/25'>
            <footer className=" text-sm text-[#A5A5A5] pointer-events-auto text-center">
              <div className=" absolute top-0 right-0 h-full w-full clip-sidebar-right"></div>
              © design by themefisher developed by gethugothemes
            </footer>
            <aside className="flex  gap-2.5 pointer-events-auto">
              <Language />
            </aside>
          </div>
        </Container>
      </body>
    </html>
  );
}
