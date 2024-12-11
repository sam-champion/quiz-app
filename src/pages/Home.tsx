import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

import Navbar from "../components/Navbar";

function Home() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    const logoutPromise = logout();
    toast
      .promise(logoutPromise, {
        pending: "Logging out...",
        success: "Logged out successfully!",
        error: "An error occurred. Please try again.",
      })
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <div className="h-screen bg-custom-gradient flex flex-col">
      <Navbar />
      <div className="flex justify-end">
        <button
          className="px-4 py-2 m-3 w-fit bg-indigo-600 text-white rounded hover:bg-indigo-500"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      <div className="flex flex-grow items-center justify-center">
        <button
          onClick={() => navigate("/quiz?mode=custom")}
          className="px-8 py-4 m-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 text-xl"
        >
          Custom Quiz
        </button>
        <button
          onClick={() => navigate("/quiz?mode=challenge")}
          className="px-8 py-4 m-2 bg-pink-600 text-white rounded hover:bg-pink-500 text-xl"
        >
          Challenge Mode
        </button>
      </div>
    </div>
  );
}
export default Home;
