"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, FileCheck, Users, Shield } from "lucide-react";

const capabilities = [
  "Crypto-to-fiat payouts",
  "Verified bank transfers",
  "Licensed gaming support",
  "Full compliance framework",
  "Dedicated wallet addresses",
  "Real-time monitoring",
];

export default function Business() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built for Businesses
            </h2>
            <p className="text-gray-400 mb-8">
              CHIPI provides the infrastructure for merchants and operators to accept 
              crypto payments with full regulatory compliance. Not a bank — a payment 
              orchestration layer.
            </p>

            <ul className="space-y-3 mb-8">
              {capabilities.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[var(--secondary)]/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[var(--secondary)]" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Sales
            </motion.button>
          </motion.div>

          {/* Right: Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Building2, title: "Licensed Partners", desc: "Fiat via regulated institutions" },
              { icon: FileCheck, title: "KYC/KYB Ready", desc: "Built-in compliance" },
              { icon: Users, title: "Approved Merchants", desc: "Controlled environment" },
              { icon: Shield, title: "AML Compliant", desc: "Transaction monitoring" },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <card.icon className="text-[var(--secondary)] mb-3" size={24} />
                <h4 className="font-semibold mb-1">{card.title}</h4>
                <p className="text-gray-400 text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
