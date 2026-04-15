"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Lock, Eye } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Regulated Framework",
    description: "Operating within global compliance standards",
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    description: "Encrypted transactions, protected data",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description: "Complete audit trail for every transaction",
  },
];

export default function Security() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 bg-slate-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-4"
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
