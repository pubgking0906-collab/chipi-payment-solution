"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Layers, 
  Building2, 
  Wallet, 
  Gamepad2,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const rolePoints = [
  "CHIPI acts as a technology and payment orchestration layer",
  "CHIPI does not hold client funds",
  "CHIPI is not a bank",
  "All fiat settlements are executed via licensed financial institutions",
  "Each user is assigned a dedicated wallet address for full traceability",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Role of CHIPI */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[var(--primary)] font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="section-title mt-3">
              Role of <span className="gradient-text">CHIPI</span>
            </h2>
            <p className="text-lg text-[var(--muted)] mb-8">
              CHIPI bridges the gap between digital assets and traditional finance, 
              providing a seamless orchestration layer for crypto payments.
            </p>

            <div className="space-y-4">
              {rolePoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="text-green-600" size={14} />
                  </div>
                  <span className="text-[var(--foreground)]">{point}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="btn-primary mt-8 flex items-center gap-2"
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          {/* Right: Visual + Licensed Gaming */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Architecture Visual */}
            <div className="card !p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full filter blur-[80px] opacity-30" />
              
              <h3 className="text-xl font-bold mb-6">Technology Stack</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-[var(--card-bg)] rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center">
                    <Layers className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Payment Orchestration</div>
                    <div className="text-sm text-[var(--muted)]">Smart routing & processing</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[var(--card-bg)] rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center">
                    <Wallet className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Dedicated Wallets</div>
                    <div className="text-sm text-[var(--muted)]">Full transaction traceability</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[var(--card-bg)] rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center">
                    <Building2 className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Licensed Partners</div>
                    <div className="text-sm text-[var(--muted)]">Regulated fiat settlements</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Licensed Gaming Section */}
            <div className="card !p-6 border-2 border-[var(--primary)]/20 bg-gradient-to-br from-[var(--primary)]/5 to-transparent">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Gamepad2 className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Licensed Gaming Operators</h4>
                  <p className="text-sm text-[var(--muted)]">
                    CHIPI supports transactions with licensed and regulated gaming 
                    operators only, subject to jurisdictional compliance and enhanced 
                    due diligence.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
