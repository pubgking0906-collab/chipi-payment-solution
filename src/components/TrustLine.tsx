"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Shield, FileCheck, Globe } from "lucide-react";

export default function TrustLine() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: Building2, text: "Licensed Financial Institutions" },
    { icon: Shield, text: "Regulated Framework" },
    { icon: FileCheck, text: "Compliance Verified" },
    { icon: Globe, text: "Global Operations" },
  ];

  return (
    <section ref={ref} className="py-16 bg-gradient-to-r from-[var(--card-bg)] to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-lg md:text-xl font-medium text-[var(--foreground)] max-w-3xl mx-auto">
            CHIPI operates within a{" "}
            <span className="gradient-text font-bold">regulated framework</span> and
            processes all fiat transactions through{" "}
            <span className="gradient-text font-bold">licensed financial institutions</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center mb-3">
                <feature.icon className="text-white" size={24} />
              </div>
              <span className="text-sm font-medium text-[var(--muted)]">{feature.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
