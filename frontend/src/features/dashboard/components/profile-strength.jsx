import { useMemo } from "react";
import { LuCheck, LuPartyPopper } from "react-icons/lu";

function ProfileStrength({ checkStatus, setActiveTab }) {
  const strengthScore = useMemo(() => {
    const criteria = [
      checkStatus.basic,
      checkStatus.badges,
      checkStatus.awards,
      checkStatus.skills,
      checkStatus.experience,
      checkStatus.education,
      checkStatus.projects,
    ];
    const completed = criteria.filter(Boolean).length;
    return Math.round((completed / criteria.length) * 100);
  }, [checkStatus]);

  const getNextStep = () => {
    if (!checkStatus.basic)
      return { label: "Complete basic info", tab: "basic" };
    if (!checkStatus.badges) return { label: "Add badges", tab: "badges" };
    if (!checkStatus.awards) return { label: "Add awards", tab: "badges" };
    if (!checkStatus.skills)
      return { label: "Add skills & socials", tab: "skills" };
    if (!checkStatus.experience)
      return { label: "Add experience", tab: "experience" };
    if (!checkStatus.education)
      return { label: "Add education", tab: "education" };
    if (!checkStatus.projects)
      return { label: "Add projects", tab: "projects" };
    return null;
  };

  const nextStep = getNextStep();

  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-slate-800 text-sm">Profile Strength</h3>
        <span className="text-lg font-bold text-blue-600">
          {strengthScore}%
        </span>
      </div>

      <div className="w-full bg-slate-100 h-2 rounded-full mb-6">
        <div
          className="bg-blue-600 h-full rounded-full transition-all duration-500"
          style={{ width: `${strengthScore}%` }}
        />
      </div>

      <ul className="space-y-3 mb-4">
        <li
          className={`flex items-center gap-2 text-xs transition-colors ${checkStatus.basic ? "text-slate-600" : "text-slate-300"}`}
        >
          <LuCheck
            className={checkStatus.basic ? "text-green-500" : "text-slate-300"}
          />
          Basic Information verified
        </li>

        <li
          className={`flex items-center gap-2 text-xs transition-colors ${checkStatus.badges ? "text-slate-600" : "text-slate-300"}`}
        >
          <LuCheck
            className={checkStatus.badges ? "text-green-500" : "text-slate-300"}
          />
          Badges added
        </li>

        <li
          className={`flex items-center gap-2 text-xs transition-colors ${checkStatus.awards ? "text-slate-600" : "text-slate-300"}`}
        >
          <LuCheck
            className={checkStatus.awards ? "text-green-500" : "text-slate-300"}
          />
          Certifications added
        </li>

        <li
          className={`flex items-center gap-2 text-xs transition-colors ${checkStatus.skills ? "text-slate-600" : "text-slate-300"}`}
        >
          <LuCheck
            className={checkStatus.skills ? "text-green-500" : "text-slate-300"}
          />
          Skills & Socials linked
        </li>

        <li
          className={`flex items-center gap-2 text-xs transition-colors ${checkStatus.experience ? "text-slate-600" : "text-slate-300"}`}
        >
          <LuCheck
            className={
              checkStatus.experience ? "text-green-500" : "text-slate-300"
            }
          />
          Experience added
        </li>

        <li
          className={`flex items-center gap-2 text-xs transition-colors ${checkStatus.education ? "text-slate-600" : "text-slate-300"}`}
        >
          <LuCheck
            className={
              checkStatus.education ? "text-green-500" : "text-slate-300"
            }
          />
          Education added
        </li>

        <li
          className={`flex items-center gap-2 text-xs transition-colors ${checkStatus.projects ? "text-slate-600" : "text-slate-300"}`}
        >
          <LuCheck
            className={
              checkStatus.projects ? "text-green-500" : "text-slate-300"
            }
          />
          Projects added
        </li>
      </ul>

      {nextStep ? (
        <button
          onClick={() => setActiveTab(nextStep.tab)}
          className="text-xs text-blue-600 font-bold hover:underline cursor-pointer flex items-center gap-1"
        >
          + {nextStep.label} to reach 100%
        </button>
      ) : (
        <div className="text-xs text-green-600 font-bold flex items-center gap-1">
          <LuPartyPopper /> Profile is complete!
        </div>
      )}
    </div>
  );
}

export default ProfileStrength;
