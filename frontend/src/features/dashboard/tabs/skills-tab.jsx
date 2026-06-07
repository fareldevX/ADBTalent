import {
  LuX,
  LuCheck,
  LuAppWindow,
  LuLinkedin,
  LuGithub,
} from "react-icons/lu";

function SkillsTab({
  formData,
  addItem,
  removeItem,
  handleChange,
  skillInput,
  setSkillInput,
}) {
  const handleAddSkill = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      if (skillInput.trim() || !formData.profile.skills.includes(skillInput)) {
        addItem("skills", skillInput.trim());
        setSkillInput("");
      }
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-primary">Technical Skills</h3>
        <p className="text-sm text-slate-500">
          Add your expertise like React, Node.js, or Cloud Computing.
        </p>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          onKeyDown={handleAddSkill}
          placeholder="e.g. TypeScript"
          className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-blue-600/5 outline-none transition-all"
        />
        <button
          onClick={handleAddSkill}
          className="px-6 py-3 bg-primary text-surface rounded-xl font-semibold hover:bg-slate-800 transition-colors"
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {formData.profile.skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-[#1d4ed8] border border-blue-100 rounded-lg text-sm font-medium"
          >
            {skill}
            <button
              onClick={() => removeItem("skills", index)}
              className="hover:text-red-500 cursor-pointer"
            >
              <LuX size={14} />
            </button>
          </div>
        ))}
      </div>

      <hr className="border-slate-100" />

      <div>
        <h3 className="text-lg font-bold text-primary">Social Profiles</h3>
        <p className="text-sm text-slate-500">
          Where can recruiters find your work?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="flex items-center mb-2 gap-2">
            <label className="text-xs font-bold text-slate-700">Linkedin</label>
            {formData.profile.socials.linkedin && (
              <LuCheck className="text-green-500" size={12} />
            )}
          </div>
          <div className="relative">
            <LuLinkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              name="profile.socials.linkedin"
              value={formData.profile.socials.linkedin}
              onChange={handleChange}
              placeholder="LinkedIn URL"
              className="w-full text-sm pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-blue-600/5 outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center mb-2 gap-2">
            <label className="text-xs font-bold text-slate-700">Github</label>
            {formData.profile.socials.github && (
              <LuCheck className="text-green-500" size={12} />
            )}
          </div>
          <div className="relative">
            <LuGithub className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              name="profile.socials.github"
              value={formData.profile.socials.github}
              onChange={handleChange}
              placeholder="GitHub URL"
              className="w-full text-sm pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-blue-600/5 outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center mb-2 gap-2">
            <label className="text-xs font-bold text-slate-700">
              Portfolio
            </label>
            {formData.profile.socials.portfolio && (
              <LuCheck className="text-green-500" size={12} />
            )}
          </div>
          <div className="relative">
            <LuAppWindow className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              name="profile.socials.portfolio"
              value={formData.profile.socials.portfolio}
              onChange={handleChange}
              placeholder="Portfolio URL"
              className="w-full text-sm pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-blue-600/5 outline-none transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsTab;
