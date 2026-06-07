export const getPendingTasks = (profile) => {
  if (!profile) return [];

  const allTasks = [
    {
      id: "title",
      title: "Define your headline",
      desc: "Let people know your current focus or role.",
      isDone: !!profile.title,
    },
    {
      id: "location",
      title: "Add your location",
      desc: "Specify your city to help with local opportunities.",
      isDone: !!profile.location,
    },
    {
      id: "about",
      title: 'Write your "About" section',
      desc: "Introduce yourself and your professional journey.",
      isDone: !!profile.about,
    },
    {
      id: "resume",
      title: "Upload your resume",
      desc: "Make it easy for recruiters to download your CV.",
      isDone: !!profile.resumeUrl,
    },
    {
      id: "skills",
      title: "List your skills",
      desc: "Add your technical stack and expertise.",
      isDone: profile.skills?.length > 0,
    },
    {
      id: "linkedin",
      title: "Link your LinkedIn",
      desc: "Connect your professional networking profile.",
      isDone: !!profile.socials?.linkedin,
    },
    {
      id: "github",
      title: "Link your GitHub",
      desc: "Showcase your code repositories and activity.",
      isDone: !!profile.socials?.github,
    },
    {
      id: "portfolio",
      title: "Add portfolio link",
      desc: "Share your personal website or live projects.",
      isDone: !!profile.socials?.portfolio,
    },
    {
      id: "badges",
      title: "Add your badges",
      desc: "Display your certifications or platform achievements.",
      isDone: profile.badges?.length > 0,
    },
    {
      id: "awards",
      title: "Add your awards",
      desc: "Highlight any honors or recognition you have received.",
      isDone: profile.awards?.length > 0,
    },
    {
      id: "experience",
      title: "Add work experience",
      desc: "Detail your previous roles and responsibilities.",
      isDone: profile.experiences?.length > 0,
    },
    {
      id: "projects",
      title: "Feature a project",
      desc: "Explain what you built and the tools you used.",
      isDone: profile.projects?.length > 0,
    },
    {
      id: "education",
      title: "Add your education",
      desc: "Include your degrees or current study status.",
      isDone: profile.educations?.length > 0,
    },
  ];

  return allTasks;
};
