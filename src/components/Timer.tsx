import { useEffect, useState } from "react";

interface TimerProps {
  quizStarted: boolean;
  currentQuestionIndex: number;
  skipsRemaining: number;
  handleSkip: () => void;
  resetQuizState: () => void;
  initialTime: number;
}

const Timer: React.FC<TimerProps> = ({
  quizStarted,
  currentQuestionIndex,
  skipsRemaining,
  handleSkip,
  resetQuizState,
  initialTime,
}) => {
  const [timeRemaining, setTimeRemaining] = useState(30);

  useEffect(() => {
    if (!quizStarted) return;

    setTimeRemaining(initialTime);

    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 1) {
          if (skipsRemaining > 0) {
            setTimeout(handleSkip, 0);
          } else {
            setTimeout(resetQuizState, 0);
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
