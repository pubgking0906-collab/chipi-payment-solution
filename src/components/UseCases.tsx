"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Building2, Users, Briefcase, TrendingUp, Wallet, CreditCard, ArrowRight } from "lucide-react";

const useCases = [
  {
    id: "neobank",
    icon: Building2,
    title: "Neobank",
    subtitle: "For Consumers & SME",
    description: "Launch a fully-featured digital bank with IBAN accounts, cards, and payments. Perfect for fintechs looking to offer banking services.",
    features: ["Multi-currency IBANs", "Virtual & Physical Cards", "SEPA/SWIFT Payments", "Mobile & Web Apps"],
    image: "/use-case-neobank.png",
  },
  {
    id: "crypto-bank",
    icon: Wallet,
    title: "Crypto Bank",
    subtitle: "Fiat + Crypto Combined",
    description: "Bridge traditional banking with cryptocurrency services. Offer your clients seamless fiat-to-crypto conversion and management.",
    features: ["Crypto Wallets", "Fiat/Crypto Exchange", "Custody Solutions", "DeFi Integration"],
    image: "/use-case-crypto.png",
  },
  {
    id: "institution",
    icon: Briefcase,
    title: "Institutional Platform",
    subtitle: "For Funds & Family Offices",
    description: "Professional-grade infrastructure for institutional investors. Managed portfolios, OTC desk, and prime services.",
    features: ["OTC Trading Desk", "Managed Certificates", "Prime Brokerage", "Custom Reporting"],
    image: "/use-case-institution.png",
  },
  {
    id: "hnw",
    icon: TrendingUp,
    title: "Wealth Management",
    subtitle: "For HNW Clients",
    description: "Premium services for high-net-worth individuals. Personalized banking with dedicated relationship managers.",
    features: ["Dedicated Account Manager", "Priority Support", "Custom Investment Products", "Concierge Services"],
    image: "/use-case-wealth.png",
  },
];

export default function UseCases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCase, setActiveCase] = useState(useCases[0]);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] text-sm font-medium mb-4">
              Use Cases
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Built for Your
            <span className="gradient-text"> Business Model</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-[var(--muted)]"
          >
            Whether you're launching a neobank, crypto platform, or serving institutional clients —
            CHIPI adapts to your needs.
          </motion.p>
        </div>

        {/* Use Cases Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid lg:grid-cols-2 gap-8 items-start"
        >
          {/* Left: Tabs */}
          <div className="space-y-4">
            {useCases.map((useCase, i) => (
              <motion.div
                key={useCase.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                onClick={() => setActiveCase(useCase)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeCase.id === useCase.id
                    ? "bg-white shadow-lg border-2 border-[var(--primary)]"
                    : "bg-white/50 border-2 border-transparent hover:bg-white hover:shadow-md"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    activeCase.id === useCase.id
                      ? "bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)]"
                      : "bg-slate-100"
                  }`}>
                    <useCase.icon className={activeCase.id === useCase.id ? "text-white" : "text-slate-600"} size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-semibold">{useCase.title}</h3>
                      {activeCase.id === useCase.id && (
                        <ArrowRight className="text-[var(--primary)]" size={20} />
                      )}
                    </div>
                    <p className="text-sm text-[var(--muted)]">{useCase.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Details */}
          <motion.div
            key={activeCase.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-10 text-white sticky top-24"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center">
                <activeCase.icon className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{activeCase.title}</h3>
                <p className="text-gray-400 text-sm">{activeCase.subtitle}</p>
              </div>
            </div>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {activeCase.description}
            </p>

            <div className="space-y-3 mb-8">
              {activeCase.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--secondary)]/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[var(--secondary)]" />
                  </div>
                  <span className="text-gray-200">{feature}</span>
                </div>
              ))}
            </div>

            <button className="btn-primary w-full justify-center">
              Learn More
              <ArrowRight className="ml-2" size={18} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
