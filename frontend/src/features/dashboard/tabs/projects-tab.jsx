import { useState } from "react";
import Input from "../../../components/ui/input";
import Pagination from "../components/pagination";
import { LuPlus, LuTrash2, LuX } from "react-icons/lu";

function ProjectsTab({ formData, addItem, removeItem, handleArrayChange }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 1;

  const totalProjects = formData.profile.projects.length;
  const totalPages = Math.ceil(totalProjects / postsPerPage);

  const indexOfLastItem = currentPage * postsPerPage;
  const indexOfFirstItem = indexOfLastItem - postsPerPage;

  const currentProjects = formData.profile.projects.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const [newToolInput, setNewToolInput] = useState("");

  const addTool = (projectIndex, tool) => {
    if (tool.trim()) {
      const actualIndex = indexOfFirstItem + projectIndex;
      const project = formData.profile.projects[actualIndex];
      const updatedTools = [...(project.tools || []), tool.trim()];
      handleArrayChange("projects", actualIndex, "tools", updatedTools);
      setNewToolInput("");
    }
  };

  const removeTool = (projectIndex, toolIndex) => {
    const actualIndex = indexOfFirstItem + projectIndex;
    const project = formData.profile.projects[actualIndex];
    const updatedTools = project.tools.filter((_, i) => i !== toolIndex);
    handleArrayChange("projects", actualIndex, "tools", updatedTools);
  };

  return (
    <div className="space-y-6">
      {currentProjects.map((project, index) => {
        const actualIndex = indexOfFirstItem + index;

        return (
          <div
            key={actualIndex}
            className="p-6 border border-slate-100 rounded-2xl bg-slate-50/50 relative group space-y-4"
          >
            <button
              onClick={() => removeItem("projects", actualIndex)}
              className="absolute top-4 right-4 text-slate-300 hover:text-red-500 transition-colors"
            >
              <LuTrash2 size={18} />
            </button>

            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Project Name"
                placeholder="e.g. E-Commerce Platform"
                value={project.projectName}
                onChange={(e) =>
                  handleArrayChange(
                    "projects",
                    actualIndex,
                    "projectName",
                    e.target.value,
                  )
                }
              />

              <Input
                label="Project Link"
                placeholder="e.g. https://myproject.com"
                value={project.link}
                onChange={(e) =>
                  handleArrayChange(
                    "projects",
                    actualIndex,
                    "link",
                    e.target.value,
                  )
                }
              />
            </div>

            <Input
              label="Project Image URL"
              placeholder="e.g. https://example.com/image.jpg"
              value={project.image}
              onChange={(e) =>
                handleArrayChange(
                  "projects",
                  actualIndex,
                  "image",
                  e.target.value,
                )
              }
            />

            <div>
              <label className="text-xs font-bold text-slate-700 mb-2 block">
                Description
              </label>
              <textarea
                value={project.description}
                onChange={(e) =>
                  handleArrayChange(
                    "projects",
                    actualIndex,
                    "description",
                    e.target.value,
                  )
                }
                className="w-full text-sm px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-600/5 outline-none transition-all resize-none"
                placeholder="Describe your project..."
                rows="3"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 mb-2 block">
                Technologies / Tools
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={newToolInput}
                  onChange={(e) => setNewToolInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addTool(index, newToolInput);
                    }
                  }}
                  placeholder="e.g. React, Node.js"
                  className="flex-1 px-4 py-3 rounded-xl bg-white border border-slate-200 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all text-sm"
                />
                <button
                  onClick={() => addTool(index, newToolInput)}
                  className="px-4 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  Add
                </button>
              </div>

              {project.tools && project.tools.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-lg text-sm font-medium"
                    >
                      {tool}
                      <button
                        onClick={() => removeTool(index, toolIndex)}
                        className="hover:text-red-500 cursor-pointer"
                      >
                        <LuX size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}

      <button
        onClick={() =>
          addItem("projects", {
            projectName: "",
            description: "",
            tools: [],
            link: "",
            image: "",
          })
        }
        className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 text-sm font-medium flex items-center justify-center gap-2 hover:bg-slate-50 hover:border-blue-300 hover:text-blue-600 transition-all"
      >
        <LuPlus />
        Add Project
      </button>

      {totalProjects > postsPerPage && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}

export default ProjectsTab;
