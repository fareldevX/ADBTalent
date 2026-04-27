import { useState } from "react";
import { userResendLink } from "../../service/auth-service";
import { useNotification } from "../../hooks/use-notification";
import Button from "../../components/ui/button";

function ResendVerify() {
  const [email, setEmail] = useState("");

  const { notify } = useNotification();

  const handleResendLink = async () => {
    try {
      const res = await userResendLink(email);

      if (res.status === "success") {
        notify({
          type: "success",
          message: "Resend link verification successfully",
        });
      }
    } catch (err) {
      console.error("Resend link verification error", err);
      notify({
        type: "error",
        message: "Failed to resend link verification.",
      });
    }
  };

  return (
    <section className="h-auto py-34 px-4 flex items-center justify-center bg-primary-bg">
      <div className="w-full max-w-100">
        <div className="text-left pb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">
            Resend Link
          </h1>
          <h2 className="text-xl md:text-lg font-semibold text-foreground mt-1">
            Verification Email
          </h2>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col gap-4 bg-surface border border-semibold rounded-2xl p-6">
            <label
              htmlFor="email"
              className="text-lg font-bold text-foreground mb-2"
            >
              Your Email
            </label>

            <input
              type="email"
              name="email"
              id="email"
              className="py-2.5 px-4 text-sm border border-semibold rounded-md"
              placeholder="Enter your email..."
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-3">
            <Button
              onClick={() => handleResendLink()}
              className="w-full h-11.5 rounded-xl text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90 mt-2"
            >
              Send Link
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResendVerify;
