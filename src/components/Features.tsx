"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  CreditCard, 
  Wallet, 
  ArrowRightLeft, 
  Shield, 
  Globe,
  Building,
  TrendingUp,
  Users,
  Lock,
  Banknote,
  PiggyBank,
  BadgeCheck
} from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "IBAN Accounts",
    description: "Personal & business accounts with dedicated IBAN for seamless banking",
  },
  {
    icon: ArrowRightLeft,
    title: "SEPA & SWIFT",
    description: "International transfers to 200+ countries via SEPA and SWIFT networks",
  },
  {
    icon: Wallet,
    title: "Crypto Wallet",
    description: "Self-custody wallet with full control over your private keys",
  },
  {
    icon: Banknote,
    title: "Crypto to Fiat",
    description: "Instant conversion between crypto and traditional currencies",
  },
  {
    icon: Building,
    title: "Business Accounts",
    description: "Dedicated accounts for companies, startups, and institutions",
  },
  {
    icon: TrendingUp,
    title: "Investment Products",
    description: "Managed certificates with Swiss ISIN for professional investors",
  },
  {
    icon: Users,
    title: "HNW Services",
    description: "Premium support with dedicated account manager for high-net-worth clients",
  },
  {
    icon: Lock,
    title: "Multi-Sig Security",
    description: "Cold wallet storage and multi-signature protection for your assets",
  },
  {
    icon: Shield,
    title: "Fully Compliant",
    description: "Swiss-regulated with full KYC/AML compliance framework",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Operate worldwide with support for 200+ countries",
  },
  {
    icon: PiggyBank,
    title: "Asset Management",
    description: "Professional portfolio management for funds and family offices",
  },
  {
    icon: BadgeCheck,
    title: "Licensed Partners",
    description: "Fiat operations through regulated financial institutions",
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
            Complete Crypto Banking Platform
          </h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">
            Everything you need to bridge crypto and traditional finance — IBAN accounts, 
            international transfers, investments, and premium services for businesses and HNW clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
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
