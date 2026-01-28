import './globals.css';
import 'remixicon/fonts/remixicon.css';

import Aside from './components/Aside';

export const metadata = {
    title: 'Daryl Smith - Portfolio',
    description: 'A personal portfolio site built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-[#1a1a1a] flex items-center justify-center min-h-screen p-4 font-sans text-gray-300">
                <div
                    className="fixed inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)',
                        backgroundSize: '60px 60px',
                        backgroundPosition: '0 0, 30px 30px',
                    }}></div>
                <main className="relative z-10 w-full max-w-5xl bg-[#111] grid grid-cols-1 md:grid-cols-12 overflow-hidden shadow-2xl border border-white/5">
                    <Aside />
                    <section className="md:col-span-8 p-8 md:p-12 flex flex-col relative">
                        <header className="flex justify-between items-center mb-12">
                            <div className="flex items-center space-x-3">
                                <div className="bg-orange-500/20 p-2 rounded">
                                    <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-bold text-white tracking-wide">Home</h2>
                            </div>
                            <button className="px-6 py-2 border border-orange-500/50 rounded-full text-xs text-orange-500 hover:bg-orange-500 hover:text-black transition-all font-bold uppercase tracking-widest">Talk To Me</button>
                        </header>
                        {children}

                        <footer className="hidden md:block absolute right-[-80px] top-1/2 -translate-y-1/2 rotate-90 text-[9px] text-gray-600 uppercase tracking-[0.4em] font-medium opacity-50">© design by themefisher developed by gathugothomes</footer>

                        <aside className="absolute bottom-8 right-8 flex flex-col space-y-2">
                            <button aria-label="French" className="w-8 h-8 rounded-full bg-gray-800/50 text-[10px] font-bold text-gray-500 hover:text-white transition">
                                FR
                            </button>
                            <button aria-label="English" className="w-8 h-8 rounded-full bg-orange-500 text-[10px] font-bold text-black shadow-lg shadow-orange-500/20">
                                EN
                            </button>
                        </aside>
                    </section>
                </main>
            </body>
        </html>
    );
}
