'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, icon: Icon }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`flex items-center justify-center text-[#646464] transition-colors duration-300
        ${isActive ? 'text-primary' : 'hover:text-primary active:text-primary'}
      `}>
            <Icon className="text-2xl" />
        </Link>
    );
};

export default NavLink;
