import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import Logo from "../components/LogoIcon";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginPromise = login(email, password);

    toast.promise(loginPromise, {
      pending: "Logging in...",
      success: "Login successful!",
      error: "Incorrect email or password.",
    });

    loginPromise
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  return (
    <>
      <div className="flex h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex flex-col items-center">
            <div className="w-20 mb-2">
              <Logo />
            </div>
            <h1 className="text-center font-video text-xl font-light">
              ByteSize Trivia
            </h1>
          </div>
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-800">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-800"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 shadow-md text-base  text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                ></input>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-800"
                >
                  Password
                </label>
                <Link
                  to="/resetpassword"
                  className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 shadow-md text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                ></input>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 shadow-md"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="text-center text-sm/6 mt-10 text-gray-500">
            Don't have an account?
            <Link
              to="/register"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              Sign up here.
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
