import { Link } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const { loading, handleLogin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleLogin({ email, password });

    navigate("/");
  };

  if (loading) {
    return (
      <main className="flex justify-center items-center h-screen">
        <h1 className="text-5xl font-bold">Loading...</h1>
      </main>
    );
  }

  return (
    <main className="flex justify-center items-center w-full h-screen flex-col">
      <form onSubmit={handleSubmit}>
        <h2>Login Form</h2>

        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            placeholder="enter an email"
            className="border-2 border-b-black"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="enter password"
            className="border-2 border-b-black"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-black py-2 px-6 rounded-2xl text-white my-2"
        >
          Login
        </button>
      </form>

      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </main>
  );
};

export default Login;
