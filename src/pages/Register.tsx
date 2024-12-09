import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  validatePassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Logo from "../components/LogoIcon";

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // username validation
    if (username.length < 3 || username.length > 20) {
      toast.warning("Username must be between 3 and 20 characters.");
      return;
    }

    if (/\s/.test(username)) {
      toast.warning("Username cannot contain any spaces.");
      return;
    }

    if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
      toast.warning(
        "Username can only contain letters, numbers, hyphens, and underscores."
      );
      return;
    }

    const usernameDocRef = doc(db, "usernames", username);
    const usernameDoc = await getDoc(usernameDocRef);

    if (usernameDoc.exists()) {
      toast.warning("Username is already taken. Please choose another one.");
      return;
    }

    // password validation
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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userDocRef = doc(db, "users", userCredential.user.uid);
      await setDoc(userDocRef, {
        username: username,
        highscore: 0,
      });

      await setDoc(usernameDocRef, {
        uid: userCredential.user.uid,
      });

      toast.success("Account created successfully!");
      navigate("/login");
    } catch (error) {
      toast.error("Registration failed. Please try again.");
      console.error("Firebase registration error:", error);
    }
  };

  return (
    <>
      <div className="flex h-full flex-col justify-center px-6 py-12 lg:px-8 bg-custom-gradient">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex flex-col items-center">
            <div className="w-32 ">
              <Logo className="text-pink-300" />
            </div>
            <h1 className="text-center font-video text-2xl font-light">
              ByteSize Trivia
            </h1>
          </div>
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
                Username
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="username"
                  id="username"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                ></input>
              </div>
            </div>
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
                Password
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
