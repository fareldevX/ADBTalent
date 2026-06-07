export const calculateRecentStats = (profile) => {
  if (!profile) {
    return {
      projectsRecent: 0,
      awardRecent: 0,
      experienceRecent: 0,
    };
  }

  // Calculate recent items (simplified - in real app, track dates)
  const projectsCount = profile.projects?.length || 0;
  const awardCount = profile.awards?.length || 0;
  const experienceCount = profile.experiences?.length || 0;

  // For this term, we can use the most recent items count
  // Or estimate based on profile growth
  return {
    projectsRecent: Math.max(
      0,
      projectsCount > 0 ? Math.min(projectsCount, 3) : 0,
    ),
    awardRecent: Math.max(0, awardCount > 0 ? Math.min(awardCount, 2) : 0),
    experienceRecent: Math.max(
      0,
      experienceCount > 0 ? Math.min(experienceCount, 2) : 0,
    ),
  };
};
