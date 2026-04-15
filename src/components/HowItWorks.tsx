"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  QrCode, 
  Wallet, 
  CheckCircle2, 
  Store,
  ArrowDownToLine,
  FileText,
  Search,
  Repeat,
  Building2
} from "lucide-react";

const cryptoPaymentSteps = [
  {
    icon: QrCode,
    number: "01",
    title: "Scan QR Code",
    description: "Spot CHIPI signage or QR at a supported venue and scan with your device",
  },
  {
    icon: Wallet,
    number: "02",
    title: "Confirm Payment",
    description: "Confirm the payment via your preferred crypto wallet",
  },
  {
    icon: CheckCircle2,
    number: "03",
    title: "Instant Processing",
    description: "Transaction is processed instantly on the blockchain",
  },
  {
    icon: Store,
    number: "04",
    title: "Merchant Confirmation",
    description: "Merchant receives instant confirmation and you're done!",
  },
];

const cryptoToFiatSteps = [
  {
    icon: ArrowDownToLine,
    number: "01",
    title: "Deposit Crypto",
    description: "Send your digital assets to your dedicated CHIPI wallet",
  },
  {
    icon: Building2,
    number: "02",
    title: "Select Destination",
    description: "Choose payout to your verified bank account or approved beneficiary",
  },
  {
    icon: FileText,
    number: "03",
    title: "Upload Documents",
    description: "Provide required documentation (invoice/agreement when applicable)",
  },
  {
    icon: Search,
    number: "04",
    title: "Compliance Review",
    description: "Our team reviews the transaction for regulatory compliance",
  },
  {
    icon: Repeat,
    number: "05",
    title: "Conversion",
    description: "Digital assets are converted to fiat currency at market rates",
  },
  {
    icon: CheckCircle2,
    number: "06",
    title: "Bank Transfer",
    description: "Funds transferred via licensed financial partner to destination account",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"payment" | "payout">("payment");

  const activeSteps = activeTab === "payment" ? cryptoPaymentSteps : cryptoToFiatSteps;

  return (
    <section ref={ref} id="how-it-works" className="section-padding bg-[var(--card-bg)] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--primary)] rounded-full filter blur-[150px] opacity-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--secondary)] rounded-full filter blur-[150px] opacity-10" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[var(--primary)] font-semibold text-sm uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="section-title mt-3">
            Simple <span className="gradient-text">Process</span>
          </h2>
          <p className="section-subtitle">
            Whether paying with crypto or converting to fiat, the process is straightforward
          </p>
        </motion.div>

        {/* Tab Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white rounded-2xl p-2 shadow-lg">
            <button
              onClick={() => setActiveTab("payment")}
              className={`px-8 py-4 rounded-xl font-semibold transition-all ${
                activeTab === "payment"
                  ? "bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white shadow-md"
                  : "text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              Crypto Payment Flow
            </button>
            <button
              onClick={() => setActiveTab("payout")}
              className={`px-8 py-4 rounded-xl font-semibold transition-all ${
                activeTab === "payout"
                  ? "bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white shadow-md"
                  : "text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              Crypto-to-Fiat Flow
            </button>
          </div>
        </motion.div>

        {/* Steps Grid */}
        <div className={`grid gap-6 ${activeTab === "payment" ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
          {activeSteps.map((step, i) => (
            <motion.div
              key={`${activeTab}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {i < activeSteps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[calc(100%-20px)] h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-30" />
              )}

              <div className="card text-center relative z-10 h-full">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center">
                      <step.icon className="text-white" size={32} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                      <span className="text-sm font-bold gradient-text">{step.number}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--muted)]">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
