export type TriviaQuestion = {
  id: string;
  category: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  question: {
    text: string;
  };
  tags: string[];
  type: string;
  difficulty: string;
  regions: string[];
  isNiche: boolean;
};

export type QuizState = {
  quizMode: "custom" | "challenge";
  quizStarted: boolean;
  questions: TriviaQuestion[];
  currentQuestionIndex: number;
  usedQuestionIds: Set<string>;
  livesRemaining: number;
  score: number;
};
