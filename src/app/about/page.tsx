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

export const metadata = {
  title: "About Us | RailJet Pvt. Ltd. - Indian Railways Engineering",
  description: "Learn about RailJet Pvt. Ltd., our ₹1000+ Crore business milestone, manufacturing capabilities, leadership, and mission for Indian Railways.",
};

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-20">
      {/* 1. Page Header */}
      <section className="bg-gradient-to-b from-[#191C1E] via-[#24282C] to-[#111417] text-white py-16 sm:py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#33373B] border border-[#EA580C]/30 text-xs sm:text-sm font-semibold text-[#FB923C]">
            <Award className="w-4 h-4 text-[#EA580C]" />
            Company Profile & Heritage
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-['Outfit']">
            About RailJet Pvt. Ltd.
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Delivering precision engineering, high-durability rolling stock equipment, and quality excellence for Indian Railways nationwide.
          </p>
        </div>
      </section>

      {/* 2. ₹1000 CRORE MILESTONE HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-gradient-to-br from-[#EA580C] via-[#F25A22] to-[#C2410C] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 translate-x-12 translate-y-12 pointer-events-none">
            <Award className="w-96 h-96" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/25 text-white text-xs font-bold uppercase tracking-wider">
                <TrendingUp className="w-4 h-4 text-white" />
                Historic Business Milestone
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] leading-tight">
                On The Verge of Achieving ₹1,000 Crore In Business
              </h2>
              <blockquote className="text-orange-50 text-sm sm:text-base leading-relaxed bg-black/20 p-5 rounded-2xl border border-white/20">
                &ldquo;We are proud to share that Railjet is on the verge of achieving a significant milestone of ₹1000 Crore in business, reflecting our consistent growth, customer trust, and dedication to excellence. This achievement is not just a number—it represents our journey of hard work, strong partnerships, and a commitment to delivering value-driven solutions.&rdquo;
              </blockquote>
            </div>

            <div className="lg:col-span-4 bg-black/25 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center space-y-2">
              <div className="text-5xl font-black font-['Outfit'] text-white">
                ₹1,000+ Cr
              </div>
              <div className="text-xs uppercase tracking-wider font-bold text-orange-200">
                Business & Order Scale
              </div>
              <p className="text-xs text-orange-100 pt-1">
                Validated by sustained contracts across all major Indian Railway zones.
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
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit']">
                Pioneering Engineering For Modern Railway Networks
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              RailJet Pvt. Ltd. is an established engineering enterprise specialized in the design, development, and supply of mission-critical railway equipment. Based out of Lucknow and Barabanki, Uttar Pradesh, our manufacturing operations cater to high-speed passenger coaches, express trains, and heavy-haul freight networks.
            </p>

            <blockquote className="text-slate-800 bg-orange-50/60 p-5 rounded-2xl border-l-4 border-[#EA580C] text-sm leading-relaxed italic">
              &ldquo;Our team consists of skilled professionals who are passionate about technology and innovation. We continuously strive to upgrade our products and services to align with the evolving needs of the railway sector.&rdquo;
            </blockquote>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">RDSO Standards</h4>
                  <p className="text-xs text-slate-500">100% adherence to technical specifications.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">In-House Testing</h4>
                  <p className="text-xs text-slate-500">Ultrasonic, magnetic & load cycle testing.</p>
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
                  <span className="text-xs text-slate-500">Reliable Engineering At Scale</span>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                To deliver state-of-the-art railway components and rolling stock solutions that elevate rail safety, operational speed, and passenger comfort, while exceeding the highest standards of Indian Railways.
              </p>
            </div>

            <div className="m3-surface-card p-8 bg-white border border-slate-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#24282C]">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">Our Vision</h3>
                  <span className="text-xs text-slate-500">Future-Ready Rail Mobility</span>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                To become India’s most trusted multi-disciplinary railway manufacturing partner, setting global benchmarks in precision fabrication, material durability, and indigenous rail technological innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MANUFACTURING INFRASTRUCTURE */}
      <section className="bg-slate-100/80 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C] bg-white px-3 py-1 rounded-full border border-slate-200">
              Manufacturing Prowess
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit']">
              State-of-the-Art Infrastructure
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Strategically located in Barabanki / Lucknow industrial corridor with advanced CNC machines, heat treatment plants, and automated quality labs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#EA580C] flex items-center justify-center font-bold">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">
                CNC Machining & Forging Line
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Equipped with multi-axis CNC machines, heavy hydraulic presses, and automated forging units capable of micro-tolerance precision component fabrication.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">
                Heat Treatment & Surface Finish
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Continuous temperature-controlled quenching, tempering, shot-peening, and zinc-galvanizing lines that guarantee high cyclic fatigue endurance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#EA580C] flex items-center justify-center font-bold">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">
                Non-Destructive Testing (NDT) Lab
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Comprehensive quality inspection lab with Ultrasonic Testing (UT), Magnetic Particle Inspection (MPI), Spectrometry, and Hydrostatic testing rigs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LOCATION & CONTACT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#EA580C] uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-[#EA580C]" />
              Registered Corporate Facility
            </div>
            <h3 className="text-2xl font-bold font-['Outfit'] text-slate-900">
              Visit Our Lucknow / Barabanki Plant
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              {COMPANY_DETAILS.address}
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white bg-[#24282C] hover:bg-[#191C1E] shadow-md text-sm transition-all whitespace-nowrap"
          >
            Get In Touch With Us
            <ArrowRight className="w-4 h-4 text-[#EA580C]" />
          </Link>
        </div>
      </section>
    </div>
  );
}
