import { useNavigate } from "react-router";
import { Link } from "react-router";
import { useAuth } from "../../hooks/use.auth";
import { useState } from "react";

const Register = () => {
  const { loading, handleRegister } = useAuth();

  //two way binding
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister({ username, email, password });
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
    <main className="flex justify-center items-center flex-col w-full h-screen">
      <form>
        <h2>Register Form</h2>

        <div>
          <label htmlFor="username">Username</label>
          <br />
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            name="username"
            id="username"
            placeholder="enter your username"
            className="border-2 border-b-black"
          />
        </div>

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
          Register
        </button>
      </form>

      <p>
        Already have an account? <Link to={"/login"}>Login</Link>
      </p>
    </main>
  );
};

export default Register;
