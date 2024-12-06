import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleForgotPassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success(
        "Password reset email sent! Please check your inbox (or spam folder)."
      );
      setEmail("");
      navigate("/login");
    } catch (error: any) {
      console.error("Error sending password reset email:", error);
      toast.error(
        "Failed to send password reset email. Please ensure your email address is correct."
      );
    } finally {
      setIsSubmitting(false);
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
            Forgotten your password?
          </h2>
          <p className="text-center text-sm/6 mt-5 text-gray-500">
            Please enter your email address below and we'll email you a password
            link to reset it
          </p>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleForgotPassword}>
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
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold shadow-sm 
                  ${
                    isSubmitting
                      ? "bg-indigo-300 text-white cursor-not-allowed"
                      : "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  }`}
              >
                {isSubmitting ? (
                  <div className="flex justify-center items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Submitting...</span>
                  </div>
                ) : (
                  "Reset password"
                )}
              </button>
            </div>
          </form>
          <p className="text-center text-sm/6 mt-5 text-gray-500">
            <Link
              to="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Cancel
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
