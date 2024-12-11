import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import Navbar from "../components/Navbar";
import LoadingSpinner from "../components/LoadingSpinner";

function Results() {
  const navigate = useNavigate();
  const location = useLocation();
  const { quizState, completedQuiz } = location.state || {};
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!completedQuiz) {
      navigate("/");
    } else {
      setIsLoading(false);
    }
  }, [completedQuiz, navigate]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-custom-gradient">
        <LoadingSpinner />
      </div>
    );
  } else {
    return (
      <>
        <div className="h-screen bg-custom-gradient flex flex-col">
          <Navbar />
          <h1>Results</h1>
          <h2>Score: {quizState.score} </h2>
        </div>
      </>
    );
  }
}

export default Results;
