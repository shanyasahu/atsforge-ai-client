import { useNavigate } from "react-router";
import { Link } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import LeftSection from "../components/left-section";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import toast from "react-hot-toast";

const Register = () => {
  const { loading, handleRegister } = useAuth();

  //two way binding
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isDisabled = !username && !email && !password;

  //show or hide password
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword((prev) => !prev);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    if (!username || !email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    // username validation
    if (username.length < 3) {
      toast.error("Username must be at least 3 characters");
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
      const res = await handleRegister({ username, email, password });

      if (res) {
        toast.success("Account created successfully 🎉");
        navigate("/");
      } else {
        toast.error("Registration failed");
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
      <LeftSection title={"Welcome to"} />

      {/* RIGHT SECTION */}
      <div className="bg-(--bg) flex justify-center items-center p-6 lg:p-12">
        {/* CARD */}
        <div className="w-full max-w-md border rounded-3xl border-[#1E293B] bg-(--light-theme-shade-bg) px-8 py-10 flex flex-col gap-6 shadow-xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <h2 className="text-3xl leading-14 font-bold text-(--text)">
                Register
              </h2>
              <p className="text-sm leading-5 text-(--subtext)">
                Create your account to begin your journey.
              </p>
            </div>

            {/* USERNAME */}
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest uppercase">
                Username
              </label>

              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                name="username"
                id="username"
                placeholder="your username"
                className="bg-[#020B1E] border border-[#1E293B] rounded-full px-5 py-3 text-sm outline-none focus:border-(--primary)"
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest uppercase">
                Email Address
              </label>

              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                placeholder="name@company.com"
                className="bg-[#020B1E] border border-[#1E293B] rounded-full px-5 py-3 text-sm outline-none focus:border-(--primary)"
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
                  className="bg-[#020B1E] border border-[#1E293B] rounded-full px-5 py-3 text-sm outline-none focus:border-(--primary) w-full pr-12"
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

            {/* REGISTER BUTTON */}
            <button
              disabled={isDisabled || loading}
              onClick={handleSubmit}
              className="mt-2 w-full py-3 rounded-full bg-linear-to-r from-green-400 to-green-500 text-black font-semibold hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? "Creating account..." : "Create Account →"}
            </button>
          </form>

          {/* LOGIN LINK */}
          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link to={"/login"} className="text-(--primary) font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
