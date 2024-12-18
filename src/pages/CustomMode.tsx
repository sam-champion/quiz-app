import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { TriviaQuestion, QuizState } from "../types";

import LoadingSpinner from "../components/LoadingSpinner";
import Navbar from "../components/Navbar";
import QuestionAndAnswers from "../components/QuestionAndAnswers";

const CustomMode = () => {
  const navigate = useNavigate();
  const [difficulty, setDifficulty] = useState<string>("easy");
  const [category, setCategory] = useState<string>("General Knowledge");
  const [numberOfQuestions, setNumberOfQuestions] = useState<number>(10);
  const [quizState, setQuizState] = useState<QuizState>({
    quizMode: "custom",
    quizStarted: false,
    questions: [],
    currentQuestionIndex: 0,
    usedQuestionIds: new Set<string>(),
    livesRemaining: 0,
    score: 0,
  });
  const [isAnswering, setIsAnswering] = useState(false);

  const categoryMap: { [key: string]: string } = {
    "General Knowledge": "general_knowledge",
    Music: "music",
    "Sport & Leisure": "sport_and_leisure",
    "Film & TV": "film_and_tv",
    "Arts & Literature": "arts_and_literature",
    History: "history",
    "Society & Culture": "society_and_culture",
    Science: "science",
    Geography: "geography",
    "Food & Drink": "food_and_drink",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setQuizState((prev) => ({
      ...prev,
      quizStarted: true,
    }));

    fetchTriviaQuestions();
  };

  const fetchTriviaQuestions = async () => {
    try {
      const response = await fetch(
        `https://the-trivia-api.com/api/questions?categories=${category}&difficulty=${difficulty}&limit=${numberOfQuestions}`
      );
      const questions: TriviaQuestion[] = await response.json();
      console.log(questions);

      if (!questions || questions.length === 0) {
        throw new Error("No questions found.");
      }

      setQuizState((prev) => ({
        ...prev,
        questions: [...questions],
        usedQuestionIds: new Set([...questions.map((q) => q.id)]),
      }));
    } catch (error) {
      console.error("Failed to fetch trivia questions:", error);
      toast.error("Failed to load questions. Please try again.");
    }
  };

  const handleAnswer = (userAnswer: string) => {
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    const isCorrect = userAnswer === currentQuestion.correctAnswer;

    setQuizState((prev) => ({
      ...prev,
      score: prev.score + (isCorrect ? 1 : 0),
    }));

    setTimeout(() => {
      setQuizState((prev) => {
        const isLastQuestion =
          prev.currentQuestionIndex === prev.questions.length - 1;

        if (isLastQuestion) {
          navigate("/results", {
            state: { quizState: prev, completedQuiz: true },
          });
          return prev;
        }

        return {
          ...prev,
          currentQuestionIndex: prev.currentQuestionIndex + 1,
        };
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-custom-gradient flex flex-col">
      <Navbar />
      {!quizState.quizStarted ? (
        <>
          <div className="flex justify-end items-center mx-auto max-w-6xl w-full pt-5">
            <button
              className="mx-5 px-3 py-2 bg-gradient-to-b from-gray-500 to-slate-600 text-white rounded-xl shadow-lg focus:ring-2 focus:ring-white"
              onClick={() => navigate("/")}
            >
              <div className="flex flex-row items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  height="16px"
                  width="16px"
                  fill="currentColor"
                  className="text-white"
                >
                  <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
                </svg>
                <span className="ms-1 text-xs">Back</span>
              </div>
            </button>
          </div>
          <div className="flex flex-grow items-center justify-center px-4 sm:px-6">
            <form
              className="px-5 pb-5 max-w-md w-full flex flex-col items-center"
              onSubmit={handleSubmit}
            >
              <h2 className="my-5 text-3xl sm:text-4xl font-bold text-yellow-300 text-center">
                Create Your Quiz
              </h2>
              <div className="w-full mb-5">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-white"
                >
                  Category:
                </label>
                <select
                  id="category"
                  className="block w-full text-lg h-10 mt-1 rounded-md bg-opacity-20 bg-white text-white border-white border-2 shadow-md"
                  value={Object.keys(categoryMap).find(
                    (key) => categoryMap[key] === category
                  )}
                  onChange={(e) => setCategory(categoryMap[e.target.value])}
                >
                  {Object.keys(categoryMap).map((displayName) => (
                    <option key={displayName} value={displayName}>
                      {displayName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full mb-5">
                <label
                  htmlFor="difficulty"
                  className="block text-sm font-medium text-white"
                >
                  Difficulty:
                </label>
                <select
                  id="difficulty"
                  className="block w-full text-lg h-10 mt-1 rounded-md bg-opacity-20 bg-white text-white border-white border-2 shadow-md"
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              <div className="w-full mb-8">
                <label
                  htmlFor="numQuestions"
                  className="block text-sm font-medium text-white"
                >
                  Number of Questions:
                </label>
                <select
                  id="numQuestions"
                  className="block w-full text-lg h-10 mt-1 rounded-md bg-opacity-20 bg-white text-white border-white border-2 shadow-md"
                  value={numberOfQuestions}
                  onChange={(e) =>
                    setNumberOfQuestions(parseInt(e.target.value))
                  }
                >
                  {[5, 10, 15, 20, 25, 50].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full sm:w-60 py-3 mb-5 bg-gradient-to-b from-green-500 to-green-600 text-white font-medium text-lg rounded-xl shadow-md focus:ring-2 focus:ring-white"
              >
                Start Quiz
              </button>
            </form>
          </div>
        </>
      ) : quizState.questions.length !== 0 ? (
        <div className="flex-grow flex flex-col items-center justify-center py-10">
          <div className="flex flex-col justify-center items-center space-y-2 mb-10">
            <h2 className="text-3xl font-bold text-yellow-300">Question:</h2>
            <p className="text-xl font-semibold text-yellow-300 mt-5">{`${
              quizState.currentQuestionIndex + 1
            } of ${quizState.questions.length}`}</p>
          </div>
          <QuestionAndAnswers
            quizState={quizState}
            handleAnswer={handleAnswer}
            isAnswering={isAnswering}
            setIsAnswering={setIsAnswering}
          />
        </div>
      ) : (
        <div className="flex flex-grow h-full items-center justify-center">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};

export default CustomMode;
