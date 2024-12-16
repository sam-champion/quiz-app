import { useEffect, useState } from "react";
import { TriviaQuestion } from "../types";

interface QuestionAndAnswersProps {
  quizState: {
    quizStarted: boolean;
    questions: TriviaQuestion[];
    currentQuestionIndex: number;
    livesRemaining: number;
    score: number;
  };
  handleAnswer: (userAnswer: string) => void;
  isAnswering: boolean;
  setIsAnswering: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuestionAndAnswers: React.FC<QuestionAndAnswersProps> = ({
  quizState,
  handleAnswer,
  isAnswering,
  setIsAnswering,
}) => {
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState<boolean>(false);

  const { quizStarted, questions, currentQuestionIndex } = quizState;
  const currentQuestion = questions[currentQuestionIndex];

  const fisherYatesShuffle = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    if (quizStarted && questions.length > 0) {
      const answers = [
        ...currentQuestion.incorrectAnswers,
        currentQuestion.correctAnswer,
      ];
      setShuffledAnswers(fisherYatesShuffle(answers));
      setSelectedAnswer(null);
      setIsAnswering(false);
      setShowCorrectAnswer(false);
    }
  }, [currentQuestionIndex, questions, quizStarted]);

  const handleClick = (answer: string) => {
    if (selectedAnswer || isAnswering) return;
    setIsAnswering(true);
    setSelectedAnswer(answer);
    setShowCorrectAnswer(true);
    handleAnswer(answer);
  };

  const getButtonClass = (answer: string) => {
    if (selectedAnswer === answer) {
      return answer === currentQuestion.correctAnswer
        ? "border-4 border-green-500 bg-green-200"
        : "border-4 border-red-500 bg-red-200";
    }
    if (showCorrectAnswer && answer === currentQuestion.correctAnswer) {
      return "border-4 border-green-500 bg-green-200";
    }
    return isAnswering
      ? "border-4 border-indigo-700 bg-indigo-600 text-white"
      : "border-4 border-indigo-800 bg-gradient-to-b from-indigo-500 to-indigo-600 text-white focus:ring-2 focus:ring-white";
  };

  const getIcon = (answer: string) => {
    const isCorrect = answer === currentQuestion.correctAnswer;

    if (selectedAnswer === answer) {
      if (isCorrect) {
        return (
          <div className="absolute -top-4 -right-4 p-0.5 rounded-full bg-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="M382-218 130-470l75-75 177 177 375-375 75 75-450 450Z" />
            </svg>
          </div>
        );
      } else {
        return (
          <div className="absolute -top-4 -right-4 p-0.5 rounded-full bg-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="m252-176-74-76 227-228-227-230 74-76 229 230 227-230 74 76-227 230 227 228-74 76-227-230-229 230Z" />
            </svg>
          </div>
        );
      }
    }
    return null;
  };

  return (
    <>
      <h2 className="text-2xl text-center text-white font-bold mb-10 max-w-[80%]">
        {typeof currentQuestion.question === "string"
          ? currentQuestion.question
          : currentQuestion.question.text}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 max-w-[80%]">
        {shuffledAnswers.map((answer, index) => (
          <button
            className={`text-xl px-4 py-2 min-w-40 rounded-xl shadow-lg ${getButtonClass(
              answer
            )} relative`}
            key={index}
            onClick={() => handleClick(answer)}
            disabled={isAnswering}
          >
            {answer}
            {getIcon(answer)}
          </button>
        ))}
      </div>
    </>
  );
};

export default QuestionAndAnswers;
