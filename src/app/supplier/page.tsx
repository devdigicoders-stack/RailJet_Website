"use client";

import React, { useState } from "react";
import { 
  Building2, 
  Train, 
  ShieldCheck, 
  CheckCircle2, 
  Send, 
  Compass, 
  FileCheck, 
  Award,
} from "lucide-react";
import confetti from "canvas-confetti";
import { COMPANY_DETAILS } from "@/data/companyData";

export default function SupplierPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    gstin: "",
    materialCategory: "Raw Steel & Forgings",
    annualCapacity: "",
    rdsoVendorStatus: "Approved Vendor",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
    });
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        gstin: "",
        materialCategory: "Raw Steel & Forgings",
        annualCapacity: "",
        rdsoVendorStatus: "Approved Vendor",
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
            <Building2 className="w-4 h-4 text-[#EA580C]" />
            Supplier & Indian Railways Client Ecosystem
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-['Outfit']">
            Supplier Network & Clients
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Partnering with Indian Railways across major zonal networks and collaborating with quality raw material suppliers and technology providers.
          </p>
        </div>
      </section>

      {/* 2. Primary Marketing Partner & Global Tech Partner Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#24282C] via-[#191C1E] to-[#111417] text-white rounded-3xl p-8 sm:p-10 border-2 border-[#EA580C]/40 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EA580C]/20 border border-[#EA580C]/40 text-xs font-bold text-[#FB923C] uppercase tracking-wider">
                <Award className="w-4 h-4 text-[#EA580C]" />
                Primary Marketing & Supply Partner (Mkt By)
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-['Outfit']">
                Rudra Rail Services
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                <strong className="text-white">Rudra Rail Services</strong> is the authorized marketing, supply, and procurement partner for RailJet products across Indian Railways. Handling official tenders, divisional supply, and field support for high-precision railway measurement instruments.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="bg-white/5 p-3.5 rounded-2xl border border-white/10 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Marketing & Supply Office</span>
                  <p className="font-semibold text-slate-200 leading-snug">
                    1119/05, Amarsanda, Tehsil Fatehpur, Kursi Road, Barabanki (U.P.)
                  </p>
                </div>
                <div className="bg-white/5 p-3.5 rounded-2xl border border-white/10 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Precision Manufacturing (Mfg By)</span>
                  <p className="font-semibold text-[#FB923C] leading-snug">
                    RAILJET (Tokyo, Japan) <br />
                    <span className="text-slate-300 text-[11px]">2-chome, Chiyoda-ku, Tokyo 101-0048</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/15 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Authentic Spec Plate</span>
                <span className="text-[11px] font-bold bg-[#EA580C] text-white px-2.5 py-0.5 rounded uppercase">Made in Japan</span>
              </div>
              <div className="font-mono text-xs space-y-2 text-slate-200 bg-black/40 p-4 rounded-xl border border-white/10">
                <p className="font-bold text-white text-sm">CLAMP EARTH RESISTANCE TESTER</p>
                <p className="text-[#FB923C] font-bold">MODEL NO : R1+ / XCRK272</p>
                <div className="border-t border-white/10 pt-2 space-y-1 text-[11px]">
                  <p><span className="text-slate-400">Mkt By :</span> RUDRA RAIL SERVICES</p>
                  <p className="text-slate-300">1119/05, Amarsanda, Tehsil Fatehpur, Kursi Road, Barabanki</p>
                  <p className="pt-1"><span className="text-slate-400">Mfg By :</span> RAILJET</p>
                  <p className="text-slate-300">2-chome, Chiyoda-ku, Tokyo 101-0048, Japan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Indian Railways Zonal Clients Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
            Zonal Footprint
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit']">
            Our Indian Railways Client Network
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            RailJet and Rudra Rail Services cater to key locomotive workshops, electric loco sheds (ELS), carriage repair sheds, and railway divisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_DETAILS.operatingZones.map((zone, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-orange-50 text-[#EA580C] flex items-center justify-center font-bold">
                  <Train className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-[#EA580C] bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
                  {zone.status}
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">
                  {zone.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 text-[#EA580C]" />
                  Hub: {zone.hub}
                </p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                Regular supplier of precision earth clamp testers, digital multimeters, soil resistivity kits, and electrical instruments.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Vendor Onboarding Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
                Supplier Partnership
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 font-['Outfit']">
                Become a Registered RailJet Supplier
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                We are actively expanding our supplier base for premium raw materials, CNC machining services, forging ingots, polymers, and electrical components.
              </p>
            </div>

            <div className="space-y-3">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-start gap-3 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Quality Requirements</h4>
                  <p className="text-xs text-slate-500">ISO 9001:2015 certification and traceable material test certificates (MTC) required.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-start gap-3 shadow-sm">
                <FileCheck className="w-5 h-5 text-slate-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Fair Procurement Terms</h4>
                  <p className="text-xs text-slate-500">Transparent e-tendering, standardized payment terms, and long-term volume agreements.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-start gap-3 shadow-sm">
                <Award className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">₹1,000+ Cr Supply Scale</h4>
                  <p className="text-xs text-slate-500">Join a high-growth supply chain with continuous order pipelines across all railway zones.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div>
                <h3 className="text-xl font-bold font-['Outfit'] text-slate-900">
                  Vendor Onboarding Form
                </h3>
                <p className="text-xs text-slate-500">Submit your enterprise details for empanelment</p>
              </div>
              <span className="text-[11px] font-bold text-[#EA580C] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                Procurement Desk
              </span>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Supplier Application Submitted!</h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for applying. Our procurement team will review your credentials and contact you within 2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Company / Enterprise Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Apex Steel & Forgings Ltd."
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#EA580C] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Contact Person & Designation *</label>
                    <input
                      type="text"
                      required
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      placeholder="e.g. Rajesh Kumar (Director)"
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#EA580C] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Official Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vendor@company.com"
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#EA580C] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Phone / Mobile No. *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#EA580C] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">GSTIN Number</label>
                    <input
                      type="text"
                      value={formData.gstin}
                      onChange={(e) => setFormData({ ...formData, gstin: e.target.value })}
                      placeholder="22AAAAA0000A1Z5"
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#EA580C] focus:bg-white focus:outline-none uppercase"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Material Category</label>
                    <select
                      value={formData.materialCategory}
                      onChange={(e) => setFormData({ ...formData, materialCategory: e.target.value })}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#EA580C] focus:bg-white focus:outline-none"
                    >
                      <option>Raw Steel & Forgings</option>
                      <option>Spring Alloys (60Si7)</option>
                      <option>Polymer & Rubber Mouldings</option>
                      <option>FRP & Aluminium Honeycomb</option>
                      <option>Fasteners & Hardware</option>
                      <option>Electrical Switchgear & Enclosures</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Vendor Status</label>
                    <select
                      value={formData.rdsoVendorStatus}
                      onChange={(e) => setFormData({ ...formData, rdsoVendorStatus: e.target.value })}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#EA580C] focus:bg-white focus:outline-none"
                    >
                      <option>RDSO Approved Vendor</option>
                      <option>ISO 9001 Certified Supplier</option>
                      <option>New Applicant</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Capability Overview</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your manufacturing plant capacity and existing railway experience..."
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#EA580C] focus:bg-white focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-[#EA580C] hover:bg-[#D94E06] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Supplier Empanelment Form
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
