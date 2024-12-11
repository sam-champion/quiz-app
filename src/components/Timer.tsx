import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { TriviaQuestion } from "../types";

interface TimerProps {
  quizState: {
    quizStarted: boolean;
    questions: TriviaQuestion[];
    currentQuestionIndex: number;
    skipsRemaining: number;
    score: number;
  };
  handleSkip: () => void;
  initialTime: number;
}

const Timer: React.FC<TimerProps> = ({
  quizState,
  handleSkip,
  initialTime,
}) => {
  const { quizStarted, skipsRemaining, currentQuestionIndex } = quizState;
  const [timeRemaining, setTimeRemaining] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    if (!quizStarted) return;

    setTimeRemaining(initialTime);

    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 1) {
          if (skipsRemaining > 0) {
            setTimeout(handleSkip, 0);
          } else {
            navigate("/results", {
              state: { quizState: quizState, completedQuiz: true },
            });
          }
        }
        return Math.max(prevTime - 1, 0);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [quizStarted, currentQuestionIndex, skipsRemaining]);

  return (
    <div className="text-xl font-bold">
      <p>Time Remaining: {timeRemaining} seconds</p>
    </div>
  );
};

export default Timer;
