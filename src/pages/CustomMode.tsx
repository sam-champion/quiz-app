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
    quizStarted: false,
    questions: [],
    currentQuestionIndex: 0,
    usedQuestionIds: new Set<string>(),
    skipsRemaining: 0,
    score: 0,
  });

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
      if (quizState.currentQuestionIndex === quizState.questions.length - 1) {
        navigate("/results", {
          state: { quizState, completedQuiz: true },
        });
        return;
      }
      setQuizState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      }));
    }, 1500);
  };

  return (
    <div className="h-screen bg-custom-gradient flex flex-col">
      <Navbar />
      {!quizState.quizStarted ? (
        <div className="flex flex-grow items-center justify-center">
          <form
            className="flex flex-col justify-center min-w-[25%] space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                className="block text-sm/6 font-medium text-gray-900"
                htmlFor="category"
              >
                Category:
              </label>
              <select
                id="category"
                className="block w-full rounded-md bg-white px-3 py-1.5 shadow-md text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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

            <div>
              <label
                className="block text-sm/6 font-medium text-gray-900"
                htmlFor="difficulty"
              >
                Difficulty:
              </label>
              <select
                id="difficulty"
                className="block w-full rounded-md bg-white px-3 py-1.5 shadow-md text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            <div>
              <label
                className="block text-sm/6 font-medium text-gray-900"
                htmlFor="numQuestions"
              >
                Number of Questions:
              </label>
              <select
                id="numQuestions"
                className="block w-full rounded-md bg-white px-3 py-1.5 shadow-md text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                value={numberOfQuestions}
                onChange={(e) => setNumberOfQuestions(parseInt(e.target.value))}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
            </div>

            <button
              className="px-8 py-4 bg-green-600 text-white rounded hover:bg-green-500 text-xl"
              type="submit"
            >
              Start Quiz
            </button>
          </form>
        </div>
      ) : quizState.questions.length !== 0 ? (
        <div className="flex-grow flex flex-col items-center justify-center">
          <QuestionAndAnswers
            quizState={quizState}
            handleAnswer={handleAnswer}
          />
          <p className="text-3xl mt-5">Score: {quizState.score}</p>
          <p className="text-3xl mt-5">{`${
            quizState.currentQuestionIndex + 1
          } of ${quizState.questions.length}`}</p>
        </div>
      ) : (
        <div className="flex h-full items-center justify-center">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};

export default CustomMode;
