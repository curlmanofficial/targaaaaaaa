/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-targo-black font-rubik overflow-hidden selection:bg-targo-red selection:text-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-100"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260227_042027_c4b2f2ea-1c7c-4d6e-9e3d-81a78063703f.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Header Navigation */}
      <header className="relative z-20 flex items-center justify-between px-8 py-6 md:px-16">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {/* Abstract Logo Symbol */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <path d="M4 4H14L10 12H4V4Z" fill="currentColor" />
              <path d="M18 4H28V12H22L18 4Z" fill="currentColor" />
              <path d="M4 20H14L10 28H4V20Z" fill="currentColor" />
              <path d="M18 20H28V28H22L18 20Z" fill="currentColor" />
            </svg>
            <span className="ml-2 text-2xl font-bold uppercase tracking-tighter text-white">targo</span>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium text-white/80 transition-colors hover:text-white">Home</a>
          <a href="#" className="text-sm font-medium text-white/80 transition-colors hover:text-white">About</a>
          <a href="#" className="text-sm font-medium text-white/80 transition-colors hover:text-white">Contact Us</a>
        </nav>

        <button className="clip-targo bg-targo-red px-6 py-2 text-sm font-bold uppercase text-white transition-transform hover:scale-105 active:scale-95">
          Contact Us
        </button>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex h-[calc(100vh-88px)] flex-col justify-between px-8 py-12 md:px-16 md:py-16">
        {/* Hero Text Section (Upper Third) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-8 max-w-2xl md:mt-12"
        >
          <h1 className="text-[42px] font-bold uppercase leading-[0.95] tracking-[-4%] text-white md:text-[64px]">
            Swift and Simple <br /> Transport
          </h1>
          <button className="clip-targo mt-8 bg-targo-red px-10 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(238,63,44,0.3)] active:scale-95">
            Get Started
          </button>
        </motion.div>

        {/* Bottom Widget (Consultation Card) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="glass-targo shine-effect w-full max-w-sm rounded-sm p-6 md:p-8"
        >
          <h3 className="text-xs font-bold uppercase tracking-widest text-white/60">Logistics Solutions</h3>
          <h2 className="mt-2 text-xl font-bold text-white">Book a Free Consultation</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Expert advice for your global supply chain. Let's optimize your transport strategy together.
          </p>
          <button className="clip-targo mt-6 flex w-fit items-center gap-2 bg-white px-8 py-3 text-sm font-bold uppercase text-targo-black transition-all hover:bg-white/90 active:scale-95">
            <Phone size={16} className="fill-current" />
            Book a Call
          </button>
        </motion.div>
      </main>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-1/2 w-1/2 bg-gradient-to-tl from-targo-red/10 to-transparent blur-3xl" />
    </div>
  );
}
