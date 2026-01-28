'use client';
import React from 'react';
import { RiHome8Line, RiUserLine, RiSuitcaseLine, RiEditBoxLine, RiMailAiLine } from 'react-icons/ri';
import Image from 'next/image';
import heroImg from '../../public/img/hero-img.png';
import Link from 'next/link';

export default function Aside() {
    return (
        <aside className="md:col-span-4 bg-[#151515] flex flex-col relative border-r border-white/5">
            <header className="p-8 text-center md:text-left">
                <h1 className="text-3xl font-bold text-white">
                    Daryl <span className="text-orange-500">Smith</span>
                </h1>
                <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">UI/UX designer</p>
            </header>

            <div className="flex flex-1">
                <nav className="w-16 flex flex-col items-center py-6 border-r border-white/5 space-y-8">
                    <Link href="/" aria-label="Home" className="text-orange-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                        </svg>
                    </Link>
                    <Link href="profile" aria-label="Profile" className="text-gray-600 hover:text-white transition">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </Link>
                    <Link href="projects" aria-label="Portfolio" className="text-gray-600 hover:text-white transition">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </Link>
                    <Link href="blog" aria-label="Blog" className="text-gray-600 hover:text-white transition">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </Link>
                    <Link href="contact" aria-label="Contact" className="text-gray-600 hover:text-white transition">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </Link>
                </nav>

                <figure className="flex-1 relative bg-black">
                    <Image src={heroImg} alt="Profile Picture" width={400} className=" h-full" />
                    <figcaption className="absolute bottom-0 w-full bg-black/80 flex justify-center space-x-4 py-3 border-t border-white/10">
                        <a href="#" className="text-gray-400 hover:text-white text-xs" aria-label="Facebook"></a>
                        <a href="#" className="text-gray-400 hover:text-white text-xs" aria-label="LinkedIn"></a>
                        <a href="#" className="text-gray-400 hover:text-white text-xs" aria-label="Pinterest"></a>
                        <a href="#" className="text-gray-400 hover:text-white text-xs" aria-label="Instagram"></a>
                        <a href="#" className="text-gray-400 hover:text-white text-xs" aria-label="Twitter"></a>
                    </figcaption>
                </figure>
            </div>
        </aside>
    );
}
