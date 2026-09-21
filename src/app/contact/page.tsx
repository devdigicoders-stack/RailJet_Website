"use client";

import React, { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  ShieldCheck, 
  MessageSquare 
} from "lucide-react";
import confetti from "canvas-confetti";
import { COMPANY_DETAILS } from "@/data/companyData";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Product Quotation & Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Product Quotation & Inquiry",
        message: "",
      });
    }, 4000);
  };

  return (
    <div className="space-y-16 pb-24">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-[#191C1E] via-[#24282C] to-[#111417] text-white py-16 sm:py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#33373B] border border-[#EA580C]/30 text-xs sm:text-sm font-semibold text-[#FB923C]">
            <Mail className="w-4 h-4 text-[#EA580C]" />
            Tokyo Headquarters & Global Desk
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-['Outfit']">
            Contact RailJet Co., Ltd.
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Get in touch with our Tokyo corporate headquarters, precision engineering department, or global distribution desk.
          </p>
        </div>
      </section>

      {/* 2. Official Contact Cards & Interactive Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Official Registered Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="w-11 h-11 rounded-2xl bg-orange-50 text-[#EA580C] flex items-center justify-center font-bold">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-['Outfit'] text-slate-900">
                    Tokyo Corporate Headquarters
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">
                    Chiyoda-ku, Tokyo, Japan (日本製)
                  </span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-orange-50 text-[#EA580C] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Official Head Office Address (Mfg By)
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                    2-chome, Chiyoda-ku, Tokyo 101-0048, Japan <br />
                    <span className="text-slate-500 font-normal">〒101-0048 東京都千代田区2丁目</span>
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5 border-t border-slate-100 pt-4">
                <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Global Direct Line
                  </span>
                  <p className="text-sm font-bold text-slate-900">
                    <a href={`tel:${COMPANY_DETAILS.phone}`} className="hover:text-[#EA580C] transition-colors">
                      {COMPANY_DETAILS.phone}
                    </a>
                  </p>
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start gap-3.5 border-t border-slate-100 pt-4">
                <div className="w-9 h-9 rounded-xl bg-orange-50 text-[#EA580C] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Official Email Addresses
                  </span>
                  <div className="space-y-1 text-xs sm:text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-700 w-14">SALES:</span>
                      <a href="mailto:sales@railjet-global.jp" className="text-[#EA580C] hover:underline font-semibold">
                        sales@railjet-global.jp
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-700 w-14">INFO:</span>
                      <a href="mailto:info@railjet-global.jp" className="text-slate-700 hover:underline">
                        info@railjet-global.jp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Marketing & Manufacturing Partners Box */}
              <div className="border-t border-slate-100 pt-4 space-y-3">
                <div className="p-3.5 rounded-2xl bg-slate-900 text-white space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FB923C]">
                      Manufactured By (Mfg By)
                    </span>
                    <span className="text-[10px] bg-[#EA580C] px-2 py-0.5 rounded font-bold">Made in Japan</span>
                  </div>
                  <p className="text-xs font-bold text-white">RAILJET (レールジェット株式会社)</p>
                  <p className="text-[11px] text-slate-300">2-chome, Chiyoda-ku, Tokyo 101-0048, Japan</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-orange-50/70 border border-orange-200/80 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#EA580C]">
                    Authorized Marketing Partner (Mkt By)
                  </span>
                  <p className="text-xs font-bold text-slate-900">RUDRA RAIL SERVICES</p>
                  <p className="text-[11px] text-slate-600">Global Transit & Railway Procurement Network</p>
                </div>
              </div>

              {/* Website & Working Hours */}
              <div className="border-t border-slate-100 pt-4 grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-600">
                  <Globe className="w-4 h-4 text-[#EA580C]" />
                  <span className="font-semibold truncate">railjetpvtltd.com</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Clock className="w-4 h-4 text-[#EA580C]" />
                  <span className="font-medium">JST: 09:00 - 18:00</span>
                </div>
              </div>
            </div>

            {/* Quality & Standards Badge */}
            <div className="bg-[#191C1E] p-6 rounded-3xl text-white space-y-2 border border-white/10 shadow-md">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FB923C]">
                <ShieldCheck className="w-4 h-4 text-[#EA580C]" />
                Japanese Quality Standards & Compliance
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                All testing devices and instruments are calibrated according to JIS C 1302 and IEC 61010-1 international precision standards.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact & Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-md">
            <div className="pb-4 border-b border-slate-100 mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold font-['Outfit'] text-slate-900">
                  Send Us an Inquiry
                </h3>
                <p className="text-xs text-slate-500">
                  Our railway technical experts will respond promptly.
                </p>
              </div>
              <MessageSquare className="w-6 h-6 text-[#EA580C]" />
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-orange-100 text-[#EA580C] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 font-['Outfit']">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out to RailJet Pvt. Ltd. A copy of your inquiry has been forwarded to our sales desk.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Verma"
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#EA580C] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@company.com"
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#EA580C] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+81 3-5829-9180"
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#EA580C] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Inquiry Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#EA580C] focus:bg-white focus:outline-none"
                    >
                      <option>Product Quotation & Inquiry</option>
                      <option>Rolling Stock & Bogie Spares</option>
                      <option>Vendor & Supplier Partnership</option>
                      <option>Tender & Institutional RFQ</option>
                      <option>Other Support</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Your Message / Specifications *</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about required railway products, quantities, drawings, or general questions..."
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#EA580C] focus:bg-white focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-[#EA580C] hover:bg-[#D94E06] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Official Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
