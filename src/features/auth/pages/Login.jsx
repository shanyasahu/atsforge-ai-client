import { Link } from "react-router";
import { useAuth } from "../../hooks/use.auth";
import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const { loading, handleLogin } = useAuth();

  const navigate = useNavigate();

  //two way binding for handling input feilds data
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin({ email, password });
    navigate("/");

    if (loading) {
      return (
        <main>
          <h1 className="text-5xl font-bold">Loding....</h1>
        </main>
      );
    }
  };

  return (
    <main className="flex justify-center items-center w-full h-screen flex-col">
      <form>
        <h2>Login Form</h2>

        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            name="email"
            id="email"
            placeholder="enter an email"
            className="border-2 border-b-black"
          />
        </div>

        <div>
          <label htmlFor="password">password</label>
          <br />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            id="password"
            placeholder="enter an password"
            className="border-2 border-b-black"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-black py-2 px-6 rounded-2xl text-white my-2"
        >
          Login
        </button>
      </form>

      <p>
        Don't have an account? <Link to={"/register"}>Register</Link>
      </p>
    </main>
  );
};

export default Login;
