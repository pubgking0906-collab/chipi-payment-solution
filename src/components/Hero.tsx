"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Play, Shield, Zap, Globe, Building2, CreditCard, TrendingUp } from "lucide-react";

// Animated counter hook
function useAnimatedCounter(targetValue: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(!startOnView);

  useEffect(() => {
    if (!hasStarted) return;
    
    let animationFrame: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(targetValue * easeOutQuart);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [targetValue, duration, hasStarted]);

  return { count, start: () => setHasStarted(true) };
}

const stats = [
  { value: 200, suffix: "+", label: "Countries Supported" },
  { value: 50, suffix: "M+", label: "Transactions Processed" },
  { value: 99.9, suffix: "%", label: "Uptime SLA" },
  { value: 24, suffix: "/7", label: "Support Available" },
];

const quickFeatures = [
  { icon: CreditCard, text: "IBAN Accounts" },
  { icon: Zap, text: "Instant Transfers" },
  { icon: Shield, text: "Swiss Regulated" },
  { icon: Globe, text: "Global Access" },
];

export default function Hero() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,102,255,0.15) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,212,170,0.15) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-300">Now MICA Compliant</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            The Complete
            <br />
            <span className="gradient-text">Crypto Banking</span>
            <br />
            Infrastructure
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            IBAN accounts, SEPA/SWIFT transfers, crypto wallets, and investment products.
            <br className="hidden md:block" />
            <span className="text-white/80">Swiss-regulated. Globally accessible.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              className="btn-primary group text-lg px-8 py-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>
            <motion.button
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors text-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Play size={16} fill="white" className="ml-0.5" />
              </div>
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Quick features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-20"
          >
            {quickFeatures.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-400">
                <feature.icon size={18} className="text-[var(--secondary)]" />
                <span className="text-sm">{feature.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
            {stats.map((stat, i) => (
              <StatItem key={i} stat={stat} inView={statsInView} delay={i * 0.1} />
            ))}
          </div>
        </motion.div>

        {/* Trusted by */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm mb-6">Trusted by leading financial institutions</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
            {["Fireblocks", "Bitgo", "Circle", "Chainalysis", "Sumsub"].map((name, i) => (
              <div key={i} className="text-gray-400 font-semibold text-lg">{name}</div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatItem({ stat, inView, delay }: { stat: typeof stats[0]; inView: boolean; delay: number }) {
  const { count, start } = useAnimatedCounter(stat.value, 2000, true);
  
  useEffect(() => {
    if (inView) start();
  }, [inView, start]);

  const displayValue = stat.suffix === "%" 
    ? count.toFixed(1) 
    : Math.round(count).toLocaleString();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-bold text-white mb-1 tabular-nums">
        {displayValue}
        <span className="gradient-text">{stat.suffix}</span>
      </div>
      <div className="text-gray-400 text-sm">{stat.label}</div>
    </motion.div>
  );
}
