'use client';
import React from 'react';
import { RiHome8Line, RiUserLine, RiSuitcaseLine, RiEditBoxLine, RiMailAiLine } from 'react-icons/ri';
import NavLink from './NavLink';

export default function Sidebar() {
    const links = [
        { href: '/', icon: RiHome8Line },
        { href: '/about', icon: RiUserLine },
        { href: '/projects', icon: RiSuitcaseLine },
        { href: '/edit', icon: RiEditBoxLine },
        { href: '/contact', icon: RiMailAiLine },
    ];

    return (
        <aside className="w-[92px] p-[30px] clip-sidebar">
            <nav className="flex flex-col gap-10 ">
                {links.map((link, index) => (
                    <NavLink key={index} href={link.href} icon={link.icon} />
                ))}
            </nav>
        </aside>
    );
}
