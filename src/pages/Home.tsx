import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { TriviaQuestion, QuizState } from "../types";

import LoadingSpinner from "../components/LoadingSpinner";
import Navbar from "../components/Navbar";
import SkipBtn from "../components/SkipBtn";
import Timer from "../components/Timer";
import QuestionAndAnswers from "../components/QuestionAndAnswers";

function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [quizState, setQuizState] = useState<QuizState>({
    quizStarted: false,
    questions: [],
    currentQuestionIndex: 0,
    usedQuestionIds: new Set<string>(),
    skipsRemaining: 3,
    score: 0,
  });

  useEffect(() => {
    const authStateListener = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setIsLoading(false);
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

  const fetchTriviaQuestions = async () => {
    try {
      const response = await fetch(
        "https://the-trivia-api.com/v2/questions?limit=50"
      );
      const data: TriviaQuestion[] = await response.json();
      console.log(data);

      const newQuestions = data.filter(
        (q) => !quizState.usedQuestionIds.has(q.id)
      );
      if (newQuestions.length === 0) {
        throw new Error("No new questions available");
      }

      setQuizState((prev) => ({
        ...prev,
        questions: [...prev.questions, ...newQuestions],
        usedQuestionIds: new Set([
          ...prev.usedQuestionIds,
          ...newQuestions.map((q) => q.id),
        ]),
      }));
    } catch (error) {
      console.error("Failed to fetch trivia questions:", error);
      toast.error("Failed to load questions. Please try again.");
    }
  };

  const handleSkip = () => {
    if (quizState.skipsRemaining > 0) {
      setQuizState((prev) => ({
        ...prev,
        skipsRemaining: prev.skipsRemaining - 1,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      }));
      if (quizState.questions.length - quizState.currentQuestionIndex <= 10) {
        fetchTriviaQuestions();
      }
    } else {
      toast.warning("No skips remaining!");
    }
  };

  const handleAnswer = (userAnswer: string) => {
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

    if (userAnswer === currentQuestion.correctAnswer) {
      toast.success("Correct!");

      setQuizState((prev) => {
        const nextIndex = prev.currentQuestionIndex + 1;
        if (prev.questions.length - nextIndex <= 10) {
          fetchTriviaQuestions();
        }
        return {
          ...prev,
          currentQuestionIndex: nextIndex,
          score: prev.score + 1,
        };
      });
    } else {
      toast.error("Wrong answer! Game over.");
      navigate("/results", {
        state: { quizState: quizState, completedQuiz: true },
      });
    }
  };

  if (isLoading) {
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

        {!quizState.quizStarted ? (
          <div className="flex flex-grow items-center justify-center">
            <button
              onClick={() => {
                setQuizState((prev) => ({
                  ...prev,
                  quizStarted: true,
                }));
                fetchTriviaQuestions();
              }}
              className="px-8 py-4 bg-green-600 text-white rounded hover:bg-green-500 text-xl"
            >
              Start Quiz
            </button>
          </div>
        ) : quizState.questions.length !== 0 ? (
          <div className="flex-grow flex flex-col items-center justify-center">
            <QuestionAndAnswers
              quizState={quizState}
              handleAnswer={handleAnswer}
            />
            <SkipBtn
              handleSkip={handleSkip}
              skipsRemaining={quizState.skipsRemaining}
            />
            <p className="text-3xl mt-5">Score: {quizState.score}</p>
            <Timer
              quizState={quizState}
              handleSkip={handleSkip}
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
