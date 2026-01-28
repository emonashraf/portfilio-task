import Sidebar from './components/Sidebar';
import Image from 'next/image';
import heroImg from '../public/img/hero-img.png';

export default function Home() {
    return (
        <article className="max-w-xl">
            <p className="text-orange-500 text-[10px] font-black tracking-[0.3em] mb-4">INTRODUCTION</p>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-[1.1]">
                I'm a Creative Developer & <br /> UI/UX Design Expert
            </h3>

            <ul className="flex space-x-4 text-xs text-gray-400 mb-8 font-semibold">
                <li>24 years</li>
                <li className="text-gray-700">/</li>
                <li>Robert Smith</li>
                <li className="text-gray-700">/</li>
                <li>UK London</li>
            </ul>

            <p className="text-gray-500 leading-relaxed mb-10 text-sm">Prolific, full stack web developer with a passion for metrics and beating former "best-yets". Prototyped 25 new product features per year for Flexor, Inc. Decreased rework by 22% and costs by 15%. Consistently receive high user experience scores for all web development projects.</p>

            <footer className="actions">
                <a href="#" download className="inline-flex items-center space-x-3 bg-orange-500 hover:bg-orange-400 text-black font-bold py-4 px-8 rounded-full transition-transform active:scale-95 shadow-xl shadow-orange-500/10">
                    <span>Download CV</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                </a>
            </footer>
        </article>
    );
}
