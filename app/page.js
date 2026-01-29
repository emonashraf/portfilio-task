
import Button from './components/Button';
import { RiDownload2Line } from 'react-icons/ri';
import Image from 'next/image';
import heroImg from '../public/img/hero-img.png';
import Link from 'next/link';
import {
  RiHome8Line,
  RiUserLine,
  RiSuitcaseLine,
  RiPriceTag3Line,
  RiEditBoxLine,
  RiLayoutMasonryLine,
  RiMailAiLine,
  RiFacebookFill,
  RiLinkedinFill,
  RiPinterestFill,
  RiInstagramLine,
  RiTwitterXFill,
} from 'react-icons/ri';

export default function Home() {
    const socialLinks = [
      { id: 1, name: 'Facebook', url: '#', icon: <RiFacebookFill /> },
      { id: 2, name: 'LinkedIn', url: '#', icon: <RiLinkedinFill /> },
      { id: 3, name: 'Pinterest', url: '#', icon: <RiPinterestFill /> },
      { id: 4, name: 'Instagram', url: '#', icon: <RiInstagramLine /> },
      { id: 5, name: 'Twitter', url: '#', icon: <RiTwitterXFill /> },
    ];
    return (
      <div>
        <figure className=" flex-1 relative bg-[#0a0a0a] group lg:hidden mb-5">
          <div className="w-full h-full flex justify-center mx-auto">
            <Image
              src={heroImg}
              alt="Daryl Smith Profile"
              className="object-cover w-full max-w-[368px] "
              priority
            />
          </div>
          <figcaption className="w-full bg-black flex justify-center space-x-6 py-3.5 z-20">
            {socialLinks.map((social) => (
              <Link
                key={social.id}
                href={social.url}
                aria-label={social.name}
                className="w-8 h-8 bg-bg-1 grid place-items-center rounded-full hover:text-primary transition-colors text-xl border border-white/5">
                {social.icon}
              </Link>
            ))}
          </figcaption>
        </figure>
        <article className="max-w-xl relative z-3">
          <p className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-secondary font-bold mb-1">
            INTRODUCTION
          </p>
          <h1 className="mb-3 md:mb-4 lg:mb-5 xl:mb-6">I'm a Creative Developer & UI/UX Design Expert</h1>

          <ul className="flex flex-wrap gap-2 md:gap-3 lg:gap-4 text-white mb-3 md:mb-6 lg:mb-8 md:font-medium lg:font-bold">
            <li>24 years</li>
            <li>/</li>
            <li>Robert Smith</li>
            <li>/</li>
            <li>UK London</li>
          </ul>

          <p className="text-[#C6C6C6] leading-relaxed mb-10 text-sm">
            Prolific, full stack web developer with a passion for metrics and
            beating former "best-yets. Prototyped 25 new product features per
            year for Flexor, Inc. Decreased rework by 22% and costs by 15%.
            Consistently receive high user experience scores for all web
            development projects, including a 55% increase for Flexor, Inc.
            Passionate about building world class web applications. One of my
            sites received a 2020 Webby for Best Navigation and Structure.
          </p>
          <Button
            text="Download CV"
            href="/img/Ashraf-Uddin-Resume.pdf"
            variant="primary"
            icon={<RiDownload2Line />}
            download={true}
          />
        </article>
      </div>
    );
}
