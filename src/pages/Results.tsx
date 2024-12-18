import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { useAuth } from "../context/AuthContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

import Navbar from "../components/Navbar";
import LoadingSpinner from "../components/LoadingSpinner";

function Results() {
  const navigate = useNavigate();
  const location = useLocation();
  const { quizState, completedQuiz } = location.state || {};
  const [isLoading, setIsLoading] = useState(true);
  const [newHighScore, setNewHighScore] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (!completedQuiz) {
      navigate("/");
    } else {
      setIsLoading(false);
      handleScore();
    }
  }, [completedQuiz, navigate]);

  const handleScore = async () => {
    const userId = user?.uid;
    if (userId && quizState.quizMode === "challenge") {
      const userDocRef = doc(db, "users", userId);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        const currentHighScore = userData?.highscore || 0;

        if (quizState.score > currentHighScore) {
          await setDoc(
            userDocRef,
            { highscore: quizState.score },
            { merge: true }
          );
          setNewHighScore(true);
        }
      } else {
        await setDoc(userDocRef, { highscore: quizState.score });
        setNewHighScore(true);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-custom-gradient">
        <LoadingSpinner />
      </div>
    );
  } else if (completedQuiz) {
    return (
      <>
        <div className="flex flex-col min-h-screen bg-custom-gradient">
          <Navbar />
          <div className="flex-grow flex flex-col justify-center items-center py-10 px-10">
            {newHighScore && quizState.quizMode === "challenge" && (
              <div className="flex flex-col items-center mb-6">
                <p className="mt-2 text-3xl sm:text-4xl text-center font-bold text-yellow-400">
                  Congratulations, you set a new highscore!
                </p>
              </div>
            )}
            <h1 className="text-4xl sm:text-6xl mb-5 font-bold text-white">
              Results
            </h1>
            <div className="flex flex-col items-center text-3xl sm:text-4xl text-white font-bold">
              <span>---Score--- </span>
              <span className="text-yellow-300 text-7xl sm:text-8xl font-rampartOne">
                {quizState.score}
              </span>
            </div>
            {quizState.quizMode === "custom" ? (
              <>
                <p className="text-lg sm:text-xl text-white text-center mt-5">
                  You answered {quizState.score} out of{" "}
                  {quizState.questions.length} questions correctly!
                </p>
              </>
            ) : (
              <>
                <div className="mt-5">
                  <p className="text-lg sm:text-xl text-white text-center mb-3">
                    Curious how you compare to the competition?
                  </p>
                  <div className="flex justify-center">
                    <a
                      onClick={() => navigate("/leaderboard")}
                      className="text-yellow-400 font-bold text-xl sm:text-2xl text-center underline decoration-dotted underline-offset-4 hover:text-yellow-500 transition-all cursor-pointer"
                    >
                      Check out the leaderboard! 🚀
                    </a>
                  </div>
                </div>
              </>
            )}
            <div className="flex justify-center mt-10 space-x-4">
              <button
                onClick={() => navigate("/")}
                className="px-3 py-3 bg-gradient-to-b from-indigo-500 to-indigo-600 text-white font-medium text-lg rounded-xl shadow-md focus:ring-2 focus:ring-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#FFFFFF"
                >
                  <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                </svg>
              </button>
              <button
                onClick={() => navigate(`/quiz?mode=${quizState.quizMode}`)}
                className="px-3 py-3 bg-gradient-to-b from-green-500 to-green-600 text-white font-medium text-lg rounded-xl shadow-md focus:ring-2 focus:ring-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#FFFFFF"
                >
                  <path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440h80q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-6l62 62-56 58-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Results;
