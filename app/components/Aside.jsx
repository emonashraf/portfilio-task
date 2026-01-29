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

export default function Aside() {
    const pathname = usePathname();

    const navLinks = [
        { id: 1, name: 'Home', path: '/', icon: <RiHome8Line size={24} /> },
        { id: 2, name: 'Resume', path: '/resume', icon: <RiUserLine size={24} /> },
        { id: 3, name: 'Skills', path: '/skills', icon: <RiSuitcaseLine size={24} /> },
        { id: 4, name: 'Portfolio', path: '/portfolio', icon: <RiLayoutMasonryLine size={24} /> },
        { id: 5, name: 'Blog', path: '/blog', icon: <RiEditBoxLine size={24} /> },
        { id: 6, name: 'Pricing', path: '/pricing', icon: <RiPriceTag3Line size={24} /> },
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
        <aside className="flex flex-col relative bg-bg-2 h-full">
            {/* Header Section */}
            <header className="py-3 md:py-4 lg:py-5 xl:py-6 px-5 sm:px-10 md:px-15 lg:px-20 xl:px-[92px] bg-bg-1 lg:border-r border-[#353535]">
                <Link href="/" className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-none font-bold text-white block">
                    Daryl <span className="text-primary">Smith</span>
                </Link>
                <p className=" text-sm md:text-base xl:text-[18px] leading-none mt-2 text-[#C2C2C2]">UI/UX designer</p>
            </header>

            <div className="flex flex-1 overflow-hidden">
                {/* Navigation with Tooltips */}
                <nav className="w-[92px] flex flex-col items-center py-20 space-y-10 clip-sidebar border-r border-[#353535]">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.path;
                        return (
                            <Link 
                                key={link.id} 
                                href={link.path} 
                                aria-label={link.name} 
                                className={`relative group flex items-center justify-center transition-colors duration-300 ${
                                    isActive ? 'text-primary' : 'text-text-1 hover:text-primary'
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

                {/* Profile Image Figure */}
                <figure className="flex-1 relative bg-[#0a0a0a] group  h-full">
                    <div className='w-full h-full flex justify-center mx-auto'>
                         <Image 
                        src={heroImg} 
                        alt="Daryl Smith Profile" 
                        className="object-cover w-full max-w-[368px] absolute bottom-[60px]" 
                        priority
                    />
                    </div>
                   

                    {/* Social Links Figcaption */}
                    <figcaption className="absolute bottom-0 w-full bg-black flex justify-center space-x-6 py-3.5 z-20">
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
                </figure>
            </div>
        </aside>
    );
}