"use client";

import { motion } from "framer-motion";
import { QrCode, Zap, Shield, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
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
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-2"
            >
              Pay with Fiat & Crypto.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">Instantly.</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[var(--muted)] mb-8 max-w-md mx-auto lg:mx-0"
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

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 mt-10 justify-center lg:justify-start text-sm text-[var(--muted)]"
            >
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                Regulated
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                Licensed Partners
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                Instant
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end lg:pr-4"
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
    </section>
  );
}
