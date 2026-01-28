'use client';
import React from 'react';
import { Data } from '../data/db';
import { motion } from 'framer-motion';

export default function PricingSection() {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-4xl md:text-5xl font-bold">Pricing</h2>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Data.pricing.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="relative group bg-black py-12 overflow-hidden transition-all duration-500 hover:border-primary/50">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>
            <div className="inline-block px-6 py-3 rounded-tr-full rounded-br-full bg-gradient-to-r from-primary/30 to-secondary/30  mb-6">
              {item.plan}
            </div>
            <div className="px-8">
              <div className="flex items-baseline mb-7.5">
                <span className="text-5xl">${item.price}</span>
                <span className="ml-2 font-medium">/ month</span>
              </div>
              {/* Feature List */}
              <ul className="px-4 py-6 space-y-4 mb-10 min-h-[220px] bg-[#121414]">
                {item.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-center text-sm ${feature.active ? 'text-gray-300' : 'text-gray-600 line-through'}`}>
                    <span
                      className={`mr-3 ${feature.active ? 'text-primary' : 'text-gray-600'}`}>
                      {item.icon}
                    </span>
                    {feature.name}
                  </li>
                ))}
              </ul>
              {/* Button */}
              <button
                className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-300 transform group-hover:scale-[1.02] ${item.buttonStyle}`}>
                Get Started
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
