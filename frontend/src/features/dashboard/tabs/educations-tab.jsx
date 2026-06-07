import { useState } from "react";
import Input from "../../../components/ui/input";
import Date from "../components/date";
import Current from "../components/current";
import Pagination from "../components/pagination";
import { LuPlus, LuTrash2 } from "react-icons/lu";

function EducationsTab({ formData, addItem, removeItem, handleArrayChange }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 1;

  const totalEducations = formData.profile.educations.length;
  const totalPages = Math.ceil(totalEducations / postsPerPage);

  const indexOfLastItem = currentPage * postsPerPage;
  const indexOfFirstItem = indexOfLastItem - postsPerPage;

  const currentEducations = formData.profile.educations.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  return (
    <div className="space-y-6">
      {currentEducations.map((edu, index) => {
        const actualIndex = indexOfFirstItem + index;

        return (
          <div
            key={actualIndex}
            className="grid grid-cols-2 gap-4 p-6 border border-slate-100 rounded-2xl bg-slate-50/50 relative group"
          >
            <button
              onClick={() => removeItem("educations", actualIndex)}
              className="absolute top-4 right-4 text-slate-300 hover:text-red-500 transition-colors"
            >
              <LuTrash2 size={18} />
            </button>
            <div className="col-span-2">
              <Input
                label="School / Institution"
                placeholder="e.g. SMK Negeri 1 Adiwerna"
                value={edu.institution}
                onChange={(e) =>
                  handleArrayChange(
                    "educations",
                    actualIndex,
                    "institution",
                    e.target.value,
                  )
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">
                Degree
              </label>
              <select
                value={edu.degree}
                onChange={(e) =>
                  handleArrayChange(
                    "educations",
                    actualIndex,
                    "degree",
                    e.target.value,
                  )
                }
                className="px-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary text-sm"
              >
                <option value="">Select Degree</option>
                <option value="High School">High School</option>
                <option value="Vocational High School">
                  Vocational High School
                </option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Certification/BootCamp">
                  Certification / BootCamp
                </option>
              </select>
            </div>

            <Input
              label="Field of Study"
              placeholder="e.g. Computer Network and Telecommunications"
              value={edu.major}
              onChange={(e) =>
                handleArrayChange(
                  "educations",
                  actualIndex,
                  "major",
                  e.target.value,
                )
              }
            />

            <Date
              label="Start Date"
              category="educations"
              categoryObj={edu}
              index={actualIndex}
              field="startDate"
              handleArrayChange={handleArrayChange}
            />

            <Date
              label="End Date"
              category="educations"
              categoryObj={edu}
              index={actualIndex}
              field="endDate"
              handleArrayChange={handleArrayChange}
            />

            <Current
              category="educations"
              categoryObj={edu}
              index={actualIndex}
              handleArrayChange={handleArrayChange}
            />

            <div className="col-span-2">
              <div className="flex items-center mb-2 gap-2">
                <label className="text-xs font-bold text-slate-700">
                  Description
                </label>
              </div>
              <textarea
                value={edu.description}
                onChange={(e) =>
                  handleArrayChange(
                    "educations",
                    actualIndex,
                    "description",
                    e.target.value,
                  )
                }
                className="w-full text-sm px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-600/5 outline-none transition-all h-35"
                placeholder="Tell about your education..."
              />
            </div>
          </div>
        );
      })}

      {totalEducations > postsPerPage && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}

      <button
        type="button"
        onClick={() => {
          addItem("educations", {
            institution: "",
            degree: "",
            major: "",
            startDate: "",
            endDate: "",
            isCurrent: false,
            description: "",
          });
          setCurrentPage(totalPages + 1);
        }}
        className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 text-sm font-medium flex items-center justify-center gap-2 hover:bg-slate-50 hover:border-blue-300 hover:text-blue-600 transition-all"
      >
        <LuPlus /> Add Education
      </button>
    </div>
  );
}

export default EducationsTab;
