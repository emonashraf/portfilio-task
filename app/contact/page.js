'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <header className="mb-8">
        <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold">
          Contact
        </h2>
      </header>
        <form onSubmit={handleSubmit} className="space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-3">
              <label htmlFor="first-name" className="form-label">
                First name*
              </label>
              <input
                id="first-name"
                name="first-name"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label htmlFor="last-name" className="form-label">
                Last name*
              </label>
              <input
                id="last-name"
                name="last-name"
                type="text"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-3">
              <label htmlFor="email" className="form-label">
                Email Address*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <label htmlFor="message" className="form-label">
              Your Message*
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
            ></textarea>
          </div>

          {/* Button Area */}
          <footer className="flex justify-end">
            <Button 
              text="Send Message" 
              variant="primary" 
              className="w-full !font-normal !rounded-lg" 
            />
          </footer>
        </form>
    </section>
  );
}