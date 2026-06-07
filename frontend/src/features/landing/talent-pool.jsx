import { useAccount } from "../../hooks/use-account";
import { Link } from "react-router-dom";
import {
  LuMapPin,
  LuGraduationCap,
  LuUser,
  LuBriefcase,
  LuFolderGit2,
  LuAward,
  LuLock,
  LuExternalLink,
  LuCalendar,
} from "react-icons/lu";
import dayjs from "dayjs";
import "dayjs/locale/en";

function TalentPool() {
  const { account } = useAccount();

  if (!account || !account.user) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center space-y-6">
        <div className="p-4 bg-slate-50 text-slate-400 rounded-full border border-slate-100">
          <LuLock size={36} />
        </div>
        <div className="max-w-md space-y-2">
          <h3 className="text-xl font-bold text-[#0d1323]">
            Restricted Access
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            Please log in first to view detailed profiles and explore available
            talent inside the Talent Pool.
          </p>
        </div>
        <Link
          to="/login"
          className="px-6 py-2.5 bg-[#1d4ed8] text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
        >
          Go to Login Page
        </Link>
      </div>
    );
  }

  const userProfile = account.user.profile || {};
  const skills = account.user.profile.skills || [];
  const experiences = account.user.profile.experiences || [];
  const educations = account.user.profile.educations || [];
  const projects = account.user.profile.projects || [];
  const awards = account.user.profile.awards || [];

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-6 bg-slate-50/30 min-h-screen">
      <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-blue-100" />
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-slate-100 bg-slate-50 flex items-center justify-center overflow-hidden shrink-0 shadow-xs relative z-4">
          {account.user.avatar ? (
            <img
              src={account.user.avatar}
              alt={account.user.fullName || "Talent"}
              className="w-full h-full object-cover"
            />
          ) : (
            <LuUser size={48} className="text-slate-400" />
          )}
          <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
        </div>

        <div className="flex-1 text-center md:text-left space-y-4 w-full z-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-[#0d1323] tracking-tight">
              {account.user.fullName || "Anonymous Talent"}
            </h2>
            <p className="text-base font-medium text-slate-600">
              {userProfile.title || "Full-Stack Web Developer"}
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-xs font-normal text-slate-500">
            {userProfile.location && (
              <span className="flex items-center gap-1.5 text-slate-600">
                <LuMapPin size={14} className="text-[#1d4ed8]" />
                {userProfile.location}
              </span>
            )}
            {educations.length > 0 && (
              <span className="flex items-center gap-1.5 text-slate-600">
                <LuGraduationCap size={15} className="text-[#1d4ed8]" />
                {educations[0].schoolName || educations[0].institution}
              </span>
            )}
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-1.5 pt-1">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-2.5 py-1 bg-slate-50 border border-slate-200/60 rounded-md text-[11px] font-medium text-slate-600 uppercase tracking-wide"
              >
                {skill}
              </span>
            ))}
            <span className="px-2.5 py-1 bg-blue-50 border border-blue-100 rounded-md text-[11px] font-semibold text-[#1d4ed8]">
              Top 5% Talent
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm space-y-3">
            <h3 className="text-base font-bold text-[#0d1323] flex items-center gap-2">
              <LuUser size={18} className="text-[#1d4ed8]" />
              Executive Summary
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal whitespace-pre-line">
              {userProfile.about ||
                "No executive summary available for this talent."}
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-[#0d1323] flex items-center gap-2">
              <LuBriefcase size={18} className="text-[#1d4ed8]" />
              Experience & Leadership
            </h3>

            {experiences.length === 0 ? (
              <p className="text-xs text-slate-400 italic">
                No work history recorded.
              </p>
            ) : (
              <div className="relative border-l border-slate-200 pl-5 space-y-6 ml-2 pt-1">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative space-y-1.5">
                    <div className="absolute left-[-24.5px] top-1.5 w-2 h-2 rounded-full bg-white border-2 border-[#1d4ed8]" />

                    <h4 className="text-sm font-bold text-[#0d1323] tracking-tight">
                      {exp.jobTitle}
                    </h4>

                    <p className="text-xs font-medium text-[#1d4ed8] flex flex-wrap items-center gap-x-2">
                      <span>{exp.company}</span>
                      <span className="text-slate-300 font-normal">|</span>
                      <span className="text-slate-500 font-normal flex items-center gap-1">
                        <LuCalendar size={12} />
                        {dayjs(exp.startDate).format(
                          "dddd, D MMMM YYYY",
                        )} -{" "}
                        {exp.isCurrent
                          ? "Present"
                          : dayjs(exp.endDate).format("dddd, D MMMM YYYY")}
                      </span>
                    </p>

                    <p className="text-sm text-slate-600 font-normal leading-relaxed pt-0.5">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-[#0d1323] flex items-center gap-2">
              <LuFolderGit2 size={18} className="text-[#1d4ed8]" />
              Key Projects
            </h3>

            {projects.length === 0 ? (
              <p className="text-xs text-slate-400 italic">
                No pinned projects available.
              </p>
            ) : (
              <div className="space-y-3">
                {projects.map((proj, index) => (
                  <a
                    key={index}
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="block p-4 bg-slate-50/60 border border-slate-100 rounded-xl transition-all hover:bg-slate-50 hover:border-slate-200/80 group"
                  >
                    <div className="flex gap-4 items-start">
                      {proj.imageUrl || proj.image ? (
                        <div className="w-16 h-16 rounded-lg bg-white border border-slate-100 shrink-0 overflow-hidden flex items-center justify-center">
                          <img
                            src={proj.imageUrl || proj.image}
                            alt={proj.projectName || proj.title}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-lg bg-white border border-slate-100 shrink-0 flex items-center justify-center text-slate-400">
                          <LuFolderGit2 size={24} />
                        </div>
                      )}

                      <div className="flex-1 min-w-0 space-y-1.5">
                        <div className="flex justify-between items-center gap-2">
                          <h4 className="text-sm font-bold text-[#0d1323] line-clamp-1 group-hover:text-[#1d4ed8] transition-colors">
                            {proj.projectName || proj.title}
                          </h4>
                          <span className="text-slate-400 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                            <LuExternalLink size={14} />
                          </span>
                        </div>

                        <p className="text-xs text-slate-500 font-normal leading-relaxed line-clamp-2">
                          {proj.description}
                        </p>

                        {proj.tools && (
                          <div className="flex flex-wrap gap-1 pt-1">
                            {proj.tools.map((tool, i) => (
                              <span
                                key={i}
                                className="px-1.5 py-0.5 bg-white border border-slate-200/80 rounded text-[10px] font-medium text-slate-500 lowercase tracking-wide"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-[#0d1323] flex items-center gap-2">
              <LuAward size={18} className="text-[#1d4ed8]" />
              Awards & Honors
            </h3>

            {awards.length === 0 ? (
              <p className="text-xs text-slate-400 italic">
                No awards or honors recorded.
              </p>
            ) : (
              <div className="space-y-4 relative before:absolute before:top-1.5 before:bottom-1.5 before:left-1 before:w-px before:bg-slate-200">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="flex gap-3 relative items-start pl-3"
                  >
                    <div className="space-y-0.5 flex-1">
                      <h4 className="text-sm font-bold text-[#0d1323] leading-snug">
                        {award.awardName}
                      </h4>
                      <p className="text-xs font-medium text-[#1d4ed8]">
                        {award.organization} {award.year && `• ${award.year}`}
                      </p>
                      {award.description && (
                        <p className="text-xs text-slate-500 font-normal leading-relaxed pt-1">
                          {award.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalentPool;
