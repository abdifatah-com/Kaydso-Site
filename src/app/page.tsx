"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from "framer-motion";
import {
  Droplets,
  Wheat,
  ShieldCheck,
  ThermometerSun,
  Warehouse,
  Clock,
  Database,
  Activity,
  Truck,
  MapPin,
  AlertTriangle,
  CheckCircle2,
  Download,
  FileText,
  ChevronRight,
  Menu,
  CloudRain,
  Sun,
  Sprout,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  ArrowRight,
  ExternalLink,
  Heart,
  Hand,
  Wrench,
  DollarSign,
  Send,
  X,
  Quote,
  Eye,
  Target,
} from "lucide-react";
import clsx from "clsx";

// --- Components mimicking separate files ---

// 1. Hero Section
const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const y3 = useTransform(scrollY, [0, 500], [0, 100]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);

  const [index, setIndex] = useState(0);
  const words = ["Predict.", "Prepare.", "Protect."];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#E6EEEF] px-6 pt-32 pb-20 sm:px-10 lg:px-16 flex flex-col items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(180,204,207,0.5),transparent_70%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8FB78F]/30 to-transparent" />
      </div>

      {/* Floating Icons (Parallax & Ambient) */}
      <motion.div
        style={{ y: y1 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] opacity-20 text-[#8FB78F]"
      >
        <Droplets size={64} />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-[10%] opacity-20 text-[#8FB78F]"
      >
        <Wheat size={80} />
      </motion.div>

      <motion.div
        style={{ y: y3 }}
        className="absolute top-40 right-[20%] opacity-15 text-slate-400"
      >
        <ShieldCheck size={56} />
      </motion.div>

      {/* New Extra Icons */}
      <motion.div
        style={{ y: useTransform(scrollY, [0, 500], [0, -50]) }}
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[5%] opacity-10 text-slate-500"
      >
        <CloudRain size={96} />
      </motion.div>

      <motion.div
        style={{ rotate }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 right-[5%] opacity-10 text-amber-500"
      >
        <Sun size={120} />
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 left-[2%] opacity-15 text-green-700"
      >
        <Sprout size={48} />
      </motion.div>

      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[35%] opacity-10 text-slate-400"
      >
        <Database size={40} />
      </motion.div>


      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-white/70 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8FB78F] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8FB78F]"></span>
          </span>
          System Operational • 48 Districts Monitored
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-bold leading-tight text-slate-900 flex flex-col items-center justify-center gap-4"
        >
          <span className="text-7xl sm:text-9xl tracking-tighter">Kaydso</span>
          <div className="relative h-[1.2em] overflow-hidden w-full text-4xl sm:text-6xl tracking-tight">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className={clsx(
                  "block absolute w-full left-0 text-[#8FB78F]"
                )}
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-xl leading-relaxed text-slate-600"
        >
          The government-first early warning system for drought, water scarcity, and food storage risk.
          See the invisible before it becomes a crisis.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 pt-4"
        >
          <button className="group relative flex items-center gap-2 rounded-full bg-[#8FB78F] px-8 py-4 text-lg font-semibold text-slate-900 shadow-lg shadow-[#8FB78F]/20 transition-all hover:scale-105 hover:shadow-xl active:scale-95">
            View Live Dashboard
            <ChevronRight className="transition-transform group-hover:translate-x-1" size={20} />
          </button>
          <button className="group flex items-center gap-2 rounded-full bg-white/80 px-8 py-4 text-lg font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200/50 transition-all hover:bg-white hover:text-slate-900 hover:ring-slate-300">
            Download System
            <Download className="transition-transform group-hover:-translate-y-1" size={20} />
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <div className="h-10 w-6 rounded-full border-2 border-slate-400/50 p-1 flex justify-center">
          <div className="w-1 h-3 bg-slate-400/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

// 2. Problem Section
// 2. About Us Section
const AboutUs = () => {
  const features = [
    {
      icon: ThermometerSun,
      title: "Predict & Prevent",
      desc: "Detecting drought signals, water scarcity, and food storage risks weeks before they escalate into crises.",
      bg: "bg-amber-100",
      text: "text-amber-700"
    },
    {
      icon: Hand,
      title: "Community Voice",
      desc: "Empowering villagers to report real-time needs, ensuring no community is invisible to the relief network.",
      bg: "bg-blue-100",
      text: "text-blue-700"
    },
    {
      icon: ShieldCheck,
      title: "Unified Action",
      desc: "Bridging the gap between government intelligence, NGO resources, and local leadership for rapid response.",
      bg: "bg-emerald-100",
      text: "text-emerald-700"
    }
  ];

  return (
    <section id="about" className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-gradient-to-b from-[#B4CCCF] via-white to-white">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            About Kaydso
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            Kaydso is an early warning and coordination platform that helps governments and NGOs respond to water scarcity and food storage risks before they become disasters.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/60 backdrop-blur-md border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.text} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        {/* Vision & Mission Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-start gap-4"
          >
            <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 text-[#8FB78F]">
              <Eye size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                A Somaliland free from the fear of water scarcity, where every community is resilient, informed, and prepared for future climate challenges.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-slate-900 p-8 rounded-3xl shadow-lg flex flex-col items-start gap-4 relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 p-8 opacity-10 text-white">
              <Target size={100} />
            </div>

            <div className="p-3 bg-white/10 rounded-xl border border-white/20 text-[#8FB78F] relative z-10">
              <Target size={32} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                To empower governments and communities with early warning intelligence, turning data into decisive action that saves lives and livelihoods.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// 3. How It Works
const HowItWorks = () => {
  const steps = [
    {
      icon: Database,
      title: "1. Collection",
      desc: "IoT sensors, satellite data, and USSD reports flow into Kaydso.",
    },
    {
      icon: Activity,
      title: "2. Analysis",
      desc: "AI models predict drought intensity and flag storage decay risks.",
    },
    {
      icon: Truck,
      title: "3. Action",
      desc: "Dashboards trigger relief convoys and alert local authorities.",
    },
  ];

  return (
    <section id="how" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Built for Speed</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">From signal to response in hours, not weeks.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-[#8FB78F]"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3 }}
              className="flex flex-col items-center text-center bg-white p-4"
            >
              <div className="w-24 h-24 rounded-full bg-[#E6EEEF] border-4 border-white shadow-xl flex items-center justify-center mb-6 z-10 relative">
                <step.icon size={32} className="text-slate-700" />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#8FB78F]"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1.2, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. Dashboard Demo
const DashboardDemo = () => {
  const [activeMarker, setActiveMarker] = useState<number | null>(null);

  // Simulated partial list of regions for the "map"
  const regions = [
    { id: 1, x: "20%", y: "30%", status: "stable", name: "North-West" },
    { id: 2, x: "50%", y: "40%", status: "warning", name: "Central Plains" },
    { id: 3, x: "70%", y: "60%", status: "critical", name: "Eastern Delta" },
    { id: 4, x: "30%", y: "70%", status: "stable", name: "South Valley" },
  ];

  return (
    <section id="demo" className="py-24 bg-[#E6EEEF] px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              What governments don't see, <br />
              <span className="text-[#8FB78F] decoration-clone">Kaydso reveals.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              A calm command view: map risks by district, monitor villages, and receive USSD
              reports without waiting for monthly summaries.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <div>
                  <h4 className="font-semibold text-slate-900">Critical Alerts</h4>
                  <p className="text-sm text-slate-500">Immediate coordination required</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <div>
                  <h4 className="font-semibold text-slate-900">Warning Zones</h4>
                  <p className="text-sm text-slate-500">Resource allocation needed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-2/3 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl aspect-[16/10] border border-slate-700"
          >
            {/* Fake Map Grid */}
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-8 gap-px bg-slate-800/50 pointer-events-none">
              {Array.from({ length: 96 }).map((_, i) => (
                <div key={i} className="bg-slate-900/40" />
              ))}
            </div>

            {/* Markers */}
            {regions.map((region) => (
              <motion.button
                key={region.id}
                className={clsx(
                  "absolute w-6 h-6 -ml-3 -mt-3 rounded-full border-2 border-white cursor-pointer z-10 flex items-center justify-center transition-transform hover:scale-125 focus:outline-none",
                  region.status === "critical" ? "bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.6)]" :
                    region.status === "warning" ? "bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.6)]" : "bg-[#8FB78F]"
                )}
                style={{ left: region.x, top: region.y }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.5 + region.id * 0.1 }}
                onClick={() => setActiveMarker(region.id)}
              >
                {region.status === "critical" && <span className="absolute animate-ping inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>}
              </motion.button>
            ))}

            {/* Pop-up Card for Critical Region */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute top-6 right-6 w-64 bg-white/95 backdrop-blur rounded-xl p-4 shadow-xl text-slate-900"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-bold text-sm">New Alert: Eastern Delta</h4>
                  <p className="text-xs text-slate-500">2 min ago via USSD</p>
                </div>
                <AlertTriangle size={16} className="text-red-500" />
              </div>
              <p className="text-xs font-medium mb-3">Report: "Community well #4 dry. 120 families affected."</p>
              <button className="w-full py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800">
                Dispatch Support
              </button>
            </motion.div>

            {/* Stats Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between gap-4">
              <div className="bg-slate-800/80 backdrop-blur rounded-xl p-3 flex-1 border border-slate-700">
                <p className="text-xs text-slate-400 uppercase">Population at Risk</p>
                <p className="text-xl font-bold text-white">12,450</p>
              </div>
              <div className="bg-slate-800/80 backdrop-blur rounded-xl p-3 flex-1 border border-slate-700">
                <p className="text-xs text-slate-400 uppercase">Status</p>
                <p className="text-xl font-bold text-amber-400">Elevated</p>
              </div>
              <div className="bg-slate-800/80 backdrop-blur rounded-xl p-3 flex-1 border border-slate-700 hidden sm:block">
                <p className="text-xs text-slate-400 uppercase">Active Teams</p>
                <p className="text-xl font-bold text-[#8FB78F]">8</p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

// 5. Charity Section
const CharitySection = () => {
  const [donated, setDonated] = useState(false);
  const donationGoal = 5000;
  const currentAmount = 3250;
  const percentage = Math.round((currentAmount / donationGoal) * 100);

  return (
    <section id="charity" className="py-24 bg-[#E6EEEF] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#8FB78F 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white mb-6 text-[#8FB78F] shadow-sm"
          >
            <Heart fill="currentColor" size={24} />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Action Beyond Data</h2>
          <p className="text-xl text-slate-600">
            Directly support vulnerable regions identified by the Kaydso system.
            Turn data into helping hands.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden group max-w-4xl mx-auto"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Hand size={180} className="text-[#8FB78F]" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={18} className="text-slate-400" />
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Garadag Village</span>
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <h3 className="text-3xl font-bold text-slate-900">Well Repair & Storage Support</h3>
                <span className="inline-block bg-amber-100 text-amber-900 w-fit text-xs font-bold px-3 py-1 rounded-full border border-amber-200">
                  Urgent Maintenance
                </span>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                Raising funds to repair critical wells supporting 3 communal food storage silos and 45 farming families in the region.
              </p>

              <div className="mb-6">
                <div className="flex justify-between text-sm font-bold mb-2">
                  <span className="text-slate-900">${currentAmount.toLocaleString()} raised</span>
                  <span className="text-slate-500">Goal: ${donationGoal.toLocaleString()}</span>
                </div>
                <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-[#8FB78F] rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]" />
                  </motion.div>
                </div>
                <div className="mt-2 text-right text-xs font-bold text-[#8FB78F]">{percentage}% Funded</div>
              </div>

              <button
                onClick={() => setDonated(true)}
                className="w-full md:w-auto px-8 py-4 bg-[#8FB78F] hover:bg-[#7fa37f] text-slate-900 font-bold rounded-xl transition-all shadow-lg shadow-[#8FB78F]/20 active:scale-95 flex items-center justify-center gap-2"
              >
                {donated ? (
                  <>
                    <CheckCircle2 size={20} />
                    Support Pledged!
                  </>
                ) : (
                  <>
                    <DollarSign size={20} />
                    Support This Area
                  </>
                )}
              </button>
              <p className="text-xs text-slate-400 mt-3">Safe & Secure NGO Transfer • Tax Deductible</p>
            </div>

            {/* Image Placeholder or Charity Graphic */}
            <div className="w-full md:w-1/3 aspect-square bg-[#E6EEEF] rounded-2xl flex items-center justify-center relative overflow-hidden">
              <Wheat size={80} className="text-slate-300" />
              <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-3 text-center">
                <p className="text-xs font-semibold text-slate-600">Target Impact</p>
                <p className="text-lg font-bold text-slate-900">45 Families</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// 6. Contact & Community Reporting Section
const ContactSection = () => {
  const [wellReported, setWellReported] = useState(false);

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Contact & Reporting</h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Have questions or need to report a critical issue?
              Kaydso connects local reports directly with decision makers.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#E6EEEF] rounded-xl text-[#000]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">General Inquiries</h4>
                  <p className="text-slate-600">info@kaydso.org</p>
                  <p className="text-slate-400 text-sm">Response time: 24-48 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#E6EEEF] rounded-xl text-[#000]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Headquarters</h4>
                  <p className="text-slate-600">Ministry of Agriculture Building<br />Hargeisa, Somaliland</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Report Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#F8FAFC] rounded-3xl p-8 shadow-lg border border-slate-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white text-slate-900 rounded-xl shadow-sm border border-slate-200">
                <Wrench size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Report an Issue</h3>
                <p className="text-sm text-slate-500">Report broken wells or storage issues.</p>
              </div>
            </div>

            {!wellReported ? (
              <form
                onSubmit={(e) => { e.preventDefault(); setWellReported(true); }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Reporter Name</label>
                    <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-[#8FB78F] focus:ring-2 focus:ring-[#8FB78F]/20 outline-none transition-all text-slate-900" required />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Village / Region</label>
                    <input type="text" placeholder="e.g. Burao District" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-[#8FB78F] focus:ring-2 focus:ring-[#8FB78F]/20 outline-none transition-all text-slate-900" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Issue Type</label>
                  <div className="grid grid-cols-3 gap-2">
                    <label className="cursor-pointer">
                      <input type="radio" name="status" className="peer sr-only" />
                      <div className="text-center py-2 px-1 rounded-lg border border-slate-200 bg-white peer-checked:bg-slate-900 peer-checked:text-white text-sm font-medium transition-all hover:bg-slate-50">Well Break</div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="radio" name="status" className="peer sr-only" />
                      <div className="text-center py-2 px-1 rounded-lg border border-slate-200 bg-white peer-checked:bg-slate-900 peer-checked:text-white text-sm font-medium transition-all hover:bg-slate-50">Storage</div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="radio" name="status" className="peer sr-only" />
                      <div className="text-center py-2 px-1 rounded-lg border border-slate-200 bg-white peer-checked:bg-slate-900 peer-checked:text-white text-sm font-medium transition-all hover:bg-slate-50">Other</div>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
                  <textarea rows={3} placeholder="Describe the problem..." className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-[#8FB78F] focus:ring-2 focus:ring-[#8FB78F]/20 outline-none transition-all text-slate-900"></textarea>
                </div>

                <button type="submit" className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 mt-4 shadow-md shadow-amber-500/20">
                  <Send size={18} />
                  Submit Alert
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-100 rounded-2xl p-6 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-lg font-bold text-green-800 mb-2">Alert Logged</h4>
                <p className="text-green-700 text-sm mb-4">Your report has been sent to the nearest field office for verification.</p>
                <button onClick={() => setWellReported(false)} className="text-sm font-semibold text-green-800 underline hover:text-green-900">
                  Submit another report
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// 7. Testimonials / Government Endorsements
const TestimonialSection = () => {
  const officials = [
    {
      name: "Mahmud Warsame",
      role: "Badhasabka Gobolka Maroodi Jeex",
      quote: "Kaydso has transformed how we respond to water scarcity. The predictive data allows us to act weeks before a crisis hits."
    },
    {
      name: "Ali Abdi",
      role: "Badhasabka Gobolka Sanaag",
      quote: "Transparency in charity coordination has always been a challenge. This system connects donors directly to the village needs we verify."
    },
    {
      name: "Fadumo Hassan",
      role: "Badhasabka Gobolka Awdal",
      quote: "A necessary tool for modern governance. The real-time dashboard gives us the 'calm control' we need during dry seasons."
    }
  ];

  return (
    <section className="py-24 bg-[#E6EEEF] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Trusted by Leadership</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Endorsed by regional governors and administrators across the nation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {officials.map((official, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative group hover:shadow-md transition-shadow"
            >
              <div className="absolute top-6 right-8 text-[#8FB78F]/20 group-hover:text-[#8FB78F]/40 transition-colors">
                <Quote size={40} strokeWidth={3} />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg">
                  {official.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{official.name}</h4>
                  <p className="text-xs text-[#8FB78F] font-bold uppercase tracking-wider">{official.role}</p>
                </div>
              </div>

              <p className="text-slate-600 italic leading-relaxed">
                "{official.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 6. Download / CTA Section
const DownloadSection = () => {
  return (
    <section id="download" className="py-28 px-6 bg-white relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute top-20 left-10 text-[#B4CCCF] opacity-30"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Droplets size={120} />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-[#8FB78F] opacity-20"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <ShieldCheck size={140} />
      </motion.div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Decide now. Protect early.</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Download the web system, request secure government access, or review the
            documentation — all built for trusted operations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#8FB78F] text-slate-900 px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all"
            >
              <Download size={20} />
              Download Web System
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-slate-800 border border-slate-300 px-8 py-4 rounded-full text-lg font-bold hover:border-slate-800 transition-all"
            >
              <FileText size={20} />
              Documentation
            </motion.button>
          </div>

          <p className="text-sm text-slate-400 pt-8">
            Current Version 2.4.0 • Secure & Encrypted
          </p>
        </motion.div>
      </div>
    </section>
  );
};
// Main Page Component
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#E6EEEF] selection:bg-[#8FB78F] selection:text-slate-900">
      {/* Sticky Nav */}
      <motion.nav
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 py-4",
          scrolled || isMenuOpen ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/50" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-xl overflow-hidden shadow-sm">
              <Image src="/Logo.png" alt="Kaydso Logo" fill className="object-cover" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">Kaydso</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-slate-900 transition-colors">About Us</a>
            <a href="#how" className="hover:text-slate-900 transition-colors">How it works</a>
            <a href="#demo" className="hover:text-slate-900 transition-colors">Dashboard</a>
            <a href="#charity" className="hover:text-slate-900 transition-colors">Charity</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-slate-700 transition-all shadow-sm">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-900 p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-slate-100 overflow-hidden bg-white/95 backdrop-blur-xl absolute left-0 right-0 top-full shadow-xl"
            >
              <div className="flex flex-col p-6 space-y-6 text-lg font-medium text-slate-700">
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-[#8FB78F] transition-colors">About Us</a>
                <a href="#how" onClick={() => setIsMenuOpen(false)} className="hover:text-[#8FB78F] transition-colors">How it works</a>
                <a href="#demo" onClick={() => setIsMenuOpen(false)} className="hover:text-[#8FB78F] transition-colors">Dashboard</a>
                <a href="#charity" onClick={() => setIsMenuOpen(false)} className="hover:text-[#8FB78F] transition-colors">Charity</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-[#8FB78F] transition-colors">Contact</a>
                <button className="bg-slate-900 text-white px-5 py-3 rounded-xl hover:bg-slate-800 transition-all text-center">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main>
        <Hero />
        <AboutUs />
        <HowItWorks />
        <DashboardDemo />
        <CharitySection />
        <ContactSection />
        <TestimonialSection />
        <DownloadSection />
      </main>

      <footer className="bg-slate-950 text-slate-300 py-16 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(143,183,143,0.3)]">
                  <Image src="/Logo.png" alt="Kaydso Logo" fill className="object-cover" />
                </div>
                <span className="font-bold text-2xl text-white tracking-tight">Kaydso</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm">
                Empowering governments with predictive intelligence to secure water, food, and future stability.
              </p>
              <div className="flex gap-4">
                {[Twitter, Facebook, Linkedin, Mail].map((Icon, i) => (
                  <a key={i} href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#8FB78F] hover:text-slate-900 transition-colors">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-bold mb-6">Platform</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#problem" className="hover:text-[#8FB78F] transition-colors flex items-center gap-2"><ArrowRight size={14} /> The Crisis</a></li>
                <li><a href="#how" className="hover:text-[#8FB78F] transition-colors flex items-center gap-2"><ArrowRight size={14} /> How it Works</a></li>
                <li><a href="#demo" className="hover:text-[#8FB78F] transition-colors flex items-center gap-2"><ArrowRight size={14} /> Live Dashboard</a></li>
                <li><a href="#" className="hover:text-[#8FB78F] transition-colors flex items-center gap-2"><ArrowRight size={14} /> Success Stories</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-bold mb-6">Resources</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-[#8FB78F] transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-[#8FB78F] transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-[#8FB78F] transition-colors">Research Papers</a></li>
                <li><a href="#" className="hover:text-[#8FB78F] transition-colors flex items-center gap-2">System Status <span className="h-2 w-2 rounded-full bg-[#8FB78F]"></span></a></li>
              </ul>
            </div>

            {/* Government Access */}
            <div>
              <h4 className="text-white font-bold mb-6">Government Access</h4>
              <p className="text-xs text-slate-500 mb-4">Secure portal for authorized ministry officials only.</p>
              <button className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-xl flex items-center justify-between hover:bg-slate-800 transition-all group">
                <span>Official Login</span>
                <ExternalLink size={16} className="text-slate-500 group-hover:text-white transition-colors" />
              </button>
              <div className="mt-6 p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                <p className="text-xs text-slate-400">Need access? Contact the Ministry of Interior or your regional administrator.</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© 2025 Kaydso Early Warning System. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
