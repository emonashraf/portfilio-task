'use client';
import React from 'react';
import { Data } from '../data/db';
import { motion } from 'framer-motion';
import Button from '../components/Button';

export default function PricingSection() {
  return (
    <section>
      <div className="mb-8">
        <h2>Pricing</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Data.pricing.map((item, idx) => {
          const isHighlighted = item.id === 1 || item.id === 3;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group bg-black py-12 overflow-hidden transition-all duration-500 hover:border-primary/50"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="inline-block px-4 lg:px-5 xl:px-6 py-1.5 sm:py-2 md:py-2.5 xl:py-3 rounded-tr-full rounded-br-full bg-gradient-to-r from-primary/30 to-secondary/30 mb-6">
                {item.plan}
              </div>

              <div className="px-8">
                <div className="flex items-baseline mb-4 md:mb-5 lg:mb-6 xl:mb-7.5">
                  <span className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl">${item.price}</span>
                  <span className="ml-2 font-medium">/ month</span>
                </div>

                {/* Feature List */}
                <ul className="px-4 m-0 py-6 space-y-4 mb-10 min-h-[220px] bg-white/15">
                  {item.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex text-sm ${feature.active ? 'text-white' : 'text-[#979797] line-through'}`}
                    >
                      {feature.name}
                    </li>
                  ))}
                </ul>
                <Button 
                  text="Get Started" 
                  href="#" 
                  variant={isHighlighted ? 'primary' : 'outline'}
                  className=" !rounded-lg !text-white"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}