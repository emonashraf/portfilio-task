
import Button from './components/Button';
import { RiDownload2Line } from 'react-icons/ri';

export default function Home() {
    return (
      <article className="max-w-xl relative z-3">
        <p className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-secondary font-bold">
          INTRODUCTION
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.1]">
          I'm a Creative Developer & UI/UX Design Expert
        </h1>

        <ul className="flex space-x-4 text-white mb-8 font-bold">
          <li>24 years</li>
          <li>/</li>
          <li>Robert Smith</li>
          <li>/</li>
          <li>UK London</li>
        </ul>

        <p className="text-[#C6C6C6] leading-relaxed mb-10 text-sm">
          Prolific, full stack web developer with a passion for metrics and
          beating former "best-yets. Prototyped 25 new product features per year
          for Flexor, Inc. Decreased rework by 22% and costs by 15%.
          Consistently receive high user experience scores for all web
          development projects, including a 55% increase for Flexor, Inc.
          Passionate about building world class web applications. One of my
          sites received a 2020 Webby for Best Navigation and Structure.
        </p>
        <Button text="Download CV" href="/img/Ashraf-Uddin-Resume.pdf" variant="primary" icon={<RiDownload2Line />} download={true} />
      </article>
    );
}
