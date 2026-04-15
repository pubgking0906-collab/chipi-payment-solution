"use client";

import { motion } from "framer-motion";
import { QrCode, Zap, Shield, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-bg">
      {/* Background blobs */}
      <div className="blob w-[600px] h-[600px] bg-[var(--primary)] top-0 right-0 opacity-20" />
      <div className="blob w-[400px] h-[400px] bg-[var(--secondary)] bottom-20 left-0 opacity-20" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="trust-badge mb-6"
            >
              <Shield size={16} />
              <span>Regulated & Compliant</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Pay with Crypto.
              <br />
              <span className="gradient-text">Instantly.</span>
              <br />
              Just Scan.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-[var(--muted)] mb-8 max-w-xl"
            >
              CHIPI enables seamless crypto payments through a simple QR-based
              experience. Users scan a QR code at approved merchants and
              complete transactions instantly using their crypto wallet.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-base font-medium text-[var(--foreground)] mb-8"
            >
              No cards. No delays. No complexity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                className="btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started <ArrowRight size={20} />
              </motion.button>
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-[var(--border)]"
            >
              {[
                { value: "Instant", label: "Transactions" },
                { value: "Global", label: "Coverage" },
                { value: "100%", label: "Compliant" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-[var(--muted)]">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: QR Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              {/* Main QR Container */}
              <motion.div
                className="w-72 h-72 md:w-96 md:h-96 rounded-3xl bg-white shadow-2xl flex items-center justify-center qr-pulse"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(0, 102, 255, 0.4)",
                    "0 0 0 30px rgba(0, 102, 255, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-2xl flex items-center justify-center">
                  <QrCode size={120} className="text-white md:w-40 md:h-40" />
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Zap className="text-green-600" size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold">Instant</div>
                  <div className="text-xs text-[var(--muted)]">Confirmation</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Shield className="text-blue-600" size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold">Secure</div>
                  <div className="text-xs text-[var(--muted)]">Encrypted</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
