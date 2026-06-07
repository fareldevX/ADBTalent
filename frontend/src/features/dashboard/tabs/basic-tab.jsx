import { useState, useRef } from "react";
import { LuCheck, LuPencil } from "react-icons/lu";
import InputWithCheck from "../../../components/ui/input-check";
import ImageCropModal from "../components/image-crop-modal";
import { LuX } from "react-icons/lu";

function BasicTab({
  formData,
  user,
  handleChange,
  setSelectedFile,
  addItem,
  removeItem,
}) {
  const badgeStatus = formData.profile.badgeStatus;

  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [showCropModal, setShowCropModal] = useState(false);
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [badgeStatusInput, setBadgeStatusInput] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImageFile(file);
      setShowCropModal(true);
    }
  };

  const handleCropComplete = (croppedBlob) => {
    const croppedFile = new File([croppedBlob], "profile-photo.jpg", {
      type: "image/jpeg",
    });
    setSelectedFile(croppedFile);

    const reader = new FileReader();
    reader.onloadend = () => setPreviewImage(reader.result);
    reader.readAsDataURL(croppedBlob);

    setShowCropModal(false);
  };

  const handleRemovePhoto = () => {
    setPreviewImage(null);
    setSelectedFile(null);
  };

  const handleAddBadge = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      if (badgeStatusInput.trim() || !badgeStatus.includes(badgeStatusInput)) {
        addItem("badgeStatus", badgeStatusInput.trim());
        setBadgeStatusInput("");
      }
    }
  };

  return (
    <div className="space-y-8">
      {showCropModal && (
        <ImageCropModal
          imageFile={selectedImageFile}
          onCropComplete={handleCropComplete}
          onCancel={() => setShowCropModal(false)}
        />
      )}

      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 p-4 md:p-6 rounded-2xl border border-slate-100 bg-slate-50/30">
        <div className="relative">
          <div className="w-16 md:w-20 h-16 md:h-20 rounded-full bg-slate-200 border-4 border-white shadow-sm overflow-hidden">
            <img
              src={previewImage || user.avatar}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />

          <button
            onClick={() => fileInputRef.current.click()}
            className="absolute -bottom-1 -right-1 p-2 bg-blue-600 text-white rounded-full border-2 border-white shadow-lg cursor-pointer"
          >
            <LuPencil size={12} />
          </button>
        </div>

        <div className="space-y-1">
          <h4 className="font-bold text-slate-800 text-sm">Profile Photo</h4>
          <p className="text-xs text-slate-400">
            Update your head shoot. JPG, PNG or WebP.
          </p>
          <div className="flex gap-4 pt-2">
            <button
              onClick={() => fileInputRef.current.click()}
              className="text-xs font-bold text-blue-600 cursor-pointer"
            >
              Upload New
            </button>
            <button
              onClick={handleRemovePhoto}
              className="text-xs font-bold text-red-500 cursor-pointer"
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <InputWithCheck
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <InputWithCheck
          label="Professional Headline"
          name="profile.title"
          value={formData.profile.title}
          onChange={handleChange}
        />
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={badgeStatusInput}
          onChange={(e) => setBadgeStatusInput(e.target.value)}
          onKeyDown={handleAddBadge}
          placeholder="e.g., Dean's List, Looking for Internships"
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
        {badgeStatus &&
          badgeStatus.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-[#1d4ed8] border border-blue-100 rounded-lg text-sm font-medium"
            >
              {badge}
              <button
                onClick={() => removeItem("badgeStatus", index)}
                className="hover:text-red-500 cursor-pointer"
              >
                <LuX size={14} />
              </button>
            </div>
          ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <InputWithCheck
          label="Resume URL"
          name="profile.resumeUrl"
          value={formData.profile.resumeUrl}
          onChange={handleChange}
        />
      </div>
      <InputWithCheck
        label="Location"
        name="profile.location"
        value={formData.profile.location}
        onChange={handleChange}
      />
      <div className="space-y-2">
        <div className="flex items-center mb-2 gap-2">
          <label className="text-xs font-bold text-slate-700">
            Bio / Executive Summary
          </label>
          {formData.profile.about && (
            <LuCheck className="text-green-500" size={12} />
          )}
        </div>
        <textarea
          name="profile.about"
          value={formData.profile.about}
          onChange={handleChange}
          className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-600/5 outline-none transition-all h-32 text-sm"
          placeholder="Driven student focusing on modern web tech..."
        />
      </div>
    </div>
  );
}

export default BasicTab;
