import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

function Home() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const username = user?.displayName || "Guest";

  return (
    <div className="h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex flex-col items-center text-white">
      {/* Navbar at the top, full width */}
      <div className="w-full">
        <Navbar />
      </div>

      <div className="flex flex-col items-center space-y-6 max-w-screen-md w-full text-center flex-grow justify-center px-4 sm:px-8">
        {/* Welcome Message */}
        <h1 className="text-3xl sm:text-5xl font-extrabold drop-shadow-md">
          Welcome back, <span className="text-yellow-300">{username}</span>!
        </h1>
        <p className="text-base sm:text-xl text-gray-100">
          Choose a game mode to start your trivia adventure:
        </p>

        {/* Game Mode Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 w-full">
          <button
            onClick={() => navigate("/quiz?mode=custom")}
            className="flex items-center justify-center min-w-60 space-x-2 px-6 py-4 bg-gradient-to-b from-indigo-500 to-indigo-600 text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300 sm:w-auto"
          >
            <span className="text-lg font-medium">Custom Quiz</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="SkyBlue"
            >
              <path d="M200-160v-280h-80v-80h240v80h-80v280h-80Zm0-440v-200h80v200h-80Zm160 0v-80h80v-120h80v120h80v80H360Zm80 440v-360h80v360h-80Zm240 0v-120h-80v-80h240v80h-80v120h-80Zm0-280v-360h80v360h-80Z" />
            </svg>
          </button>

          <button
            onClick={() => navigate("/quiz?mode=challenge")}
            className="flex items-center justify-center min-w-60 space-x-2 px-6 py-4 bg-gradient-to-b from-pink-500 to-red-600 text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300 sm:w-auto"
          >
            <span className="text-lg font-medium">Challenge Mode</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="DarkOrange"
            >
              <path d="M240-400q0 52 21 98.5t60 81.5q-1-5-1-9v-9q0-32 12-60t35-51l113-111 113 111q23 23 35 51t12 60v9q0 4-1 9 39-35 60-81.5t21-98.5q0-50-18.5-94.5T648-574q-20 13-42 19.5t-45 6.5q-62 0-107.5-41T401-690q-39 33-69 68.5t-50.5 72Q261-513 250.5-475T240-400Zm240 52-57 56q-11 11-17 25t-6 29q0 32 23.5 55t56.5 23q33 0 56.5-23t23.5-55q0-16-6-29.5T537-292l-57-56Zm0-492v132q0 34 23.5 57t57.5 23q18 0 33.5-7.5T622-658l18-22q74 42 117 117t43 163q0 134-93 227T480-80q-134 0-227-93t-93-227q0-129 86.5-245T480-840Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
