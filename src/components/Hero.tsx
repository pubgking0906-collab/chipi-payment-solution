"use client";

import { motion } from "framer-motion";
import { QrCode, Zap, Shield } from "lucide-react";

export default function Hero() {
  return (
    <>
      {/* Main Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,102,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-[4rem] font-bold leading-tight mb-2"
              >
                Pay with Fiat & Crypto.
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-5xl md:text-6xl lg:text-[5rem] font-bold mb-6"
              >
                <span className="gradient-text">Instantly.</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-[var(--muted)] mb-8 max-w-lg mx-auto lg:mx-0"
              >
                Scan. Pay. Done. QR-based crypto payments at approved merchants worldwide.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
                <motion.button
                  className="btn-secondary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </motion.div>

              {/* Scroll indicator - mobile only */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="lg:hidden mt-12 flex flex-col items-center text-[var(--muted)]"
              >
                <span className="text-xs mb-2">Scroll to explore</span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2"
                >
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right: Phone Mockup - Desktop only */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex relative justify-center lg:justify-end lg:-mr-4"
            >
              <PhoneMockup size="desktop" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile phone reveal section */}
      <section className="lg:hidden py-16 bg-gradient-to-b from-blue-50 to-white">
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center"
        >
          <PhoneMockup size="mobile" />
        </motion.div>
      </section>
    </>
  );
}

// Phone mockup component to avoid repetition
function PhoneMockup({ size }: { size: "desktop" | "mobile" }) {
  const isDesktop = size === "desktop";
  
  return (
    <div className="relative">
      <motion.div
        className={`${isDesktop ? 'w-[320px]' : 'w-[260px]'} bg-white rounded-[40px] shadow-2xl p-3 border border-gray-200`}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Phone screen */}
        <div className={`bg-gradient-to-br from-slate-900 to-slate-800 rounded-[32px] p-6 ${isDesktop ? 'min-h-[560px]' : 'min-h-[460px]'}`}>
          {/* Status bar */}
          <div className="flex justify-between items-center text-white/60 text-xs mb-8">
            <span>9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-2 bg-white/60 rounded-sm" />
            </div>
          </div>

          {/* App content */}
          <div className="text-center">
            <div className={`${isDesktop ? 'w-12 h-12' : 'w-10 h-10'} mx-auto mb-4 rounded-xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center`}>
              <span className={`text-white font-bold ${isDesktop ? 'text-xl' : 'text-lg'}`}>C</span>
            </div>
            <p className="text-white/60 text-sm mb-6">CHIPI Balance</p>
            <p className={`text-white font-bold mb-8 ${isDesktop ? 'text-3xl' : 'text-2xl'}`}>$4,285.50</p>

            {/* QR Code */}
            <div className="bg-white rounded-2xl p-4 mb-6 mx-auto w-fit">
              <QrCode size={isDesktop ? 100 : 80} className="text-slate-800" />
            </div>
            <p className="text-white/60 text-sm mb-6">Scan to pay</p>

            {/* Quick actions */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: "↓", label: "Deposit" },
                { icon: "↑", label: "Send" },
                { icon: "⇄", label: "Swap" },
              ].map((action, i) => (
                <div key={i} className="text-center">
                  <div className={`${isDesktop ? 'w-10 h-10' : 'w-9 h-9'} mx-auto mb-1 rounded-full bg-white/10 flex items-center justify-center text-white`}>
                    {action.icon}
                  </div>
                  <span className="text-white/60 text-xs">{action.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating badges */}
      <motion.div
        className={`absolute ${isDesktop ? '-right-4 top-20 px-4 py-2' : '-right-2 top-16 px-3 py-1.5'} bg-white rounded-xl shadow-lg flex items-center gap-2`}
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Zap className="text-green-500" size={isDesktop ? 16 : 14} />
        <span className={`font-medium ${isDesktop ? 'text-sm' : 'text-xs'}`}>Instant</span>
      </motion.div>

      <motion.div
        className={`absolute ${isDesktop ? '-left-4 bottom-32 px-4 py-2' : '-left-2 bottom-24 px-3 py-1.5'} bg-white rounded-xl shadow-lg flex items-center gap-2`}
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Shield className="text-blue-500" size={isDesktop ? 16 : 14} />
        <span className={`font-medium ${isDesktop ? 'text-sm' : 'text-xs'}`}>Secure</span>
      </motion.div>
    </div>
  );
}
