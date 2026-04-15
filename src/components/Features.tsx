"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  QrCode, 
  Wallet, 
  ArrowRightLeft, 
  Shield, 
  Zap,
  Globe
} from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "QR Payments",
    description: "Scan and pay at approved merchants instantly",
  },
  {
    icon: Zap,
    title: "Instant Settlement",
    description: "Real-time confirmation, no waiting",
  },
  {
    icon: ArrowRightLeft,
    title: "Crypto to Fiat",
    description: "Convert and withdraw to your bank account",
  },
  {
    icon: Wallet,
    title: "Dedicated Wallet",
    description: "Your own address for full traceability",
  },
  {
    icon: Shield,
    title: "Fully Compliant",
    description: "KYC/AML verified, licensed partners",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Use at partner venues worldwide",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} id="features" className="py-24 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need
          </h2>
          <p className="text-[var(--muted)] max-w-lg mx-auto">
            One platform for crypto payments, conversions, and compliance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-slate-50 hover:bg-gradient-to-br hover:from-[var(--primary)]/5 hover:to-[var(--secondary)]/5 transition-all duration-300 border border-transparent hover:border-[var(--primary)]/20"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="text-white" size={22} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-[var(--muted)] text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
