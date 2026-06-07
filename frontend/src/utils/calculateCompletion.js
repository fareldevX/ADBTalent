export const calculateCompletion = (profile) => {
  if (!profile) return 0;

  // Only required fields
  const checks = [!!profile.title, !!profile.location, !!profile.about];

  const totalRequired = checks.length;
  const filledRequired = checks.filter(Boolean).length;

  return Math.round((filledRequired / totalRequired) * 100);
};
