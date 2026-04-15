"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  QrCode, 
  Wallet, 
  ArrowRightLeft, 
  Building2, 
  Shield, 
  Globe,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const services = [
  {
    icon: QrCode,
    title: "QR-Based Payments",
    description: "Pay with digital assets at approved merchants through a seamless QR-based flow. Scan, confirm, done.",
    features: ["Scan QR code at checkout", "Pay from crypto wallet", "Instant confirmation"],
  },
  {
    icon: Wallet,
    title: "Dedicated Wallets",
    description: "Each user is assigned a dedicated wallet address to ensure full transaction traceability and compliance.",
    features: ["Unique wallet address", "Full traceability", "Compliance ready"],
  },
  {
    icon: ArrowRightLeft,
    title: "Crypto-to-Fiat Payouts",
    description: "Convert digital assets into fiat currency with our regulated off-ramp solution.",
    features: ["Bank account payouts", "Licensed partners", "Compliance reviewed"],
  },
  {
    icon: Building2,
    title: "Business Solutions",
    description: "Accept crypto payments at your business with our merchant integration platform.",
    features: ["Easy integration", "Real-time settlement", "Multi-currency support"],
  },
  {
    icon: Shield,
    title: "Compliance Framework",
    description: "Full KYC/KYB verification, source of funds checks, and transaction monitoring.",
    features: ["AML compliant", "Risk-based approvals", "Documentation support"],
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Use CHIPI at partner venues and merchants worldwide with consistent experience.",
    features: ["Worldwide access", "Local compliance", "24/7 availability"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (services.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (services.length - 2)) % (services.length - 2));
  };

  return (
    <section ref={ref} id="services" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--card-bg)] to-transparent opacity-50" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--primary)] font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="section-title mt-3">
            Premium Payment <span className="gradient-text">Solutions</span>
          </h2>
          <p className="section-subtitle">
            Discover comprehensive crypto payment services tailored for modern financial needs
          </p>
        </motion.div>

        {/* Services Grid - Desktop */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-[var(--muted)] mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Services Carousel - Mobile */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {services.map((service, i) => (
                <div key={i} className="min-w-full">
                  <div className="card">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center mb-6">
                      <service.icon className="text-white" size={28} />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-[var(--muted)] mb-6">{service.description}</p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm">
                          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[var(--card-bg)] transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[var(--card-bg)] transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === i
                    ? "w-8 bg-[var(--primary)]"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
