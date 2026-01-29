'use client';
import React from 'react';
import {
    RiHome8Line, RiUserLine, RiSuitcaseLine, RiPriceTag3Line,
    RiEditBoxLine, RiLayoutMasonryLine, RiMailAiLine,
    RiFacebookFill, RiLinkedinFill, RiPinterestFill,
    RiInstagramLine, RiTwitterXFill
} from 'react-icons/ri';
import Image from 'next/image';
import heroImg from '../../public/img/hero-img.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Language from './Language';

export default function Aside() {
    const pathname = usePathname();

    const navLinks = [
        { id: 1, name: 'Home', path: '/', icon: <RiHome8Line /> },
        { id: 2, name: 'Resume', path: '/resume', icon: <RiUserLine /> },
        { id: 3, name: 'Skills', path: '/skills', icon: <RiSuitcaseLine /> },
        { id: 4, name: 'Portfolio', path: '/portfolio', icon: <RiLayoutMasonryLine  /> },
        { id: 5, name: 'Blog', path: '/blog', icon: <RiEditBoxLine /> },
        { id: 6, name: 'Pricing', path: '/pricing', icon: <RiPriceTag3Line /> },
        { id: 7, name: 'Contact', path: '/contact', icon: <RiMailAiLine /> },
    ];

    const socialLinks = [
        { id: 1, name: 'Facebook', url: '#', icon: <RiFacebookFill /> },
        { id: 2, name: 'LinkedIn', url: '#', icon: <RiLinkedinFill /> },
        { id: 3, name: 'Pinterest', url: '#', icon: <RiPinterestFill /> },
        { id: 4, name: 'Instagram', url: '#', icon: <RiInstagramLine /> },
        { id: 5, name: 'Twitter', url: '#', icon: <RiTwitterXFill /> },
    ];

    return (
        <aside className="flex flex-col relative bg-bg-2 h-full">
            <div className="relative flex flex-1 overflow-hidden">
                <nav className="w-23 relative z-1 flex flex-col items-center py-20  space-y-4 md:space-y-6  lg:space-y-8 xl:space-y-10  border-r border-[#353535]">
                    <div className=" absolute top-0 left-0 h-full w-full clip-sidebar bg-red-300"></div>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.path;
                        return (
                            <Link
                                key={link.id}
                                href={link.path}
                                aria-label={link.name}
                                className={`relative group md:text-lg lg:text-xl xl:text-2xl  flex items-center justify-center transition-colors duration-300 ${isActive ? 'text-primary' : 'text-text-1 hover:text-primary'
                                    }`}
                            >
                                {link.icon}
                                <span className="absolute left-full ml-4 px-3 py-1.5 bg-primary text-white text-xs font-bold  tracking-widest rounded opacity-0 invisible -translate-x-3 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap z-50 shadow-xl pointer-events-none">
                                    {link.name}
                                    <span className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-primary rotate-45"></span>
                                </span>
                            </Link>
                        );
                    })}
                </nav>
                <figure className="bg-[#0a0a0a] group hidden max-h-[700px]  flex-col justify-end lg:flex">
                    <div className=''>
                        <div className='w-full flex justify-center mx-auto'>
                            <Image
                                src={heroImg}
                                alt="Daryl Smith Profile"
                                className="w-full max-w-[368px] "
                                priority
                            />
                        </div>
                        <figcaption className=" w-full bg-black flex justify-center space-x-6 py-3.5 z-20">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.id}
                                    href={social.url}
                                    aria-label={social.name}
                                    className="w-8 h-8 bg-bg-1 grid place-items-center rounded-full hover:text-primary transition-colors text-xl border border-white/5"
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </figcaption>
                    </div>
                </figure>
            </div>
        </aside>
    );
}