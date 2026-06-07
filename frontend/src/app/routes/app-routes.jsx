import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layouts/main-layout";
import DashboardLayout from "../layouts/dashboard-layout";

import LandingPage from "../../features/landing/landing-page";
import TalentPool from "../../features/landing/talent-pool";
import Features from "../../features/landing/features";
import Resources from "../../features/landing/resources";
import Showcase from "../../features/landing/showcase";
import About from "../../features/landing/about";
import Contact from "../../features/landing/contact";
import Partnership from "../../features/landing/partnership";
import Privacy from "../../features/landing/privacy";
import TermsOfService from "../../features/landing/terms";
import SecurityData from "../../features/landing/security";

import DashboardAdmin from "../../features/admin/dashboard-admin"

import DashboardTalent from "../../features/dashboard/dashboard-talent";
import SettingsProfile from "../../features/dashboard/settings-profile";

import Login from "../../features/auth/login";
import Register from "../../features/auth/register";
import VerifyEmail from "../../features/auth/verify-email";
import ResendVerify from "../../features/auth/resend-verify";
import ForgotPassword from "../../features/auth/forgot-password";
import ResetPassword from "../../features/auth/reset-password";

function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<LandingPage />} />
          <Route path="talent-pool" element={<TalentPool />} />
          <Route path="resources" element={<Resources />} />
          <Route path="features" element={<Features />} />
          <Route path="showcase" element={<Showcase />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="partners" element={<Partnership />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<TermsOfService />} />
          <Route path="security" element={<SecurityData />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="verify-email/:token" element={<VerifyEmail />} />
          <Route path="resend-verify" element={<ResendVerify />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password/:token" element={<ResetPassword />} />
        </Route>

        <Route element={<ProtectedRoute allowedRole="admin" />}>
          <Route path="/admin" element={<DashboardLayout />}>
            <Route index element={<DashboardAdmin />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute allowedRole="talent" />}>
          <Route path="/talent" element={<DashboardLayout />}>
            <Route index element={<DashboardTalent />} />
            <Route path="settings" element={<SettingsProfile />} />
          </Route>
        </Route>
      </Routes>
    </main>
  );
}

export default App;
