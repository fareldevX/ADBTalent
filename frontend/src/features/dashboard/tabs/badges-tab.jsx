import { useState } from "react";
import { LuX, LuCheck, LuTrash2, LuPlus } from "react-icons/lu";
import Input from "../../../components/ui/input";
import Pagination from "../components/pagination";

function BadgesTab({
  formData,
  addItem,
  removeItem,
  // handleChange,
  badgeInput,
  setBadgeInput,
  awardInput,
  setAwardInput,
}) {
  const [currentAwardPage, setCurrentAwardPage] = useState(1);
  const awardsPerPage = 2;

  const badges = formData.profile.badges;
  const awards = formData.profile.awards;

  const totalAwards = awards.length;
  const totalAwardPages = Math.ceil(totalAwards / awardsPerPage);

  const indexOfLastAward = currentAwardPage * awardsPerPage;
  const indexOfFirstAward = indexOfLastAward - awardsPerPage;
  const currentAwards = awards.slice(indexOfFirstAward, indexOfLastAward);

  const handleAddBadge = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      if (badgeInput.trim() || !badges.includes(badgeInput)) {
        addItem("badges", badgeInput.trim());
        setBadgeInput("");
      }
    }
  };

  const handleAddAward = () => {
    if (awardInput.awardName.trim()) {
      addItem("awards", awardInput);
      setAwardInput({
        awardName: "",
        organization: "",
        year: "",
        description: "",
      });
    }
  };

  const handleAwardChange = (field, value) => {
    setAwardInput((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-primary">Badges</h3>
        <p className="text-sm text-slate-500">
          Add your badge like AWS Certified Cloud Practitioner.
        </p>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={badgeInput}
          onChange={(e) => setBadgeInput(e.target.value)}
          onKeyDown={handleAddBadge}
          placeholder="e.g. Dicoding Academy Graduate"
          className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-blue-600/5 outline-none transition-all"
        />
        <button
          onClick={handleAddBadge}
          className="px-6 py-3 bg-primary text-surface rounded-xl font-semibold hover:bg-slate-800 transition-colors"
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {badges &&
          badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-[#1d4ed8] border border-blue-100 rounded-lg text-sm font-medium"
            >
              {badge}
              <button
                onClick={() => removeItem("badges", index)}
                className="hover:text-red-500 cursor-pointer"
              >
                <LuX size={14} />
              </button>
            </div>
          ))}
      </div>

      <hr className="border-slate-100" />

      <div>
        <h3 className="text-lg font-bold text-primary">Awards</h3>
        <p className="text-sm text-slate-500">
          Add the awards you have ever received.
        </p>
      </div>

      <div className="space-y-4 p-6 border border-slate-100 rounded-2xl bg-slate-50/50">
        <h4 className="font-bold text-primary">Add New Award</h4>
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Award Name"
            value={awardInput.awardName}
            onChange={(e) => handleAwardChange("awardName", e.target.value)}
            placeholder="e.g. Best Student Award"
          />
          <Input
            label="Organization"
            value={awardInput.organization}
            onChange={(e) => handleAwardChange("organization", e.target.value)}
            placeholder="e.g. Your University"
          />
        </div>
        <Input
          label="Year"
          value={awardInput.year}
          onChange={(e) => handleAwardChange("year", e.target.value)}
          placeholder="e.g. 2023"
          type="number"
        />
        <textarea
          label="Description"
          value={awardInput.description}
          onChange={(e) => handleAwardChange("description", e.target.value)}
          placeholder="Describe this award..."
          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all resize-none"
          rows="3"
        />
        <button
          onClick={handleAddAward}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-surface rounded-xl font-semibold hover:bg-slate-800 transition-colors"
        >
          <LuPlus size={16} />
          Add Award
        </button>
      </div>

      {awards && awards.length > 0 && (
        <div className="space-y-4">
          <h4 className="font-bold text-primary">Your Awards</h4>
          {currentAwards.map((award, index) => {
            const actualIndex = indexOfFirstAward + index;
            return (
              <div
                key={actualIndex}
                className="p-6 border border-slate-100 rounded-2xl bg-amber-50/30 relative group"
              >
                <button
                  onClick={() => removeItem("awards", actualIndex)}
                  className="absolute top-4 right-4 text-slate-300 hover:text-red-500 transition-colors"
                >
                  <LuTrash2 size={18} />
                </button>
                <div className="space-y-3 pr-8">
                  <div>
                    <p className="text-xs font-bold text-slate-500">
                      Award Name
                    </p>
                    <p className="text-sm font-semibold text-primary">
                      {award.awardName}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-bold text-slate-500">
                        Organization
                      </p>
                      <p className="text-sm text-slate-700">
                        {award.organization || "-"}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500">Year</p>
                      <p className="text-sm text-slate-700">
                        {award.year || "-"}
                      </p>
                    </div>
                  </div>
                  {award.description && (
                    <div>
                      <p className="text-xs font-bold text-slate-500">
                        Description
                      </p>
                      <p className="text-sm text-slate-700">
                        {award.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          {totalAwards > awardsPerPage && (
            <Pagination
              totalPages={totalAwardPages}
              currentPage={currentAwardPage}
              setCurrentPage={setCurrentAwardPage}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default BadgesTab;
