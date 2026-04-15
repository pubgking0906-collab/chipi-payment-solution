"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  Products: [
    "IBAN Accounts",
    "Crypto Wallets",
    "Card Issuing",
    "SEPA Transfers",
    "SWIFT Payments",
    "Crypto Exchange",
  ],
  Solutions: [
    "Neobank",
    "Crypto Bank",
    "Institutional",
    "Wealth Management",
    "Payment Hub",
    "OTC Desk",
  ],
  Developers: [
    "API Documentation",
    "SDKs",
    "Webhooks",
    "Sandbox",
    "Status Page",
    "Changelog",
  ],
  Company: [
    "About Us",
    "Careers",
    "Press",
    "Blog",
    "Contact",
    "Partners",
  ],
  Legal: [
    "Terms of Service",
    "Privacy Policy",
    "Cookie Policy",
    "AML Policy",
    "Compliance",
  ],
};

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="bg-slate-950 text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="container-custom py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your
              <br />
              <span className="gradient-text">Financial Infrastructure?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join leading fintechs and institutions building on CHIPI. 
              Get started in minutes, scale to millions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="btn-primary text-lg px-8 py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Building
                <ArrowRight className="inline-block ml-2" size={20} />
              </motion.button>
              <motion.button
                className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Talk to Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Links Section */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo & Contact */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-2xl font-bold">CHIPI</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Complete crypto banking infrastructure for modern financial services.
            </p>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Zurich, Switzerland</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>hello@chipipay.co</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4 text-white">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} CHIPI. All rights reserved. Swiss-regulated financial infrastructure.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-sm text-gray-500">Built by Joni</span>
              <div className="flex items-center gap-4">
                {/* Social Icons */}
                {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-500 hover:text-white transition-colors text-sm"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
