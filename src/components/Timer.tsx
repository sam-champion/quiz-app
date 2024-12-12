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
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const navigate = useNavigate();

  const progressPercentage = (timeRemaining / initialTime) * 100;

  useEffect(() => {
    if (!quizStarted) return;

    setTimeRemaining(initialTime);

    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
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
    <div className="flex justify-center items-center">
      <svg width="85" height="85" viewBox="0 0 36 36" className="relative">
        {/* Background Circle */}
        <circle
          cx="18"
          cy="18"
          r="15.91549431"
          fill="none"
          stroke="#e6e6e6"
          strokeWidth="2.5"
        />
        {/* Progress Circle */}
        <circle
          cx="18"
          cy="18"
          r="15.91549431"
          fill="none"
          stroke="#4caf50"
          strokeWidth="2.5"
          strokeDasharray="100, 100"
          strokeDashoffset={`${100 - progressPercentage}`}
          strokeLinecap="round"
          transform="rotate(-90 18 18)"
          style={{
            transition: "stroke-dashoffset 1s linear",
          }}
        />
        {/* Center Text */}
        <text
          x="18"
          y="18"
          textAnchor="middle"
          dy=".3em"
          fontSize="8"
          fontWeight="bold"
          fill="#333"
        >
          0:{timeRemaining}
        </text>
      </svg>
    </div>
  );
};

export default Timer;
