import React from "react";
import Link from "next/link";
import { 
  Award, 
  ShieldCheck, 
  Target, 
  Eye, 
  Factory, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  MapPin,
  Cpu,
  Layers
} from "lucide-react";
import { COMPANY_DETAILS } from "@/data/companyData";
import GalleryShowcase from "@/components/GalleryShowcase";

export const metadata = {
  title: "About Us | RailJet Co., Ltd. - Japanese Precision Measurement",
  description: "Learn about RailJet Co., Ltd. (Tokyo, Japan), our ¥180+ Billion order scale, Tokyo precision testing instruments manufacturing, and mission for global transit networks.",
};

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-20">
      {/* 1. Page Header */}
      <section className="bg-gradient-to-b from-[#191C1E] via-[#24282C] to-[#111417] text-white py-16 sm:py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#33373B] border border-[#EA580C]/30 text-xs sm:text-sm font-semibold text-[#FB923C]">
            <Award className="w-4 h-4 text-[#EA580C]" />
            Tokyo Precision Engineering Heritage (日本製)
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-['Outfit']">
            About RailJet Co., Ltd.
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Delivering high-precision Japanese electrical testing instruments, earth ground resistance analyzers, and transit safety solutions worldwide.
          </p>
        </div>
      </section>

      {/* 2. ¥180 BILLION MILESTONE HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-gradient-to-br from-[#EA580C] via-[#F25A22] to-[#C2410C] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 translate-x-12 translate-y-12 pointer-events-none">
            <Award className="w-96 h-96" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/25 text-white text-xs font-bold uppercase tracking-wider">
                <TrendingUp className="w-4 h-4 text-white" />
                Global Order Scale & Deployment
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] leading-tight">
                Surpassing ¥180 Billion in Global Measurement Orders
              </h2>
              <blockquote className="text-orange-50 text-sm sm:text-base leading-relaxed bg-black/20 p-5 rounded-2xl border border-white/20">
                &ldquo;RailJet is honored to reach a major landmark of over ¥180 Billion in international procurement pipeline, demonstrating steadfast client confidence in Tokyo precision engineering, rugged longevity, and uncompromised measurement accuracy.&rdquo;
              </blockquote>
            </div>

            <div className="lg:col-span-4 bg-black/25 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center space-y-2">
              <div className="text-5xl font-black font-['Outfit'] text-white">
                ¥180B+
              </div>
              <div className="text-xs uppercase tracking-wider font-bold text-orange-200">
                International Order Pipeline
              </div>
              <p className="text-xs text-orange-100 pt-1">
                Validated by active deployments across global high-speed transit and EHV power grids.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO WE ARE & MISSION / VISION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
                Corporate Identity
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit']">
                Precision Japanese Engineering for Critical Power & Rail Infrastructure
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              RailJet Co., Ltd. (Tokyo, Japan) is an elite manufacturer specializing in advanced earth resistance clamp meters, soil resistivity systems, and digital instrumentation. Built with authentic Japanese hardware standards, our instruments serve high-speed train networks, power substations, and industrial manufacturing plants across Asia and globally.
            </p>

            <blockquote className="text-slate-800 bg-orange-50/60 p-5 rounded-2xl border-l-4 border-[#EA580C] text-sm leading-relaxed italic">
              &ldquo;Our Tokyo engineering team continues to push boundaries in noise-rejection digital filtering, non-contact loop resistance testing, and cloud-ready diagnostic tools for modern power grids.&rdquo;
            </blockquote>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">JIS C 1302 Compliance</h4>
                  <p className="text-xs text-slate-500">Japanese Industrial Standards certified.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Tokyo Calibration Lab</h4>
                  <p className="text-xs text-slate-500">100% individual multi-point factory calibration.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="space-y-6">
            <div className="m3-surface-card p-8 bg-white border border-slate-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#EA580C]">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">Our Mission</h3>
                  <span className="text-xs text-slate-500">Absolute Measurement Precision</span>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                To engineer ultra-reliable, zero-interference electrical diagnostic instruments that safeguard railway personnel, prevent power grid outages, and ensure total grounding integrity.
              </p>
            </div>

            <div className="m3-surface-card p-8 bg-white border border-slate-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#24282C]">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">Our Vision</h3>
                  <span className="text-xs text-slate-500">Next-Gen Smart Instrumentation</span>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                To set global standards in non-invasive electrical testing by merging Japanese micro-electronic craftsmanship with Bluetooth telematics and predictive maintenance technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MANUFACTURING & R&D INFRASTRUCTURE */}
      <section className="bg-slate-100/80 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C] bg-white px-3 py-1 rounded-full border border-slate-200">
              Tokyo R&D Facility
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit']">
              Japanese Precision Manufacturing
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Engineered and assembled under strict cleanroom conditions in Tokyo, Japan with automated sensor calibration and high-voltage dielectric isolation testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#EA580C] flex items-center justify-center font-bold">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">
                Precision Micro-Sensor Assembly
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Permalloy clamp cores and surface-mount microprocessor boards crafted with strict micro-tolerances for maximum magnetic flux linearity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">
                Environmental & Stress Testing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Temperature chamber cycles (-20°C to +60°C), IP-rated moisture sealing, and 2-meter drop-shock verification on all production batches.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#EA580C] flex items-center justify-center font-bold">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">
                Precision Calibration Lab
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Traceable primary calibration standards with automated report generation for IEC 61010-1 and JIS C 1302 quality certificates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MANUFACTURING & TESTING FACILITY GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryShowcase 
          title="Tokyo Manufacturing & Quality Control Gallery"
          subtitle="Explore the precision assembly processes, calibration chambers, and industrial field equipment of RailJet Co., Ltd."
          limit={8}
          showFilters={true}
        />
      </section>

      {/* 6. LOCATION & CONTACT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#EA580C] uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-[#EA580C]" />
              Tokyo Corporate Headquarters
            </div>
            <h3 className="text-2xl font-bold font-['Outfit'] text-slate-900">
              RailJet Headquarters (Tokyo, Japan)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              {COMPANY_DETAILS.address} <br />
              <span className="text-slate-400 font-medium">〒101-0048 東京都千代田区2丁目</span>
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white bg-[#24282C] hover:bg-[#191C1E] shadow-md text-sm transition-all whitespace-nowrap"
          >
            Contact Global Sales Desk
            <ArrowRight className="w-4 h-4 text-[#EA580C]" />
          </Link>
        </div>
      </section>
    </div>
  );
}
