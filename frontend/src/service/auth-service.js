import api from "../api/axios";

export const userRegister = async (payload) => {
  const res = await api.post("/auth/register", payload);
  return res.data;
};

export const userVerifyEmail = async (token) => {
  const res = await api.post(`/auth/verify-email/${token}`);
  return res.data;
};

export const userResendLink = async (email) => {
  const res = await api.post("/auth/resend-verification", email);
  return res.data;
};

export const userLogin = async (email, password) => {
  const res = await api.post("/auth/login", { email, password });
  return res.data;
};

// export const forgotPassword = async (email) => {
//   const res = await api.post("/auth/forgot-password", { email });
//   return res.data;
// };

// export const resetPassword = async (token, password) => {
//   const res = await api.put(`/auth/reset-password/${token}`, { password });
//   return res.data;
// };
