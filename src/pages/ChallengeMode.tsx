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
