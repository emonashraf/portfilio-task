import React from 'react';

const Header = () => {
    return (
        <>
            <header className="flex justify-between items-center px-8 py-4 border-b border-gray-800 bg-[#0f172a]">
                {/* Left side */}
                <div className="flex items-center gap-2 text-orange-400 font-semibold text-lg">
                    <span>🏠</span>
                    Home
                </div>

                {/* Right side */}
                <button className="border border-orange-400 text-orange-400 px-5 py-2 rounded-full hover:bg-orange-400 hover:text-black transition">Talk To Me</button>
            </header>
        </>
    );
};

export default Header;
