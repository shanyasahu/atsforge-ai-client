import { Link } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router";
import LeftSection from "../components/left-section";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import toast from "react-hot-toast";
import GoogleLoginButton from "../components/continue-with-google/GoogleLoginButton";

const Login = () => {
  const { loading, handleLogin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isDisabled = !email && !password;

  //toggle password show or hide
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // password validation
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      const res = await handleLogin({ email, password });

      if (res) {
        toast.success("Login successfully 🎉");
        navigate("/dashboard");
      } else {
        toast.error("Invalid credentials");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  if (loading) {
    return (
      <main className="flex justify-center items-center h-screen">
        <h1 className="text-5xl font-bold">Loading...</h1>
      </main>
    );
  }

  return (
    <div className="grid lg:grid-cols-2 min-h-screen text-(--subtext)">
      {/* LEFT SECTION */}
      <LeftSection title={"Welcome back to"} />

      {/* RIGHT SECTION */}
      <div className="bg-(--bg) flex justify-center items-center p-6 lg:p-12">
        {/* CARD */}
        <div className="w-full max-w-md border rounded-3xl border-[#1E293B] bg-(--light-theme-shade-bg) px-8 py-10 flex flex-col gap-6 shadow-xl">
          {/* FORM */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl leading-14 font-bold text-(--text)">
                Login
              </h2>
              <p className="text-sm leading-5 text-(--subtext)">
                Enter your credentials to continue your journey.
              </p>
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest uppercase">
                Email Address
              </label>

              <input
                type="email"
                placeholder="name@company.com"
                className="bg-(--input-bg) border border-[#1E293B] rounded-full px-5 py-3 text-sm outline-none focus:border-(--primary)"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* PASSWORD */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-xs tracking-widest uppercase">
                  Password
                </label>

                <span className="text-xs text-(--primary) cursor-pointer">
                  Forgot password?
                </span>
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="bg-(--input-bg) border border-[#1E293B] rounded-full px-5 py-3 text-sm outline-none focus:border-(--primary) w-full pr-12"
                  onChange={(e) => setPassword(e.target.value)}
                />

                {/* EYE BUTTON */}
                <button
                  type="button"
                  onClick={handleToggle}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-(--subtext) hover:text-white"
                >
                  {showPassword ? <BsEyeSlashFill /> : <IoEyeSharp />}
                </button>
              </div>
            </div>

            {/* LOGIN BUTTON */}
            <button
              disabled={isDisabled || loading}
              onClick={handleSubmit}
              className="mt-2 w-full py-3 rounded-full bg-linear-to-r from-green-400 to-green-500 text-black font-semibold hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Login →"}
            </button>
          </form>

          {/* DIVIDER */}
          <div className="flex items-center gap-3 text-xs text-(--subtext)">
            <div className="flex-1 h-px bg-[#1E293B]" />
            <span>OR CONTINUE WITH</span>
            <div className="flex-1 h-px bg-[#1E293B]" />
          </div>

          {/* GOOGLE LOGIN */}
          <div className="flex justify-center items-center">
            <GoogleLoginButton />
          </div>
          {/* REGISTER */}
          <p className="text-center text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-(--primary) font-medium">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
