import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { resetPassword } from "../../services/auth-service";
import { useNotification } from "../../hooks/use-notification";
import Button from "../../components/ui/button";

function ResetPassword() {
  const [password, setPassword] = useState("");

  const { token } = useParams();
  const navigate = useNavigate();
  const { notify } = useNotification();

  const handleResetPassword = async () => {
    try {
      const res = await resetPassword(token, password);

      if (res.status === "success") {
        notify({
          type: "success",
          message: "Change password successfully",
        });

        setPassword("");
        navigate("/login");
      }
    } catch (err) {
      console.error("Change password error", err);
      notify({
        type: "error",
        message: "Failed to change password",
      });
    }
  };

  return (
    <section className="h-auto py-36 px-4 flex items-center justify-center bg-primary-bg">
      <div className="w-full max-w-100">
        <div className="text-left pb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">
            Change Your
          </h1>
          <p className="text-base text-neutral">Password ADBTalent Account.</p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col gap-4 bg-surface border border-semibold rounded-2xl p-6">
            <label
              htmlFor="password"
              className="text-base font-semibold text-primary mb-2"
            >
              Password
            </label>

            <input
              type="password"
              name="password"
              id="password"
              className="py-2.5 px-4 text-sm border border-semibold rounded-md focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all"
              placeholder="Enter your new password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="space-y-3">
            <Button
              onClick={() => handleResetPassword()}
              className="w-full h-11.5 rounded-xl text-base font-bold bg-primary text-white hover:bg-primary/90 mt-2"
            >
              Change Password
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResetPassword;
