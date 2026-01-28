'use client';

import { useState } from 'react';

export default function Language() {
    const [activeLang, setActiveLang] = useState('en');

    const baseBtn =
        'w-8 h-8 rounded-full text-[10px] font-bold transition-all duration-300';

    const activeBtn =
        'bg-gradient-to-l from-primary to-secondary text-white shadow-lg';

    const inactiveBtn =
        'bg-[#343434] text-white hover:bg-gradient-to-l hover:from-primary hover:to-secondary hover:text-white';

    return (
        <>
            {/* French */}
            <button
                aria-label="French"
                onClick={() => setActiveLang('fr')}
                className={`${baseBtn} ${activeLang === 'fr' ? activeBtn : inactiveBtn
                    }`}
            >
                Fr
            </button>

            {/* English */}
            <button
                aria-label="English"
                onClick={() => setActiveLang('en')}
                className={`${baseBtn} ${activeLang === 'en' ? activeBtn : inactiveBtn
                    }`}
            >
                En
            </button>
        </>
    );
}
