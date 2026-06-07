import { useState } from "react";
import {
  LuSearch,
  LuBookOpen,
  LuFileText,
  LuCompass,
  LuArrowUpRight,
  LuDownload,
  LuExternalLink,
} from "react-icons/lu";

function Resources() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Resources", icon: <LuCompass size={14} /> },
    { id: "career", name: "Career Guide", icon: <LuBookOpen size={14} /> },
    {
      id: "technical",
      name: "Technical Guides",
      icon: <LuFileText size={14} />,
    },
  ];

  const articles = [
    {
      id: 1,
      category: "career",
      title:
        "How to Build a 100% Complete Profile That Attracts Tech Recruiters",
      description:
        "Learn the strategy behind filling your experience, dynamic project listings, and maximizing your profile visibility meter effectively.",
      readTime: "5 min read",
      date: "Jun 02, 2026",
      featured: true,
    },
    {
      id: 2,
      category: "technical",
      title: "Mastering Cloud Infrastructure Foundations for Beginners",
      description:
        "A foundational checklist covering essential cloud concepts, infrastructure basics, and career path setups for aspiring cloud practitioners.",
      readTime: "8 min read",
      date: "May 28, 2026",
      featured: false,
    },
    {
      id: 3,
      category: "career",
      title:
        "Optimizing Your Technical Portfolio Projects for Industry Visibility",
      description:
        "Discover how structuring your project descriptions, tags, and tools can improve your ranking inside the global Talent Pool search filter.",
      readTime: "4 min read",
      date: "May 15, 2026",
      featured: false,
    },
  ];

  const downloads = [
    {
      title: "Standard ATS Resume Template",
      type: "DOCX / PDF",
      size: "1.2 MB",
    },
    {
      title: "Full-Stack Interview Preparation Blueprint",
      type: "PDF",
      size: "3.5 MB",
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = articles.find((a) => a.featured);

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-12 bg-slate-50/30 min-h-screen">
      {/* HEADER HERO SECTION */}
      <div className="text-center max-w-2xl mx-auto space-y-4 pt-4">
        <h1 className="text-3xl md:text-4xl font-black text-[#0d1323] tracking-tight">
          Knowledge & Growth <span className="text-[#1d4ed8]">Hub</span>
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed font-normal">
          Explore comprehensive guides, download career-building assets, and
          access insights curated to help you stand out in the tech industry.
        </p>

        {/* Search Bar Input */}
        <div className="relative max-w-md mx-auto pt-2">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
            <LuSearch size={18} />
          </span>
          <input
            type="text"
            placeholder="Search guides, blueprints, or articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-normal text-slate-700 placeholder-slate-400 focus:outline-hidden focus:border-[#1d4ed8] focus:ring-1 focus:ring-[#1d4ed8] transition-all shadow-xs"
          />
        </div>
      </div>

      {/* DYNAMIC CATEGORY BUTTONS */}
      <div className="flex flex-wrap justify-center gap-2 border-b border-slate-100 pb-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeCategory === cat.id
                ? "bg-[#0d1323] text-white shadow-xs"
                : "bg-white text-slate-500 border border-slate-200/60 hover:text-[#0d1323] hover:border-slate-300"
            }`}
          >
            {cat.icon}
            {cat.name}
          </button>
        ))}
      </div>

      {/* SPLIT LAYOUT SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN: GUIDES & ARTICLES (2/3) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Featured Article Box - Only visible when "All" category is selected and no search parameter */}
          {featuredArticle && activeCategory === "all" && !searchQuery && (
            <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-xs relative overflow-hidden group">
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#1d4ed8]" />
              <div className="space-y-4">
                <span className="px-2.5 py-0.5 bg-blue-50 border border-blue-100 rounded text-[10px] font-bold text-[#1d4ed8] uppercase tracking-wider">
                  Featured Masterclass
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#0d1323] group-hover:text-[#1d4ed8] transition-colors leading-snug">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-normal leading-relaxed">
                    {featuredArticle.description}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-50 text-xs font-medium text-slate-400">
                  <span>
                    {featuredArticle.date} • {featuredArticle.readTime}
                  </span>
                  <button className="flex items-center gap-1 text-[#1d4ed8] font-semibold hover:underline bg-transparent border-0 p-0 cursor-pointer">
                    Read Article <LuArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Regular Filtered Article Grid List */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#0d1323] tracking-tight">
              Latest Publications ({filteredArticles.length})
            </h3>

            {filteredArticles.length === 0 ? (
              <div className="bg-white border border-slate-100 rounded-2xl p-8 text-center text-slate-400 text-sm font-normal">
                No articles matching your criteria found.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredArticles.map((article) => (
                  <div
                    key={article.id}
                    className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs flex flex-col justify-between hover:border-slate-200 transition-all group"
                  >
                    <div className="space-y-2.5">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        {article.category}
                      </span>
                      <h4 className="text-sm font-bold text-[#0d1323] group-hover:text-[#1d4ed8] transition-colors line-clamp-2 leading-snug">
                        {article.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-normal leading-relaxed line-clamp-3">
                        {article.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-50 text-[11px] font-medium text-slate-400">
                      <span>{article.date}</span>
                      <span className="text-[#1d4ed8] group-hover:underline flex items-center gap-0.5 font-semibold cursor-pointer">
                        View <LuExternalLink size={12} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: DOWNLOADABLE ASSETS (1/3) */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-[#0d1323] tracking-tight">
                Premium Resources
              </h3>
              <p className="text-xs text-slate-400 font-normal leading-relaxed">
                Free foundational assets to speed up your career deployment.
              </p>
            </div>

            <div className="space-y-3">
              {downloads.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-slate-50/60 border border-slate-100/80 rounded-xl flex items-center justify-between gap-4 group hover:bg-slate-50 transition-colors"
                >
                  <div className="space-y-1 min-w-0">
                    <h4 className="text-xs font-bold text-[#0d1323] truncate group-hover:text-[#1d4ed8] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">
                      {item.type} • {item.size}
                    </p>
                  </div>
                  <button
                    className="p-2 bg-white border border-slate-200 text-slate-500 rounded-lg hover:text-[#1d4ed8] hover:border-blue-200 transition-all cursor-pointer shrink-0 shadow-xs"
                    title="Download File"
                  >
                    <LuDownload size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
