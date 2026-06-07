import { useState } from "react";
import {
  LuQuote,
  LuTrendingUp,
  LuBriefcase,
  LuServer,
  LuGlobe,
  LuArrowUpRight,
} from "react-icons/lu";

function Showcase() {
  const [activeFilter, setActiveFilter] = useState("all");

  const successStories = [
    {
      id: 1,
      name: "Farel Arlish Orlando",
      role: "Full-Stack Web Developer",
      company: "Tech Infrastructure Partner",
      type: "development",
      metrics: "Vetted into Top 5% Talent Pool",
      quote:
        "Deploying enterprise-grade full-stack architectures requires both robust backend management and clean, modern user interfaces. The structured data pipelines made it seamless to demonstrate validation.",
      achievements: [
        "Successfully launched ADBTalent platform",
        "Constructed Judge0 automated grading system",
        "Integrated advanced React and Elysia frameworks",
      ],
    },
    {
      id: 2,
      name: "Rian Dewantara",
      role: "Cloud Architect Practitioner",
      company: "Global Logistics SaaS",
      type: "cloud",
      metrics: "35% Cloud Cost Optimization",
      quote:
        "Transitioning local bare-metal applications into cloud ecosystems requires deep structural validation. The credential management simplified our engineering deployment timeline.",
      achievements: [
        "Passed AWS Certified Cloud Practitioner curriculum",
        "Architected scalable server node routing maps",
        "Implemented strict role-based data boundaries",
      ],
    },
    {
      id: 3,
      name: "Amara Putri",
      role: "Linux Systems Administrator",
      company: "E-Commerce Enterprise",
      type: "sysadmin",
      metrics: "99.99% Core Server Uptime",
      quote:
        "Configuring hardened Nginx web servers and processing microservice network stacks demands absolute configuration precision. The platform highlighted my operational infrastructure capabilities.",
      achievements: [
        "Completed complex Ubuntu Server deployments",
        "Hardened secure communication network nodes",
        "Automated routine pipeline script configurations",
      ],
    },
  ];

  const filteredStories = successStories.filter(
    (story) => activeFilter === "all" || story.type === activeFilter,
  );

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-16 bg-slate-50/30 min-h-screen">
      <div className="text-center max-w-2xl mx-auto space-y-4 pt-12">
        <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#1d4ed8] tracking-wide">
          <span>Success Stories</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-[#0d1323] tracking-tight">
          Validated Profiles.{" "}
          <span className="text-[#1d4ed8]">Proven Outcomes.</span>
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed font-normal">
          Discover how elite developers, systems administrators, and cloud
          engineers deployed their portfolios to match directly with
          high-performance industry networks.
        </p>
      </div>

      <div className="flex justify-center gap-2 border-b border-slate-100 pb-4">
        {[
          { id: "all", name: "All Placements" },
          { id: "development", name: "Web Development" },
          { id: "sysadmin", name: "Sysadmin & Infrastructure" },
          { id: "cloud", name: "Cloud Engineering" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === tab.id
                ? "bg-[#0d1323] text-white shadow-xs"
                : "bg-white text-slate-500 border border-slate-200/60 hover:text-[#0d1323] hover:border-slate-300"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="space-y-12">
        {filteredStories.map((story) => (
          <div
            key={story.id}
            className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-[#1d4ed8]" />

            <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1d4ed8]">
                  <LuTrendingUp size={14} />
                  <span>{story.metrics}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0d1323] tracking-tight">
                  {story.name}
                </h3>
                <p className="text-sm text-slate-500 font-normal">
                  {story.role}
                </p>
                <p className="text-xs text-slate-400 font-medium flex items-center gap-1">
                  <LuBriefcase size={12} />
                  Placed at {story.company}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <h4 className="text-xs font-bold text-[#0d1323] uppercase tracking-wider">
                  Key Deliverables
                </h4>
                <ul className="space-y-1.5">
                  {story.achievements.map((ach, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-slate-500 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 bg-slate-50/60 border border-slate-100 rounded-xl p-6 flex flex-col justify-between relative">
              <span className="absolute top-4 right-4 text-slate-200/80 pointer-events-none">
                <LuQuote size={48} />
              </span>

              <p className="text-sm text-slate-600 font-normal leading-relaxed italic relative z-10 pt-4">
                "{story.quote}"
              </p>

              <div className="flex items-center justify-end pt-6">
                <button className="inline-flex items-center gap-1 text-xs font-bold text-[#1d4ed8] hover:underline bg-transparent border-0 p-0 cursor-pointer group">
                  View Verified Case Study
                  <LuArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-xs">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1d4ed8] flex items-center justify-center mx-auto mb-3">
            <LuBriefcase size={16} />
          </div>
          <h4 className="text-xl font-black text-[#0d1323]">94%</h4>
          <p className="text-xs text-slate-400 font-medium mt-0.5">
            Direct Placement Rate
          </p>
        </div>
        <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-xs">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1d4ed8] flex items-center justify-center mx-auto mb-3">
            <LuServer size={16} />
          </div>
          <h4 className="text-xl font-black text-[#0d1323]">180+</h4>
          <p className="text-xs text-slate-400 font-medium mt-0.5">
            Verified System Nodes
          </p>
        </div>
        <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-xs">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1d4ed8] flex items-center justify-center mx-auto mb-3">
            <LuGlobe size={16} />
          </div>
          <h4 className="text-xl font-black text-[#0d1323]">Top 5%</h4>
          <p className="text-xs text-slate-400 font-medium mt-0.5">
            Global Talent Benchmarking
          </p>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
