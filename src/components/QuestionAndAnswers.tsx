import { useEffect, useState } from "react";
import { TriviaQuestion } from "../types";

interface QuestionAndAnswersProps {
  quizState: {
    quizStarted: boolean;
    questions: TriviaQuestion[];
    currentQuestionIndex: number;
    skipsRemaining: number;
    score: number;
  };
  handleAnswer: (userAnswer: string) => void;
}

const QuestionAndAnswers: React.FC<QuestionAndAnswersProps> = ({
  quizState,
  handleAnswer,
}) => {
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);
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
    }
  }, [currentQuestionIndex, questions, quizStarted]);

  return (
    <>
      <h2 className="text-2xl text-center font-bold mb-10 max-w-[80%]">
        {currentQuestion.question.text}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 max-w-[80%]">
        {shuffledAnswers.map((answer, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
            onClick={() => handleAnswer(answer)}
          >
            {answer}
          </button>
        ))}
      </div>
    </>
  );
};

export default QuestionAndAnswers;
