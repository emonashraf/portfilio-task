'use client';
import React from 'react';
import { RiHome8Line, RiUserLine, RiSuitcaseLine, RiPriceTag3Line, RiEditBoxLine, RiLayoutMasonryLine, RiMailAiLine, RiFacebookFill, RiLinkedinFill, RiPinterestFill, RiInstagramLine, RiTwitterXFill } from 'react-icons/ri';
import Image from 'next/image';
import heroImg from '../../public/img/hero-img.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Aside() {
    const pathname = usePathname();

    const navLinks = [
        { id: 1, name: 'Home', path: '/', icon: <RiHome8Line size={24} /> },
        { id: 2, name: 'resume', path: '/resume', icon: <RiUserLine size={24} /> },
        { id: 3, name: 'Skills', path: '/skills', icon: <RiSuitcaseLine size={24} /> },
        { id: 4, name: 'Portfolio', path: '/portfolio', icon: <RiLayoutMasonryLine size={24} /> },
        { id: 5, name: 'Blog', path: '/blog', icon: <RiEditBoxLine size={24} /> },
        { id: 6, name: 'pricing', path: '/pricing', icon: <RiPriceTag3Line size={24} /> },
        { id: 7, name: 'Contact', path: '/contact', icon: <RiMailAiLine size={24} /> },
    ];

    const socialLinks = [
        { id: 1, name: 'Facebook', url: '#', icon: <RiFacebookFill /> },
        { id: 2, name: 'LinkedIn', url: '#', icon: <RiLinkedinFill /> },
        { id: 3, name: 'Pinterest', url: '#', icon: <RiPinterestFill /> },
        { id: 4, name: 'Instagram', url: '#', icon: <RiInstagramLine /> },
        { id: 5, name: 'Twitter', url: '#', icon: <RiTwitterXFill /> },
    ];

    return (
        <aside className=" flex flex-col relative  bg-bg-2 h-full">
            {/* Header Section */}
            <header className="py-6 px-[92px]  bg-bg-1  border-r border-[#353535] ">
                <Link href="/" className="text-3xl leading-none font-bold text-white block">
                    Daryl <span className="text-primary">Smith</span>
                </Link>
                <p className="text-[18px] leading-none mt-2 text-[#C2C2C2]">UI/UX designer</p>
            </header>

            <div className="flex flex-1 overflow-hidden">
                <nav className="w-[92px] flex flex-col items-center py-20 space-y-10 clip-sidebar">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.path;
                        return (
                            <Link key={link.id} href={link.path} aria-label={link.name} className={`flex items-center justify-center transition-colors duration-300 ${isActive ? 'text-primary' : 'text-text-1 hover:text-primary active:text-primary'}`}>
                                {link.icon}
                            </Link>
                        );
                    })}
                </nav>
                <figure className="flex-1 relative bg-[#0a0a0a] group  h-full">
                    <Image src={heroImg} alt="Daryl Smith Profile"   className="object-cover w-full  absolute bottom-[60px]" />

                    <figcaption className="absolute bottom-0 w-full bg-black  flex justify-center space-x-6 py-3.5 z-20">
                        {socialLinks.map((social) => (
                            <Link key={social.id} href={social.url} aria-label={social.name} className="w-8 h-8 bg-bg-1 grid place-items-center rounded-full hover:text-primary transition-colors text-xl">
                                {social.icon}
                            </Link>
                        ))}
                    </figcaption>
                </figure>
            </div>
        </aside>
    );
}
