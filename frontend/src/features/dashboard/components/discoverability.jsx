function Discoverability({ formData, updateProfile, setFormData }) {
  const isDiscoverability = formData.profile.isDiscoverable;

  const toggleDiscoverability = async () => {
    const newStatus = !formData.profile.isDiscoverable;

    setFormData((prev) => ({
      ...prev,
      profile: { ...prev.profile, isDiscoverable: newStatus },
    }));

    try {
      const data = new FormData();
      data.append(
        "profile",
        JSON.stringify({
          ...formData.profile,
          isDiscoverable: newStatus,
        }),
      );

      await updateProfile(data);
    } catch (error) {
      console.error("Failed update discoverability", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex justify-between items-center">
      <div className="space-y-1">
        <h3 className="font-bold text-slate-800 text-sm">Discoverability</h3>
        <p className="text-[10px] text-slate-400">
          {isDiscoverability
            ? "Visible to verified recruiters."
            : "Your profile is currently private."}
        </p>
      </div>

      <div
        onClick={toggleDiscoverability}
        className={`w-12 h-6 rounded-full relative p-1 cursor-pointer transition-colors duration-300 ${
          isDiscoverability ? "bg-green-500" : "bg-slate-300"
        }`}
      >
        <div
          className={`absolute w-4 h-4 bg-white rounded-full transition-all duration-300 ${
            isDiscoverability ? "right-1" : "left-1"
          }`}
        />
      </div>
    </div>
  );
}

export default Discoverability;
