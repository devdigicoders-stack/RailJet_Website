import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  ArrowUpRight, 
  ShieldCheck, 
  Award,
  Clock
} from "lucide-react";
import { COMPANY_DETAILS } from "@/data/companyData";

export default function Footer() {
  return (
    <footer className="bg-[#191C1E] text-white pt-16 pb-8 border-t-4 border-[#EA580C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Company Profile with logo.png */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-44">
                <Image
                  src="/images/logo.png"
                  alt="RailJet Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              A premier railway engineering company delivering high-performance rolling stock components, bogie assemblies, track fasteners, and coach interiors across Indian Railways.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#24282C] border border-[#EA580C]/30 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#FB923C]">
              <Award className="w-4 h-4 text-[#EA580C]" />
              ₹1,000+ Crore Business Milestone
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Products Catalogue", href: "/products" },
                { name: "Supplier & Clients", href: "/supplier" },
                { name: "Contact & Support", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#EA580C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Indian Railways Zones */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
              Railway Client Zones
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2 bg-[#24282C] p-2.5 rounded-xl border border-white/5">
                <ShieldCheck className="w-4 h-4 text-[#EA580C] shrink-0" />
                <span>Northern Railways (NR) & NCR</span>
              </li>
              <li className="flex items-center gap-2 bg-[#24282C] p-2.5 rounded-xl border border-white/5">
                <ShieldCheck className="w-4 h-4 text-[#EA580C] shrink-0" />
                <span>Western Railways (WR) & Central</span>
              </li>
              <li className="flex items-center gap-2 bg-[#24282C] p-2.5 rounded-xl border border-white/5">
                <ShieldCheck className="w-4 h-4 text-[#EA580C] shrink-0" />
                <span>Eastern Railways (ER) & Southern</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Registered Office & Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
              Office & Contact
            </h3>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {COMPANY_DETAILS.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EA580C] shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.phone}`} className="hover:text-white transition-colors font-medium">
                  {COMPANY_DETAILS.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#EA580C] shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.emails.sales}`} className="hover:text-white transition-colors">
                  {COMPANY_DETAILS.emails.sales}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#EA580C] shrink-0" />
                <a href={COMPANY_DETAILS.website} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  www.railjetpvtltd.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} RailJet Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#EA580C]" />
              Mon - Sat: 9:00 AM - 6:30 PM
            </span>
            <span>|</span>
            <span className="text-[#FB923C] font-medium">ISO 9001:2015 & RDSO Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
