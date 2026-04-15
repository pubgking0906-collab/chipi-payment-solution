"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { QrCode, Zap, Shield, CheckCircle } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Phone slides up as you scroll
  const phoneY = useTransform(scrollYProgress, [0, 0.3], [200, 0]);
  const phoneOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={sectionRef} className="relative min-h-[200vh] overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,102,255,0.15) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Sticky container for the hero content */}
      <div className="sticky top-0 min-h-screen flex items-center pt-16">
        <div className="container-custom relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text - Mobile: Full viewport centered */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left flex flex-col justify-center min-h-[calc(100vh-8rem)] lg:min-h-0"
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
                className="text-5xl md:text-6xl lg:text-[5rem] font-bold mb-4 lg:mb-6"
              >
                <span className="gradient-text">Instantly.</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg lg:text-xl text-[var(--muted)] mb-6 lg:mb-8 max-w-lg mx-auto lg:mx-0"
              >
                Scan. Pay. Done. QR-based crypto payments at approved merchants worldwide.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start"
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

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap items-center gap-4 lg:gap-8 mt-6 lg:mt-10 justify-center lg:justify-start text-sm lg:text-base text-[var(--muted)]"
              >
                <span className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-500" />
                  Regulated
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-500" />
                  Licensed Partners
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-500" />
                  Instant
                </span>
              </motion.div>

              {/* Scroll indicator - mobile only */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="lg:hidden mt-8 flex flex-col items-center text-[var(--muted)]"
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

            {/* Right: Phone Mockup - Hidden on mobile initially, appears on scroll */}
            <motion.div
              style={{ y: phoneY, opacity: phoneOpacity }}
              className="hidden lg:flex relative justify-center lg:justify-end lg:-mr-4"
            >
              {/* Phone frame */}
              <div className="relative">
                <motion.div
                  className="w-[280px] md:w-[320px] bg-white rounded-[40px] shadow-2xl p-3 border border-gray-200"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Phone screen */}
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[32px] p-6 min-h-[500px] md:min-h-[560px]">
                    {/* Status bar */}
                    <div className="flex justify-between items-center text-white/60 text-xs mb-8">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-white/60 rounded-sm" />
                      </div>
                    </div>

                    {/* App content */}
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center">
                        <span className="text-white font-bold text-xl">C</span>
                      </div>
                      <p className="text-white/60 text-sm mb-6">CHIPI Balance</p>
                      <p className="text-white text-3xl font-bold mb-8">$4,285.50</p>

                      {/* QR Code */}
                      <div className="bg-white rounded-2xl p-4 mb-6 mx-auto w-fit">
                        <QrCode size={100} className="text-slate-800" />
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
                            <div className="w-10 h-10 mx-auto mb-1 rounded-full bg-white/10 flex items-center justify-center text-white">
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
                  className="absolute -right-4 top-20 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Zap className="text-green-500" size={16} />
                  <span className="text-sm font-medium">Instant</span>
                </motion.div>

                <motion.div
                  className="absolute -left-4 bottom-32 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2"
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Shield className="text-blue-500" size={16} />
                  <span className="text-sm font-medium">Secure</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile phone reveal section */}
      <div className="lg:hidden relative z-10 -mt-32 pb-16">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center"
        >
          {/* Phone frame for mobile */}
          <div className="relative">
            <motion.div
              className="w-[260px] bg-white rounded-[36px] shadow-2xl p-2.5 border border-gray-200"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Phone screen */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[28px] p-5 min-h-[460px]">
                {/* Status bar */}
                <div className="flex justify-between items-center text-white/60 text-xs mb-6">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 bg-white/60 rounded-sm" />
                  </div>
                </div>

                {/* App content */}
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center">
                    <span className="text-white font-bold text-lg">C</span>
                  </div>
                  <p className="text-white/60 text-xs mb-4">CHIPI Balance</p>
                  <p className="text-white text-2xl font-bold mb-6">$4,285.50</p>

                  {/* QR Code */}
                  <div className="bg-white rounded-xl p-3 mb-4 mx-auto w-fit">
                    <QrCode size={80} className="text-slate-800" />
                  </div>
                  <p className="text-white/60 text-xs mb-5">Scan to pay</p>

                  {/* Quick actions */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { icon: "↓", label: "Deposit" },
                      { icon: "↑", label: "Send" },
                      { icon: "⇄", label: "Swap" },
                    ].map((action, i) => (
                      <div key={i} className="text-center">
                        <div className="w-9 h-9 mx-auto mb-1 rounded-full bg-white/10 flex items-center justify-center text-white text-sm">
                          {action.icon}
                        </div>
                        <span className="text-white/60 text-[10px]">{action.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating badges for mobile */}
            <motion.div
              className="absolute -right-2 top-16 bg-white rounded-lg shadow-lg px-3 py-1.5 flex items-center gap-1.5"
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Zap className="text-green-500" size={14} />
              <span className="text-xs font-medium">Instant</span>
            </motion.div>

            <motion.div
              className="absolute -left-2 bottom-24 bg-white rounded-lg shadow-lg px-3 py-1.5 flex items-center gap-1.5"
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Shield className="text-blue-500" size={14} />
              <span className="text-xs font-medium">Secure</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
