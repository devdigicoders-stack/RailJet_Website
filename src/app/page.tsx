import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Train, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Zap, 
  Activity, 
  PhoneCall, 
  Sparkles, 
  Compass,
  FileSpreadsheet,
  Gauge
} from "lucide-react";
import { COMPANY_DETAILS, PRODUCTS_LIST } from "@/data/companyData";

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO SECTION - Charcoal & Jet-Orange Dynamics */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#191C1E] via-[#24282C] to-[#111417] text-white pt-16 pb-24 lg:pt-24 lg:pb-32 border-b border-white/5">
        {/* Background Grid Pattern & Accents */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#EA580C_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#EA580C]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* M3 Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#33373B]/80 backdrop-blur-md border border-[#EA580C]/40 text-xs sm:text-sm font-bold text-[#FB923C] shadow-sm">
                <Sparkles className="w-4 h-4 text-[#EA580C]" />
                <span>Tokyo Precision Engineering | ¥180B+ Order Milestone</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] font-['Outfit']">
                Precision <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#EA580C]">
                  Railway Testing
                </span>{" "}
                & Earth Resistance Instruments
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                RailJet Co., Ltd. (Tokyo, Japan) delivers precision Earth Resistance Clamp Testers, Phase Volt-Ampere Meters, 1000A True RMS Multimeters, and Soil Resistivity measurement instruments built to strict Japanese quality and international IEC standards.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-[#EA580C] hover:bg-[#D94E06] shadow-lg shadow-orange-950/40 hover:shadow-xl transition-all active:scale-95"
                >
                  Explore 6 Products
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-[#33373B] hover:bg-[#3D4248] border border-white/15 backdrop-blur-md transition-all active:scale-95"
                >
                  <PhoneCall className="w-4 h-4 text-[#EA580C]" />
                  Contact Sales Desk
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#EA580C] shrink-0" />
                  <span className="text-xs text-slate-300 font-medium">JIS C 1302 & IEC Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base shrink-0">🇯🇵</span>
                  <span className="text-xs text-slate-300 font-medium">Made in Japan (日本製)</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <Award className="w-5 h-5 text-[#EA580C] shrink-0" />
                  <span className="text-xs text-slate-300 font-medium">Tokyo Calibration Certified</span>
                </div>
              </div>
            </div>

            {/* Right M3 Visual Card: Featured Instrument Preview */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md bg-[#24282C]/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#EA580C] animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FB923C]">
                      Featured Flagship Model
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">XCRK272 / ES3022</span>
                </div>

                <div className="relative h-44 bg-slate-950 rounded-2xl flex items-center justify-center p-3 border border-white/10 overflow-hidden">
                  <Image
                    src="/images/ClampEarthResistanceTeste.png"
                    alt="RailJet XCRK272 Earth Clamp Tester"
                    fill
                    className="object-contain p-2"
                  />
                  <div className="absolute bottom-2 right-2 bg-[#EA580C] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    0.010Ω - 1200Ω
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white font-['Outfit']">
                    RailJet Clamp Earth Resistance Tester
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Automatic interference detection, 4-digit black screen LCD, 300 sets memory, non-contact loop resistance test without auxiliary spikes.
                  </p>
                </div>

                <Link
                  href="/products"
                  className="block w-full py-3 text-center rounded-xl bg-[#EA580C] hover:bg-[#D94E06] text-white font-bold text-sm shadow transition-all"
                >
                  View All 6 Product Specifications →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COMPANY_DETAILS.stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                {stat.label}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#24282C] font-['Outfit'] mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-600 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORE INSTRUMENT CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#EA580C] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
            <Gauge className="w-3.5 h-3.5" />
            Product Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit']">
            Comprehensive Testing & Measurement Instruments
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Engineered from our technical manuals and catalogue for railway power grids, signaling departments, and maintenance depots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Gauge,
              title: "Earth Clamp Testers",
              desc: "Loop resistance from 0.010Ω to 1200Ω and leakage current testing up to 20A without opening ground down-conductors.",
              color: "bg-orange-50 text-[#EA580C] border-orange-200",
            },
            {
              icon: Activity,
              title: "Phase Volt-Ampere Meters",
              desc: "Double clamp meters with 0.0°~360.0° phase angle, active/reactive power (0~12kW/kvar), and power factor (-1~+1).",
              color: "bg-slate-100 text-slate-900 border-slate-300",
            },
            {
              icon: Zap,
              title: "1000A Digital Multimeters",
              desc: "1700V DC high voltage, 1000A True RMS, LowZ anti-ghost voltage, 60MΩ resistance, and inrush peak current capture.",
              color: "bg-orange-50 text-[#EA580C] border-orange-200",
            },
            {
              icon: Cpu,
              title: "Soil Resistivity Testers",
              desc: "Wenner 4-pole method soil resistivity calculation (0.00Ωm~9999kΩm) and 3/4-wire precision grounding grid verification.",
              color: "bg-slate-100 text-slate-900 border-slate-300",
            },
          ].map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="m3-surface-card p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${pillar.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EA580C] hover:text-[#C2410C] group"
                >
                  View full specifications
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. FEATURED 6 PRODUCTS GRID PREVIEW */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#EA580C] bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm mb-2">
                <FileSpreadsheet className="w-3.5 h-3.5" />
                6 Official Products from Catalog
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit']">
                Our 6 Official Testing Products
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white bg-[#24282C] hover:bg-[#191C1E] shadow-md transition-all self-start md:self-auto"
            >
              View Full Details & Specs
              <ArrowRight className="w-4 h-4 text-[#EA580C]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS_LIST.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                {/* Image Box */}
                <div className="relative h-56 bg-slate-950 flex items-center justify-center p-4 border-b border-slate-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-2 hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-3 left-3 bg-[#191C1E]/80 backdrop-blur-sm text-[#FB923C] text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/10 uppercase tracking-wider">
                    {product.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#EA580C] bg-orange-50 px-2 py-0.5 rounded border border-orange-100">
                      {product.model}
                    </span>
                    <span className="text-slate-500 font-mono text-[11px] truncate max-w-[130px]">
                      {product.sourceDoc.split("(")[0]}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 line-clamp-2 font-['Outfit']">
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-2 gap-1.5 pt-2">
                    {product.keyHighlights.slice(0, 2).map((hl, idx) => (
                      <div key={idx} className="bg-slate-50 border border-slate-100 p-1.5 rounded-lg text-[10px] font-medium text-slate-700 truncate">
                        ✓ {hl}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    IEC / ISO Certified
                  </span>
                  <Link
                    href="/products"
                    className="text-xs font-bold text-[#EA580C] hover:underline flex items-center gap-1"
                  >
                    View Specs →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLIENT SECTORS & SUPPLIER NETWORK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#191C1E] via-[#24282C] to-[#33373B] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-[#EA580C]/20 text-[#FB923C] px-3 py-1 rounded-full text-xs font-bold border border-[#EA580C]/30">
                <Compass className="w-3.5 h-3.5" />
                Multi-Sector Infrastructure Presence
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit']">
                Key Industry & Client Sectors
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                RailJet Pvt Ltd supplies high-precision testing instruments and electrical safety solutions across power substations, metro transit systems, rolling stock assembly units, and heavy industrial plants.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {COMPANY_DETAILS.clientSectors.slice(0, 6).map((sector, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10 text-xs">
                    <p className="font-bold text-white truncate">{sector.name}</p>
                    <p className="text-[11px] text-[#FB923C] truncate">{sector.hub}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl text-slate-900 shadow-lg space-y-4">
              <h3 className="text-xl font-bold font-['Outfit'] text-[#24282C]">
                Vendor & Procurement Desk
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Looking to request quotations for railway division tenders or register as an approved vendor? Connect with our team.
              </p>
              <div className="pt-2 flex flex-col gap-2.5">
                <Link
                  href="/supplier"
                  className="w-full text-center py-3 rounded-xl bg-[#EA580C] hover:bg-[#D94E06] text-white font-bold text-sm shadow transition-all"
                >
                  Vendor Onboarding & Network
                </Link>
                <Link
                  href="/contact"
                  className="w-full text-center py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all"
                >
                  Submit RFQ / Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#191C1E] text-white rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold font-['Outfit'] text-white">
              Need Direct Factory Quotation or Calibration Specs?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Connect with our Tokyo corporate headquarters or contact our global instrumentation distribution desk.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white bg-[#EA580C] hover:bg-[#D94E06] shadow-md text-sm transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              {COMPANY_DETAILS.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white bg-[#33373B] hover:bg-[#3D4248] border border-white/10 text-sm transition-all"
            >
              Contact Us Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
