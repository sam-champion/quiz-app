import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  validatePassword,
} from "firebase/auth";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const status = await validatePassword(auth, password);
    const passwordRequirements = [];

    if (!status.meetsMinPasswordLength) {
      passwordRequirements.push(
        `Password must be at least ${status.passwordPolicy.customStrengthOptions.minPasswordLength} characters long.`
      );
    }
    if (!status.containsLowercaseLetter) {
      passwordRequirements.push(
        "Password must contain at least one lowercase letter."
      );
    }
    if (!status.containsUppercaseLetter) {
      passwordRequirements.push(
        "Password must contain at least one uppercase letter."
      );
    }
    if (!status.containsNumericCharacter) {
      passwordRequirements.push("Password must contain at least one number.");
    }
    if (!status.containsNonAlphanumericCharacter) {
      passwordRequirements.push(
        "Password must contain at least one special character."
      );
    }

    if (passwordRequirements.length > 0) {
      toast.warning(`${passwordRequirements[0]}`);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account created successfully!");
      navigate("/login");
    } catch (error) {
      toast.error("Registration failed. Please try again.");
      console.error("Firebase registration error:", error);
    }
  };

  return (
    <>
      <div className="flex h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign up to an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleRegistration}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
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
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                ></input>
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Create Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="new-password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                ></input>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already have an account?
            <Link
              to="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              Login here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
