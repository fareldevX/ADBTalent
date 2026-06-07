import { useState } from "react";
import {
  LuUserCheck,
  LuLayers,
  LuCpu,
  LuSearch,
  LuTrendingUp,
  LuShieldCheck,
  LuArrowRight,
} from "react-icons/lu";

function Features() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const coreFeatures = [
    {
      icon: <LuUserCheck size={22} />,
      title: "Dynamic Talent Showcase",
      description:
        "Build an enterprise-grade digital portfolio that highlights unified experiences, educational backgrounds, and verified skill taxonomies in a clean structured layout.",
    },
    {
      icon: <LuLayers size={22} />,
      title: "Comprehensive Project Metrics",
      description:
        "Display production-ready tools, operational link integrations, functional descriptions, and precise tech stacks with responsive interface interaction modules.",
    },
    {
      icon: <LuCpu size={22} />,
      title: "Automated Tech Stack Tagging",
      description:
        "Organize proficiency indexes cleanly through standardized metadata tags, omitting unnecessary stylistic noise to prioritize reading efficiency.",
    },
    {
      icon: <LuSearch size={22} />,
      title: "Precision Talent Pool Filtering",
      description:
        "Allow prospective global partner networks to search and parse specific validation data parameters based on strict localization or framework compliance.",
    },
    {
      icon: <LuTrendingUp size={22} />,
      title: "Analytics Badge System",
      description:
        "Highlight premium performance standing within the structural system matrix safely via integrated performance markers like the Top 5% status indicator.",
    },
    {
      icon: <LuShieldCheck size={22} />,
      title: "Strict Role-Based Access Control",
      description:
        "Protect critical personal profiles and data boundaries using authentication checks that mandate official secure gate checkpoints for authorization.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-16 bg-slate-50/30 min-h-screen">
      <div className="text-center max-w-2xl mx-auto space-y-4 pt-12">
        <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#1d4ed8] tracking-wide">
          <span>Platform Capabilities</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-[#0d1323] tracking-tight">
          Engineered for Modern{" "}
          <span className="text-[#1d4ed8]">Talent Ecosystems</span>
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed font-normal">
          Explore the robust modular architecture designed to streamline tech
          portfolio authentication, deployment visibility, and connection
          pipelines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coreFeatures.map((feature, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs relative overflow-hidden transition-all duration-300 hover:border-slate-200/80 hover:shadow-md hover:shadow-slate-900/5 group"
          >
            <div
              className={`absolute top-0 left-0 right-0 h-1 bg-[#1d4ed8] transition-transform duration-300 ${
                hoveredIndex === index ? "scale-x-100" : "scale-x-0"
              }`}
            />

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 text-[#0d1323] flex items-center justify-center transition-colors duration-300 group-hover:bg-blue-50 group-hover:text-[#1d4ed8] group-hover:border-blue-100 shrink-0">
                {feature.icon}
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-[#0d1323] tracking-tight group-hover:text-[#1d4ed8] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs text-slate-500 font-normal leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#0d1323] rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-xl">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-indigo-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-xl mx-auto space-y-6 relative z-10">
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Ready to deploy your enterprise identity layout?
          </h2>
          <p className="text-xs text-slate-400 font-normal leading-relaxed">
            Initialize your comprehensive pipeline node map configuration setup
            today and match immediately into the industry directory systems.
          </p>
          <div className="pt-2">
            <button className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1d4ed8] text-white text-xs font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-sm group cursor-pointer">
              Initialize Profile Pipeline
              <LuArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
