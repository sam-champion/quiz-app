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
  const [resetKey, setResetKey] = useState(0);
  const [scale, setScale] = useState(1);
  const navigate = useNavigate();

  const progressPercentage = (timeRemaining / initialTime) * 100;

  useEffect(() => {
    if (!quizStarted) return;

    setTimeRemaining(initialTime);
    setResetKey((prev) => prev + 1);

    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime < 0.2) {
          if (skipsRemaining > 0) {
            setTimeout(handleSkip, 0);
          } else {
            navigate("/results", {
              state: { quizState: quizState, completedQuiz: true },
            });
          }
        }
        return Math.max(prevTime - 0.2, 0);
      });
    }, 200);

    return () => clearInterval(interval);
  }, [quizStarted, currentQuestionIndex, skipsRemaining]);

  useEffect(() => {
    if (timeRemaining <= 3 && timeRemaining > 0.2) {
      setScale(1.5);
      setTimeout(() => {
        setScale(1);
      }, 300);
    }
  }, [Math.ceil(timeRemaining)]);

  return (
    <div className="flex justify-center items-center mb-5">
      <svg
        key={resetKey}
        width="70"
        height="70"
        viewBox="0 0 36 36"
        className="relative"
      >
        {/* Background Circle */}
        <circle
          cx="18"
          cy="18"
          r="15.91549431"
          fill="none"
          stroke="#fce7f3"
          strokeWidth="4"
        />
        {/* Progress Circle */}
        <circle
          cx="18"
          cy="18"
          r="15.91549431"
          fill="none"
          stroke="#4f46e5"
          strokeWidth="4"
          strokeDasharray="100, 100"
          strokeDashoffset={`${100 - progressPercentage}`}
          strokeLinecap="round"
          transform="rotate(-90 18 18)"
          style={{
            transition: "stroke-dashoffset 0.2s linear",
          }}
        />
        {/* Center Text */}
        <text
          x="18"
          y="18"
          textAnchor="middle"
          dy=".3em"
          fontSize="12"
          fontWeight="bold"
          fill="white"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center",
            transition: "transform 0.3s ease",
          }}
        >
          {Math.ceil(timeRemaining)}
        </text>
      </svg>
    </div>
  );
};

export default Timer;
