"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Lock, Eye, KeyRound, FileCheck, Building2 } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Swiss Regulated",
    description: "Operating under Swiss financial regulations with full compliance",
  },
  {
    icon: Lock,
    title: "Cold Wallet Storage",
    description: "Assets secured in offline cold storage with multi-sig protection",
  },
  {
    icon: KeyRound,
    title: "Multi-Signature",
    description: "Multiple approvals required for high-value transactions",
  },
  {
    icon: FileCheck,
    title: "KYC/AML Verified",
    description: "Rigorous identity verification and anti-money laundering checks",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description: "Complete audit trail and real-time transaction monitoring",
  },
  {
    icon: Building2,
    title: "Licensed Partners",
    description: "Fiat operations through regulated financial institutions",
  },
];

export default function Security() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 bg-slate-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Security & Compliance
          </h2>
          <p className="text-[var(--muted)] max-w-lg mx-auto">
            Bank-grade security with Swiss regulatory standards
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center flex-shrink-0">
                <badge.icon className="text-white" size={22} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{badge.title}</h3>
                <p className="text-[var(--muted)] text-sm">{badge.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
