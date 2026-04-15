"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Shield, 
  UserCheck, 
  Search, 
  Activity, 
  Scale,
  FileCheck,
  AlertTriangle,
  Lock
} from "lucide-react";

const complianceFeatures = [
  {
    icon: UserCheck,
    title: "KYC / KYB Verification",
    description: "Comprehensive identity verification for individuals and businesses",
  },
  {
    icon: Search,
    title: "Source of Funds Checks",
    description: "Thorough verification of fund origins",
  },
  {
    icon: Activity,
    title: "Transaction Monitoring",
    description: "Real-time monitoring of all transaction activity",
  },
  {
    icon: Scale,
    title: "Risk-Based Approvals",
    description: "Tiered approval process based on risk assessment",
  },
  {
    icon: FileCheck,
    title: "Documentation Support",
    description: "Required documentation for applicable transactions",
  },
  {
    icon: Lock,
    title: "Data Protection",
    description: "Enterprise-grade encryption and data security",
  },
];

export default function Compliance() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="compliance" className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
            <Shield size={16} className="text-[var(--secondary)]" />
            <span className="text-sm font-medium">Enterprise-Grade Security</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Compliance & Risk <span className="text-[var(--secondary)]">Framework</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            CHIPI operates under strict compliance standards aligned with global AML 
            requirements, ensuring safety and trust for all stakeholders.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {complianceFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* No P2P Policy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-2xl p-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Controlled Transaction Environment</h3>
              <p className="text-gray-300 mb-4">
                CHIPI does not facilitate unrestricted peer-to-peer (P2P) transfers. 
                All transactions are conducted only with:
              </p>
              <ul className="grid md:grid-cols-3 gap-4">
                {[
                  "Approved merchants",
                  "Verified bank accounts",
                  "Approved beneficiaries",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-amber-500/30 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-amber-500" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-400 mt-4">
                Each transaction must be linked to a legitimate economic activity.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
