import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../service/auth-service";
import { getUserProfile } from "../../service/user-service";
import { useNotification } from "../../hooks/use-notification";
import { useAccount } from "../../hooks/use-account";
import LoadingSpinner from "../../components/common/loading-spinner";
import Button from "../../components/ui/button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { setAccount } = useAccount();
  const { notify } = useNotification();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const loginResult = await userLogin(email, password);

      const accessToken = loginResult.data.accessToken;
      localStorage.setItem("accessToken", accessToken);

      const profileResult = await getUserProfile();

      if (profileResult.status === "success") {
        setAccount(profileResult.data);

        notify({
          type: "success",
          message: "Login successful.",
        });

        navigate({ to: "/profile" });
      }
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Something went wrong. Please try again.";
      notify({
        type: "error",
        message,
      });
      console.error("Login error", err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <LoadingSpinner
        size="md"
        label="Loading..."
        className="relative min-h-145 h-full text-primary"
      />
    );
  }

  return (
    <section className="h-auto py-12 px-4 flex flex-col items-center justify-center bg-primary-bg">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-2 text-primary">Welcome Back</h2>
        <p className="text-base text-neutral">
          Access your organizational stability dashboard.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-100 w-full flex flex-col gap-4 py-8 px-6 border border-subtle rounded-xl shadow-md bg-surface"
      >
        <div className="flex flex-col items-stretch gap-2">
          <label htmlFor="email" className="text-sm font-medium text-primary">
            Work Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="py-2.5 px-4 text-sm border border-semibold rounded-md"
            placeholder="name@company.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col items-stretch gap-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-primary"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="py-2.5 px-4 mb-4 text-sm border border-semibold rounded-md"
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="p-2"
            />
            <label htmlFor="remember" className="text-sm text-neutral">
              Remember me
            </label>
          </div>

          <div className="flex items-center">
            <button className="text-sm font-medium text-secondary cursor-pointer">
              Forgot password?
            </button>
          </div>
        </div>

        <Button
          variant="primary"
          size="md"
          className="mb-4 border-b border-semibold"
        >
          Sign In
        </Button>

        <div className="text-center">
          <p className="text-sm text-neutral">
            New to Talent?{" "}
            <Link to="/register" className="font-semibold text-secondary">
              Create an account
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
}

export default Login;
