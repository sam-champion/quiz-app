import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

import LoadingSpinner from "../components/LoadingSpinner";
import SkipIcon from "../components/SkipIcon";
import Navbar from "../components/Navbar";
import Timer from "../components/Timer";
import QuestionAndAnswers from "../components/QuestionAndAnswers";

function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState<TriviaQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [usedQuestionIds, setUsedQuestionIds] = useState<Set<string>>(
    new Set()
  );
  const [skipsRemaining, setSkipsRemaining] = useState(3);
  const [score, setScore] = useState(0);

  type TriviaQuestion = {
    id: string;
    category: string;
    correctAnswer: string;
    incorrectAnswers: string[];
    question: {
      text: string;
    };
    tags: string[];
    type: string;
    difficulty: string;
    regions: string[];
    isNiche: boolean;
  };

  useEffect(() => {
    const authStateListener = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        navigate("/login");
      }
    });
    return () => authStateListener();
  }, []);

  const handleLogout = () => {
    toast
      .promise(signOut(auth), {
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

  const resetQuizState = () => {
    setQuizStarted(false);
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setUsedQuestionIds(new Set());
    setSkipsRemaining(3);
    setScore(0);
  };

  const fetchTriviaQuestions = async () => {
    try {
      const response = await fetch(
        "https://the-trivia-api.com/v2/questions?limit=50"
      );
      const data: TriviaQuestion[] = await response.json();

      const newQuestions = data.filter((q) => !usedQuestionIds.has(q.id));

      if (newQuestions.length === 0) {
        console.log("Failed to fetch any new trivia questions:");
        return;
      }
      console.log(data);
      setQuestions((prev) => [...prev, ...newQuestions]);
      const newIds = newQuestions.map((q) => q.id);
      setUsedQuestionIds((prev) => new Set([...prev, ...newIds]));
    } catch (error) {
      console.error("Failed to fetch trivia questions:", error);
      toast.error("Failed to load questions. Please try again.");
    }
  };

  const handleSkip = () => {
    if (skipsRemaining > 0) {
      setSkipsRemaining((prev) => prev - 1);
      setCurrentQuestionIndex((prev) => prev + 1);
      if (questions.length - currentQuestionIndex <= 10) {
        fetchTriviaQuestions();
      }
    } else {
      toast.warning("No skips remaining!");
    }
  };

  const handleAnswer = (userAnswer: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (userAnswer === currentQuestion.correctAnswer) {
      toast.success("Correct!");
      setCurrentQuestionIndex((prev) => prev + 1);
      setScore((prev) => prev + 1);
      if (questions.length - currentQuestionIndex <= 10) {
        fetchTriviaQuestions();
      }
    } else {
      toast.error("Wrong answer! Game over.");
      resetQuizState();
    }
  };

  if (isLoggedIn === null) {
    return (
      <div className="flex h-screen items-center justify-center bg-custom-gradient">
        <LoadingSpinner />
      </div>
    );
  } else if (isLoggedIn) {
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

        {!quizStarted ? (
          <div className="flex flex-grow items-center justify-center">
            <button
              onClick={() => {
                setQuizStarted(true);
                fetchTriviaQuestions();
              }}
              className="px-8 py-4 bg-green-600 text-white rounded hover:bg-green-500 text-xl"
            >
              Start Quiz
            </button>
          </div>
        ) : questions.length !== 0 ? (
          <div className="flex-grow flex flex-col items-center justify-center">
            <QuestionAndAnswers
              quizStarted={quizStarted}
              questions={questions}
              currentQuestionIndex={currentQuestionIndex}
              handleAnswer={handleAnswer}
            />
            {skipsRemaining > 0 && (
              <button
                className="mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
                onClick={handleSkip}
              >
                <div className="flex flex-row">
                  <span className="me-1">Skip</span>
                  <SkipIcon size={24} className="text-white" />
                </div>
              </button>
            )}
            <p className="text-3xl mt-5">Score: {score}</p>
            <Timer
              quizStarted={quizStarted}
              currentQuestionIndex={currentQuestionIndex}
              skipsRemaining={skipsRemaining}
              handleSkip={handleSkip}
              resetQuizState={resetQuizState}
              initialTime={15}
            />
          </div>
        ) : (
          <div className="flex h-full items-center justify-center">
            <LoadingSpinner />
          </div>
        )}
      </div>
    );
  }
}
export default Home;
