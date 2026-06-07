import {
  LuUser,
  LuMedal,
  LuCpu,
  LuBriefcase,
  LuGraduationCap,
  LuAppWindow,
} from "react-icons/lu";

export const tabConfig = {
  basic: {
    title: "Profile Settings",
    icon: LuUser,
  },
  skills: {
    title: "Skills & Socials",
    icon: LuCpu,
  },
  badges: {
    title: "Badges & Awards",
    icon: LuMedal,
  },
  experience: {
    title: "Work History",
    icon: LuBriefcase,
  },
  education: {
    title: "Education Background",
    icon: LuGraduationCap,
  },
  projects: {
    title: "Projects",
    icon: LuAppWindow,
  },
};
