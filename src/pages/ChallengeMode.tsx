import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { TriviaQuestion, QuizState } from "../types";

import LoadingSpinner from "../components/LoadingSpinner";
import Navbar from "../components/Navbar";
import SkipBtn from "../components/SkipBtn";
import Timer from "../components/Timer";
import QuestionAndAnswers from "../components/QuestionAndAnswers";

function ChallengeMode() {
  const navigate = useNavigate();
  const [quizState, setQuizState] = useState<QuizState>({
    quizStarted: false,
    questions: [],
    currentQuestionIndex: 0,
    usedQuestionIds: new Set<string>(),
    skipsRemaining: 3,
    score: 0,
  });

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
    const isCorrect = userAnswer === currentQuestion.correctAnswer;

    setQuizState((prev) => ({
      ...prev,
      score: prev.score + (isCorrect ? 1 : 0),
    }));

    if (isCorrect) {
      setTimeout(() => {
        setQuizState((prev) => {
          const nextIndex = prev.currentQuestionIndex + 1;
          if (prev.questions.length - nextIndex <= 10) {
            fetchTriviaQuestions();
          }
          return {
            ...prev,
            currentQuestionIndex: nextIndex,
          };
        });
      }, 1500);
    } else {
      toast.error("Wrong answer! Game over.");
      setTimeout(() => {
        navigate("/results", {
          state: { quizState: quizState, completedQuiz: true },
        });
      }, 1500);
    }
  };

  return (
    <div className="min-h-full bg-custom-gradient flex flex-col">
      <Navbar />
      {!quizState.quizStarted ? (
        <div className="flex flex-col flex-grow items-center justify-center p-6 mx-auto">
          {/* Game Mode Description */}
          <h1 className="text-4xl sm:text-5xl font-bold text-yellow-300 mb-10">
            Welcome to Challenge Mode!
          </h1>

          <div className="bg-opacity-20 bg-white rounded-xl space-y-5 px-10 py-10">
            <p className="text-2xl text-white font-bold opacity-80 text-center">
              Here’s how it works:
            </p>
            <div className="flex items-center space-x-4 justify-left">
              <span className="bg-white bg-opacity-50 text-slate-800 rounded-full min-h-14 min-w-14 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584l.013-.012.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354-.012.012A6.97 6.97 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0" />
                </svg>
              </span>
              <p className="text-lg sm:text-xl text-white opacity-70 font-semibold">
                Think fast! You only have 15 seconds per question.
              </p>
            </div>

            <div className="flex items-center space-x-4 justify-left">
              <span className="bg-white bg-opacity-50 text-slate-800 rounded-full min-h-14 min-w-14 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  viewBox="0 -1 16 16"
                >
                  <path d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586M7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77" />
                </svg>
              </span>
              <p className="text-lg sm:text-xl text-white opacity-70 font-semibold">
                Choose wisely, each wrong answer costs a life!
              </p>
            </div>

            <div className="flex items-center space-x-4 justify-left">
              <span className="bg-white bg-opacity-50 text-slate-800 rounded-full min-h-14 min-w-14 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935" />
                </svg>
              </span>
              <p className="text-lg sm:text-xl text-white opacity-70 font-semibold">
                Get your name on the leaderboard and see how you compare!
              </p>
            </div>
            {/* Start Quiz Button */}
            <div className="flex items-center justify-center">
              <button
                onClick={() => {
                  setQuizState((prev) => ({
                    ...prev,
                    quizStarted: true,
                  }));
                  fetchTriviaQuestions();
                }}
                className="px-8 py-3 sm:w-60 bg-gradient-to-b from-green-500 to-green-600 text-white rounded-xl text-xl font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all"
              >
                Start Quiz
              </button>
            </div>
          </div>
        </div>
      ) : quizState.questions.length !== 0 ? (
        <div className="flex-grow flex flex-col items-center justify-center">
          <Timer
            quizState={quizState}
            handleSkip={handleSkip}
            initialTime={15}
          />
          <QuestionAndAnswers
            quizState={quizState}
            handleAnswer={handleAnswer}
          />
          <SkipBtn
            handleSkip={handleSkip}
            skipsRemaining={quizState.skipsRemaining}
          />
          <p className="text-3xl mb-5" style={{ textAnchor: "middle" }}>
            Score: {quizState.score}
          </p>
        </div>
      ) : (
        <div className="flex flex-grow h-full items-center justify-center">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
}
export default ChallengeMode;
