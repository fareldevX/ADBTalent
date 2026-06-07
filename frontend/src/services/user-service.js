import api from "../api/axios";

export const getUserProfile = async () => {
  const res = await api.get("/user/profile");
  return res.data;
};

export const updateProfile = async (formData) => {
  const res = await api.put("/user/profile", formData);
  return res.data;
};
