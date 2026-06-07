import { useState } from "react";
import Input from "../../../components/ui/input";
import Date from "../components/date";
import Current from "../components/current";
import Pagination from "../components/pagination";
import { LuPlus, LuTrash2 } from "react-icons/lu";

function ExperiencesTab({ formData, handleArrayChange, addItem, removeItem }) {
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 1;

  const totalExperiences = formData.profile.experiences.length;
  const totalPages = Math.ceil(totalExperiences / postsPerPage);

  const indexOfLastItem = currentPage * postsPerPage;
  const indexOfFirstItem = indexOfLastItem - postsPerPage;
  const currentExperiences = formData.profile.experiences.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  return (
    <div className="space-y-6">
      {currentExperiences.map((exp, index) => {
        const actualIndex = indexOfFirstItem + index;

        return (
          <div
            key={actualIndex}
            className="p-6 border border-slate-100 rounded-2xl bg-slate-50/50 relative group"
          >
            <button
              onClick={() => removeItem("experiences", actualIndex)}
              className="absolute top-4 right-4 text-slate-300 hover:text-red-500 transition-colors"
            >
              <LuTrash2 size={18} />
            </button>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Job Title"
                  value={exp.jobTitle}
                  onChange={(e) =>
                    handleArrayChange(
                      "experiences",
                      actualIndex,
                      "jobTitle",
                      e.target.value,
                    )
                  }
                  placeholder="e.g. Create a Website"
                />

                <Input
                  label="Company Name"
                  value={exp.company}
                  onChange={(e) =>
                    handleArrayChange(
                      "experiences",
                      actualIndex,
                      "company",
                      e.target.value,
                    )
                  }
                  placeholder="e.g. Google"
                />

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-700">
                    Type
                  </label>
                  <select
                    value={exp.type}
                    onChange={(e) =>
                      handleArrayChange(
                        "experiences",
                        actualIndex,
                        "type",
                        e.target.value,
                      )
                    }
                    className="text-sm px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-600/5 outline-none transition-all"
                  >
                    <option value="Work">Work</option>
                    <option value="Organization">Organization</option>
                    <option value="Leadership">Leadership</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 my-4">
                <Date
                  label="Start Date"
                  category="experiences"
                  categoryObj={exp}
                  index={actualIndex}
                  field="startDate"
                  handleArrayChange={handleArrayChange}
                />

                <Date
                  label="End Date"
                  category="experiences"
                  categoryObj={exp}
                  index={actualIndex}
                  field="endDate"
                  handleArrayChange={handleArrayChange}
                />

                <Current
                  category="experiences"
                  categoryObj={exp}
                  index={actualIndex}
                  handleArrayChange={handleArrayChange}
                />
              </div>

              <div>
                <div className="flex items-center mb-2 gap-2">
                  <label className="text-xs font-bold text-slate-700">
                    Description
                  </label>
                </div>
                <textarea
                  value={exp.description}
                  onChange={(e) =>
                    handleArrayChange(
                      "experiences",
                      actualIndex,
                      "description",
                      e.target.value,
                    )
                  }
                  className="w-full text-sm px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-600/5 outline-none transition-all h-35"
                  placeholder="Tell about your experience..."
                />
              </div>

              {totalExperiences > postsPerPage && (
                <Pagination
                  totalPages={totalPages}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              )}
            </div>
          </div>
        );
      })}
      <button
        type="button"
        onClick={() => {
          addItem("experiences", {
            jobTitle: "",
            company: "",
            type: "Work",
            startDate: "",
            endDate: "",
            isCurrent: false,
            description: "",
          });
          setCurrentPage(totalPages + 1);
        }}
        className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 text-sm font-medium flex items-center justify-center gap-2 hover:bg-slate-50 hover:border-blue-300 hover:text-blue-600 transition-all"
      >
        <LuPlus /> Add Experience
      </button>
    </div>
  );
}

export default ExperiencesTab;
