import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

function Home() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const username = user?.displayName || "Guest";

  return (
    <div className="min-h-screen bg-custom-gradient flex flex-col items-center text-white">
      {/* Navbar at the top, full width */}
      <div className="w-full">
        <Navbar />
      </div>

      <div className="flex flex-col items-center space-y-6 max-w-screen-md w-full text-center flex-grow justify-center px-10 py-10 sm:px-8">
        {/* Welcome Message */}
        <h1 className="text-3xl sm:text-5xl font-extrabold drop-shadow-md">
          Welcome back, <span className="text-yellow-300">{username}</span>!
        </h1>
        <p className="text-lg sm:text-xl font-bold text-white">
          Choose a game mode to start your trivia adventure:
        </p>

        {/* Game Mode Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 max-w-80 sm:max-w-full">
          {/* Custom Quiz Card */}
          <div
            className="group bg-white bg-opacity-10 rounded-2xl border-white border-2 p-6 text-center shadow-md hover:shadow-xl hover:bg-opacity-20 transform hover:-translate-y-2 transition-all duration-300"
            onClick={() => navigate("/quiz?mode=custom")}
          >
            <div className="flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48px"
                viewBox="0 -960 960 960"
                width="48px"
                fill="SkyBlue"
              >
                <path d="M200-160v-280h-80v-80h240v80h-80v280h-80Zm0-440v-200h80v200h-80Zm160 0v-80h80v-120h80v120h80v80H360Zm80 440v-360h80v360h-80Zm240 0v-120h-80v-80h240v80h-80v120h-80Zm0-280v-360h80v360h-80Z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-yellow-300 mb-2">
              Custom Quiz <span></span>
            </h2>
            <div className="border-t border-yellow-400 border-2 my-5 "></div>
            <p className="text-base sm:text-lg text-white">
              Select the category, number of questions and difficulty. Perfect
              for practicing trivia!
            </p>
          </div>

          {/* Challenge Mode Card */}
          <div
            className="group bg-white bg-opacity-10 rounded-2xl border-white border-2 p-6 text-center shadow-md hover:shadow-xl hover:bg-opacity-20 transform hover:-translate-y-2 transition-all duration-300"
            onClick={() => navigate("/quiz?mode=challenge")}
          >
            <div className="flex items-center justify-center mb-2">
              <svg
                className="text-orange-300"
                xmlns="http://www.w3.org/2000/svg"
                height="48px"
                viewBox="0 -960 960 960"
                width="48px"
                fill="currentColor"
              >
                <path d="M240-400q0 52 21 98.5t60 81.5q-1-5-1-9v-9q0-32 12-60t35-51l113-111 113 111q23 23 35 51t12 60v9q0 4-1 9 39-35 60-81.5t21-98.5q0-50-18.5-94.5T648-574q-20 13-42 19.5t-45 6.5q-62 0-107.5-41T401-690q-39 33-69 68.5t-50.5 72Q261-513 250.5-475T240-400Zm240 52-57 56q-11 11-17 25t-6 29q0 32 23.5 55t56.5 23q33 0 56.5-23t23.5-55q0-16-6-29.5T537-292l-57-56Zm0-492v132q0 34 23.5 57t57.5 23q18 0 33.5-7.5T622-658l18-22q74 42 117 117t43 163q0 134-93 227T480-80q-134 0-227-93t-93-227q0-129 86.5-245T480-840Z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-yellow-300 mb-2">
              Challenge Mode
            </h2>
            <div className="border-t border-yellow-400 border-2 my-5 "></div>
            <p className="text-base sm:text-lg text-white">
              Test your knowledge in an endless trivia game. Score as high as
              you can and climb the leaderboard!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
