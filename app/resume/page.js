'use client';
import React from 'react';
import { RiBookLine, RiBriefcaseLine } from 'react-icons/ri';
import { Data } from '../data/db';
import Image from 'next/image';
import EducationIcon from '../../public/img/cap.png';

const ResumeItem = ({ item }) => (
  <div className="relative pl-7 pb-12 group last:pb-0">
    {/* Timeline Double Line Style */}
    <div className="absolute left-0 top-0 h-full w-[10px] flex justify-between">
      <div className="w-[2px] h-full bg-white/20 group-hover:bg-primary/40 transition-colors duration-500"></div>
      <div className="w-[2px] h-full bg-white/20 group-hover:bg-primary/40 transition-colors duration-500"></div>
      {/* Diamond Shape Node */}
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3.5 h-3.5 border-2 border-white/20 bg-body-bg rotate-45 group-hover:border-primary group-hover:bg-primary transition-all duration-300 z-10 shadow-sm"></div>
    </div>

    {/* Year Label */}
    <div className="mb-3">
      <span className="p-1.5 rounded-[6px] border border-white/20 text-sm font-bold">
        {item.year}
      </span>
    </div>
    <div className="bg-[#1a1a1a]/40 p-5 border border-white/10 rounded-lg hover:border-white/20 transition-all duration-500 shadow-xl">
      <h4 className="text-lg font-bold text-primary mb-1 ">{item.title}</h4>
      <p className="text-[12px] text-[#8F8F8F] mb-4">{item.subtitle}</p>
      <div className="h-[1px] w-full bg-[#8F8F8F] mb-4"></div>
      <p>
        {item.desc}
      </p>
    </div>
  </div>
);

export default function ResumeSection() {
  const resumeSections = [
    { title: 'Education', icon: <RiBookLine />, items: Data.education },
    { title: 'Work History', icon: <RiBriefcaseLine />, items: Data.work },
  ];

  return (
    <>
      {/* Background Section Header */}
      <div className="relative mb-8">
        <h2 className="text-4xl md:text-5xl font-bold">Resume</h2>
      </div>

      {/* Grid with Sticky Columns */}
      <div className="grid grid-cols-1 gap-16 items-start">
        {resumeSections.map((section, index) => (
          <div key={index} className="relative">
            <div className="flex items-center gap-[10px]">
              <div className="w-8 h-8 grid place-items-center bg-[#333] rounded-sm">
                <Image
                  src={EducationIcon}
                  alt="Daryl Smith Profile"
                  className="max-w-[22px]"
                />
              </div>
              <h3 className="text-2xl font-bold  tracking-widest">
                {section.title}
              </h3>
            </div>
            <div className="flex flex-col pt-4">
              {section.items?.map((item, idx) => (
                <ResumeItem key={idx} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
