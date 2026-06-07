import { useState, useMemo } from "react";
import { useAccount } from "../../hooks/use-account";
import { useNotification } from "../../hooks/use-notification";

import { updateProfile } from "../../services/user-service";
import { tabConfig } from "./config/tab.config";

import HeaderSection from "./components/header-section";
import BasicTab from "./tabs/basic-tab";
import BadgesTab from "./tabs/badges-tab";
import SkillsTab from "./tabs/skills-tab";
import ExperiencesTab from "./tabs/experiences-tab";
import EducationsTab from "./tabs/educations-tab";
import ProjectsTab from "./tabs/projects-tab";
import Input from "../../components/ui/input";
import Date from "./components/date";
import Current from "./components/current";
import Pagination from "./components/pagination";

import ProfileStrength from "./components/profile-strength";
import Discoverability from "./components/discoverability";
import Quote from "./components/quote";

import {
  LuUser,
  LuBriefcase,
  LuLink,
  LuPlus,
  LuX,
  LuMedal,
  LuTrash2,
  LuCheck,
  LuGraduationCap,
  LuPencil,
  LuGlobe,
  LuLinkedin,
  LuGithub,
  LuAppWindow,
  LuPartyPopper,
  LuMenu,
  LuPanelLeft,
} from "react-icons/lu";

