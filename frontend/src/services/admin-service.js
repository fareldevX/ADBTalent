import api from "../api/axios";

export const getUserDashboard = async () => {
  const res = await api.get("/admin/dashboard");
  return res.data;
};

export const approveVerify = async (id) => {
  const res = await api.patch(`/admin/approve/${id}`);
  return res.data;
};

export const rejectVerify = async (id) => {
  const res = await api.patch(`/admin/reject/${id}`);
  return res.data;
};

export const editTalent = async (id, payload) => {
  const res = await api.put(`/admin/talent/edit/${id}`, payload);
  return res.data;
};
