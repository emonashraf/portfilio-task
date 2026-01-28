'use client';
import React from 'react';
import { Data } from '../data/db';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogSection() {
  const blogs = Data.blogs;

  return (
    <section className="min-h-screen pb-20">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Blog</h2>
      </div>
      <div className="columns-1 md:columns-2 gap-8 space-y-8">
        {blogs.map((blog, idx) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="break-inside-avoid group cursor-pointer">
            {/* Image Container */}
            <div className="relative overflow-hidden">
              <Link href={blog.link}>
                <Image
                  src={blog.img}
                  alt={blog.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
            </div>
            <div className="bg-black p-6 transition-colors duration-300">
              <div className="flex items-center space-x-2 text-xs text-[#747474] mb-3">
                <span>{blog.category}</span>
                <span>|</span>
                <span>{blog.date}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-4  group-hover:text-primary transition-colors duration-300">
                <Link href={blog.link}>{blog.title}</Link>
              </h3>
              <p className="text-[#979797] text-sm leading-relaxed mb-6">
                {blog.desc}
              </p>
              <div className="flex items-center text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                <span className="w-6 h-[1px] bg-primary mr-2"></span>
                <span>Posted By {blog.author}</span>
                <span className="w-6 h-[1px] bg-primary ml-2"></span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