const SettingsProfile = () => {
  const { account } = useAccount();
  const { notify } = useNotification();

  const user = account?.user;

  const [activeTab, setActiveTab] = useState("basic");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [skillInput, setSkillInput] = useState("");
  const [badgeInput, setBadgeInput] = useState("");
  const [awardInput, setAwardInput] = useState({
    awardName: "",
    organization: "",
    year: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: user?.fullName || "",
    profile: {
      title: user?.profile?.title || "",
      badgeStatus: user?.profile?.badgeStatus || [],
      location: user?.profile?.location || "",
      about: user?.profile?.about || "",
      resumeUrl: user?.profile?.resumeUrl || "",
      isDiscoverable: user?.profile?.isDiscoverable ?? false,
      badges: user?.profile?.badges || [],
      awards: user?.profile?.awards || [],
      skills: user?.profile?.skills || [],
      socials: {
        linkedin: user?.profile?.socials?.linkedin || "",
        github: user?.profile?.socials?.github || "",
        portfolio: user?.profile?.socials?.portfolio || "",
      },
      experiences: user?.profile?.experiences || [],
      projects: user?.profile?.projects || [],
      educations: user?.profile?.educations || [],
    },
  });

  const checkStatus = useMemo(
    () => ({
      basic: !!(
        formData.fullName &&
        formData.profile.badgeStatus.length > 0 &&
        formData.profile.title &&
        formData.profile.location
      ),
      badges: !!(formData.profile.badges.length > 0),
      awards: !!(formData.profile.awards.length > 0),
      skills: !!(formData.profile.skills.length > 0),
      experience: !!(formData.profile.experiences.length > 0),
      education: !!(formData.profile.educations.length > 0),
      projects: !!(formData.profile.projects.length > 0),
    }),
    [formData],
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child, subChild] = name.split(".");
      if (subChild) {
        setFormData((prev) => ({
          ...prev,
          [parent]: {
            ...prev[parent],
            [child]: { ...prev[parent][child], [subChild]: value },
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [parent]: { ...prev[parent], [child]: value },
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addItem = (category, template) => {
    setFormData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        [category]: [...prev.profile[category], template],
      },
    }));
  };

  const removeItem = (category, index) => {
    setFormData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        [category]: prev.profile[category].filter((_, i) => i !== index),
      },
    }));
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const data = new FormData();

      data.append("fullName", formData.fullName);
      data.append("profile", JSON.stringify(formData.profile));

      if (selectedFile) {
        data.append("avatar", selectedFile);
      }

      await updateProfile(data);

      notify({
        type: "success",
        message: "Profile updated successfully",
      });
    } catch (error) {
      console.error("Save Error:", error);
      notify({
        type: "success",
        message: "Failed to update profile",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleArrayChange = (category, index, field, value) => {
    setFormData((prev) => {
      const newArray = [...prev.profile[category]];
      newArray[index] = { ...newArray[index], [field]: value };
      return {
        ...prev,
        profile: {
          ...prev.profile,
          [category]: newArray,
        },
      };
    });
  };

  const currentTab = tabConfig[activeTab] || tabConfig.basic;
  const IconTab = currentTab.icon;

  return (
    <div className="flex flex-col gap-4 md:gap-8 pt-16 md:pt-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <header className="px-2 md:px-0 flex-1">
          <h1 className="text-2xl md:text-3xl font-bold text-[#0d1323]">
            Account Settings
          </h1>
          <p className="text-sm md:text-base text-slate-500">
            Manage your talent profile, professional details, and contact
            preferences.
          </p>
        </header>
        <div className="flex items-start">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden flex items-center gap-2 text-xs font-bold px-3.5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 active:text-[#1d4ed8] border border-slate-200 hover:border-slate-300 rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer"
            title="Open navigation tabs"
          >
            <LuMenu size={16} className="text-[#1d4ed8]" />
            <span>Tabs</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-start">
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-10 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <div
          className={`fixed left-0 top-1/2 -translate-y-1/2 md:top-0 md:translate-y-0 h-auto w-64 z-20 md:relative md:w-auto md:col-span-2 lg:col-span-3 space-y-6 bg-white p-4 md:p-6 rounded-3xl border border-slate-200 shadow-sm transition-transform duration-300 ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }`}
        >
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden absolute top-2 right-4 p-2 hover:bg-slate-100 rounded-lg cursor-pointer"
          >
            <LuX size={20} />
          </button>

          <div className="mt-8 md:mt-0">
            <StepItem
              active={activeTab === "basic"}
              done={checkStatus.basic}
              onClick={() => {
                setActiveTab("basic");
                setIsSidebarOpen(false);
              }}
              icon={<LuUser />}
              label="Basic Information"
            />

            <StepItem
              active={activeTab === "skills"}
              done={checkStatus.skills}
              onClick={() => {
                setActiveTab("skills");
                setIsSidebarOpen(false);
              }}
              icon={<LuLink />}
              label="Skills & Socials"
            />

            <StepItem
              active={activeTab === "badges"}
              done={checkStatus.badges || checkStatus.awards}
              onClick={() => {
                setActiveTab("badges");
                setIsSidebarOpen(false);
              }}
              icon={<LuMedal />}
              label="Badges & Awards"
            />

            <StepItem
              active={activeTab === "experience"}
              done={checkStatus.experience}
              onClick={() => {
                setActiveTab("experience");
                setIsSidebarOpen(false);
              }}
              icon={<LuBriefcase />}
              label="Experience"
            />

            <StepItem
              active={activeTab === "education"}
              done={checkStatus.education}
              onClick={() => {
                setActiveTab("education");
                setIsSidebarOpen(false);
              }}
              icon={<LuGraduationCap />}
              label="Education"
            />

            <StepItem
              active={activeTab === "projects"}
              done={checkStatus.projects}
              onClick={() => {
                setActiveTab("projects");
                setIsSidebarOpen(false);
              }}
              icon={<LuAppWindow />}
              label="Projects"
            />
          </div>
        </div>

        <div className="md:col-span-2 lg:col-span-6 space-y-8">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 md:p-6 border-b border-slate-50 flex flex-row justify-between items-center gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <IconTab size={20} />
                </div>
                <h2 className="font-bold text-base md:text-lg text-[#0d1323]">
                  {currentTab.title}
                </h2>
              </div>
              <span className="text-[10px] font-bold px-3 py-1 bg-blue-50 text-blue-600 rounded-full uppercase tracking-wider">
                Public Profile
              </span>
            </div>

            <div className="p-4 md:p-8">
              {activeTab === "basic" && (
                <BasicTab
                  formData={formData}
                  user={user}
                  handleChange={handleChange}
                  setSelectedFile={setSelectedFile}
                  addItem={addItem}
                  removeItem={removeItem}
                />
              )}

              {activeTab === "skills" && (
                <SkillsTab
                  formData={formData}
                  addItem={addItem}
                  removeItem={removeItem}
                  handleChange={handleChange}
                  skillInput={skillInput}
                  setSkillInput={setSkillInput}
                />
              )}

              {activeTab === "badges" && (
                <BadgesTab
                  formData={formData}
                  addItem={addItem}
                  removeItem={removeItem}
                  handleChange={handleChange}
                  badgeInput={badgeInput}
                  setBadgeInput={setBadgeInput}
                  awardInput={awardInput}
                  setAwardInput={setAwardInput}
                />
              )}

              {activeTab === "experience" && (
                <ExperiencesTab
                  formData={formData}
                  handleArrayChange={handleArrayChange}
                  addItem={addItem}
                  removeItem={removeItem}
                />
              )}

              {activeTab === "education" && (
                <EducationsTab
                  formData={formData}
                  addItem={addItem}
                  removeItem={removeItem}
                  handleArrayChange={handleArrayChange}
                />
              )}

              {activeTab === "projects" && (
                <ProjectsTab
                  formData={formData}
                  addItem={addItem}
                  removeItem={removeItem}
                  handleArrayChange={handleArrayChange}
                />
              )}
            </div>
          </div>

          <div className="flex justify-end pt-2 md:pt-4">
            <button
              onClick={handleSave}
              disabled={loading}
              className={`px-6 md:px-8 py-3 md:py-4 bg-[#0d1323] text-white rounded-2xl font-bold shadow-xl transition-all cursor-pointer text-sm md:text-base
            ${loading ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.02] active:scale-95"}`}
            >
              {loading ? "Saving..." : "Save All Changes"}
            </button>
          </div>
        </div>

        <div className="md:col-span-2 lg:col-span-3 space-y-6">
          <ProfileStrength
            checkStatus={checkStatus}
            setActiveTab={setActiveTab}
          />

          <Discoverability
            formData={formData}
            updateProfile={updateProfile}
            setFormData={setFormData}
          />

          <Quote />
        </div>
      </div>
    </div>
  );
};

const StepItem = ({ active, done, onClick, icon, label }) => (
  <div
    className={`flex items-center gap-4 p-3 rounded-2xl cursor-pointer transition-all duration-300 ${
      active
        ? "bg-slate-50 shadow-sm border border-slate-100"
        : "hover:bg-slate-50/50"
    }`}
    onClick={onClick}
  >
    <div
      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
        done
          ? "bg-green-500 text-white"
          : active
            ? "bg-[#0d1323] text-white"
            : "bg-slate-100 text-slate-400"
      }`}
    >
      {done ? <LuCheck size={20} /> : icon}
    </div>
    <span
      className={`text-xs font-bold ${active ? "text-[#0d1323]" : "text-slate-400"}`}
    >
      {label}
    </span>
  </div>
);

export default SettingsProfile;
