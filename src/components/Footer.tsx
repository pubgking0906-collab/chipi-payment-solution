"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="bg-white">
      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to start?
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Join thousands of users paying with crypto worldwide
            </p>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-12 border-t border-gray-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold">CHIPI</span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <a href="#features" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                How It Works
              </a>
              <a href="#" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                Compliance
              </a>
              <a href="#" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                Terms
              </a>
              <a href="#" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                Privacy
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--muted)]">
            <span>© {new Date().getFullYear()} CHIPI. All rights reserved. Built by Joni</span>
            <span>CHIPI is a fintech platform, not a bank. Services via licensed partners.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
