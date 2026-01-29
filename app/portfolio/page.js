'use client';
import React, { useState } from 'react';
import { Data } from '../data/db';
import { motion, AnimatePresence } from 'framer-motion';
import { RiLink } from 'react-icons/ri';
import Image from 'next/image';

export default function PortfolioSection() {
  const [filter, setFilter] = useState('All');

  const allProjects = Data.projects;
  const categories = ['All', ...new Set(allProjects.map((p) => p.category))];

  const filteredProjects =
    filter === 'All'
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  return (
    <section className="min-h-screen pb-10">
      <div className="md-4 md:mb-6 xl:mb-8">
        <h2>Portfolio</h2>
      </div>
      <div className="flex flex-wrap items-center px-6 bg-[#0F1110] rounded-lg mb-4 md:mb-6 lg:mb-8 xl:mb-10 w-full shadow-[0_0_60px_rgba(255,255,255,0.05)] border border-white/5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className="relative px-1.5 sm:px-2 lg:px-3.5 xl:px-4.5 py-4 lg:py-5 xl:py-5.5 text-sm md:text-base transition-all duration-300 group focus:outline-none">
            <span
              className={`${
                filter === cat ? 'text-primary' : 'white hover:text-primary'
              } transition-colors duration-300`}>
              {cat}
            </span>
            {filter === cat && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
      <div className="columns-1 md:columns-2 gap-6 space-y-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="relative group overflow-hidden cursor-pointer">
              <div className="relative overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
              </div>

              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center p-8">
                <div className="absolute top-6 right-6 w-7 h-7 bg-black rounded-full grid place-items-center  translate-y-[-20px] group-hover:translate-y-0 transition-transform duration-500 shadow-[0_0_20px_rgba(255,255,255,0.6)]">
                  <RiLink size={16} className="text-white" />
                </div>

                <h4 className="text-xl font-bold mb-1 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  {project.title}
                </h4>

                <p className="text-[#AFAFAF]  translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
