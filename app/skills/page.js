'use client';
import React, { useEffect, useState } from 'react';
import { Data } from '../data/db';

export default function ResumeSection() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="relative mb-8">
        <h2>Skills</h2>
      </div>

      <div>
        {Data.skills.map((skill, idx) => (
          <div key={idx} className="mb-8 last:mb-0">
            <div className="flex justify-between items-center mb-2.5">
              <span className="text-[#E3E3E3] font-medium text-base md:text-lg lg:text-xl xl:text-2xl">
                {skill.name}
              </span>
              <span className="text-gradient">
                {skill.percentage}%
              </span>
            </div>

            <div className="w-full h-1.5  sm:h-2 md:h-3 lg:h-4 bg-primary/25 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-[2000ms] ease-in-out"
                style={{
                  width: animated ? `${skill.percentage}%` : '0%',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
