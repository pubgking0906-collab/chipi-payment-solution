"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  ArrowRightLeft, 
  Building, 
  Users, 
  FileCheck,
  Search,
  Shield,
  CheckCircle2
} from "lucide-react";

const payoutFeatures = [
  {
    icon: Building,
    title: "Personal Bank Account",
    description: "Transfer to your own verified bank account",
  },
  {
    icon: Users,
    title: "Approved Beneficiaries",
    description: "Pay third parties for legitimate goods or services only",
  },
  {
    icon: FileCheck,
    title: "Documentation Required",
    description: "Supported by invoice or agreement when applicable",
  },
  {
    icon: Search,
    title: "Compliance Review",
    description: "Subject to thorough compliance review process",
  },
  {
    icon: Shield,
    title: "Licensed Partners",
    description: "Executed via licensed financial institutions",
  },
  {
    icon: CheckCircle2,
    title: "Full Traceability",
    description: "Complete audit trail for all transactions",
  },
];

export default function Payouts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[var(--primary)] font-semibold text-sm uppercase tracking-wider">
              Off-Ramp Solution
            </span>
            <h2 className="section-title mt-3">
              Crypto-to-Fiat <span className="gradient-text">Payouts</span>
            </h2>
            <p className="text-lg text-[var(--muted)] mb-8">
              CHIPI provides a regulated off-ramp solution allowing users to convert 
              digital assets into fiat currency. Seamlessly move between crypto and 
              traditional finance with full compliance.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Building className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Personal Transfers</h4>
                  <p className="text-[var(--muted)]">
                    Initiate payouts to your own verified bank account
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Users className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Approved Third Parties</h4>
                  <p className="text-[var(--muted)]">
                    Pay approved beneficiaries for legitimate goods or services only
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="text-purple-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Fully Regulated</h4>
                  <p className="text-[var(--muted)]">
                    All payouts executed via licensed financial institutions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {payoutFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="card !p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="text-white" size={20} />
                </div>
                <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                <p className="text-xs text-[var(--muted)]">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
