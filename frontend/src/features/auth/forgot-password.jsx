import { useState } from "react";
import { Link } from "react-router-dom";
import { forgotPassword } from "../../services/auth-service";
import { useNotification } from "../../hooks/use-notification";
import Button from "../../components/ui/button";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const { notify } = useNotification();

  const handleResetLink = async () => {
    try {
      const res = await forgotPassword(email);

      if (res.status === "success") {
        notify({
          type: "info",
          message: "The reset link has been sent",
        });
      }

      setEmail("");
    } catch (err) {
      console.error("Reset link error", err);
      notify({
        type: "error",
        message: "Failed to sent reset link",
      });
    }
  };

  return (
    <section className="h-auto py-36 px-4 flex items-center justify-center bg-primary-bg">
      <div className="w-full max-w-100">
        <div className="text-left pb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">
            Send Link
          </h1>
          <p className="text-base text-neutral">
            Reset password ADBTalent Account.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col gap-4 bg-surface border border-semibold rounded-2xl p-6">
            <label
              htmlFor="email"
              className="text-base font-semibold text-primary mb-2"
            >
              Your Email
            </label>

            <input
              type="email"
              name="email"
              id="email"
              className="py-2.5 px-4 text-sm border border-semibold rounded-md focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all"
              placeholder="jhondoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-3">
            <Button
              onClick={() => handleResetLink()}
              className="w-full h-11.5 rounded-xl text-base font-bold bg-primary text-white hover:bg-primary/90 mt-2"
            >
              Send Reset Link
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
