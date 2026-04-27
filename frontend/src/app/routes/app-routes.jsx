import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/main-layout";
import DashboardLayout from "../layouts/dashboard-layout";
import LandingPage from "../../features/landing/landing-page";
import Login from "../../features/auth/login";
import Register from "../../features/auth/register";
import VerifyEmail from "../../features/auth/verify-email";
import ResendVerify from "../../features/auth/resend-verify";

function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route path="" element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="verify-email/:token" element={<VerifyEmail />} />
          <Route path="resend-verify" element={<ResendVerify />} />
        </Route>
        <Route path="admin" element={<DashboardLayout />}></Route>
      </Routes>
    </main>
  );
}

export default App;
