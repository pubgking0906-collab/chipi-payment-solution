"use client";

import { motion } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  MessageCircle,
  ArrowUpRight,
  Globe,
  Send
} from "lucide-react";

const footerLinks = {
  services: [
    { name: "QR Payments", href: "#services" },
    { name: "Crypto-to-Fiat", href: "#services" },
    { name: "Business Solutions", href: "#services" },
    { name: "Dedicated Wallets", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Compliance", href: "#compliance" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
  ],
  legal: [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "AML Policy", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="container-custom py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-3">
                Ready to Get Started?
              </h3>
              <p className="text-gray-400">
                Join thousands of users paying with crypto worldwide
              </p>
            </div>
            <motion.button
              className="btn-primary whitespace-nowrap"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Open Account
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-2xl font-bold">CHIPI</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Seamless crypto payments through a simple QR-based experience. 
              Pay instantly, convert to fiat, all within a regulated framework.
            </p>
            <div className="flex gap-4">
              {[Globe, Send, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} CHIPI. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <span>Services subject to regulatory availability</span>
              <span>•</span>
              <span>Compliance checks apply to all users</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
