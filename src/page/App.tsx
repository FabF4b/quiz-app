import { useState } from "react";
import { QUIZ_QUESTIONS } from "./data/questions";
import QuizQuestion from "./components/quizQuiestion/QuizQuestion";
import type { Answer, Question, ValidateAnswerProps } from "../types";

function App() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isHintVisible, setIsHintVisible] = useState(false);
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion: Question = QUIZ_QUESTIONS[currentQuestionIndex];

  function handleShowHint() {
    setIsHintVisible(true);
    setIsAnswerVisible(false);
  }

  function handleShowAnswer() {
    setIsHintVisible(false);
    setIsAnswerVisible(true);
  }

  function nextQuestion() {
    if (currentQuestionIndex + 1 < QUIZ_QUESTIONS.length) {
      currentQuestionIndex++;
      setIsHintVisible(false);
      setIsAnswerVisible(false);
      setCurrentQuestionIndex(currentQuestionIndex);
    } else {
      currentQuestionIndex = 0;
      setIsHintVisible(false);
      setIsAnswerVisible(false);
      setCurrentQuestionIndex(currentQuestionIndex);
    }
  }

  function validateAnswer(answerId: ValidateAnswerProps) {
    setSelectedAnswer(answerId);
    const correctAnswer = currentQuestion.answers.find(
      (answer) => answer.isCorrect,
    );
    correctAnswer.id === answerId
      ? console.log("richtig")
      : console.log("falsch");
  }

  return (
    <div id="app">
      <QuizQuestion
        currentQuestion={currentQuestion}
        nextQuestion={nextQuestion}
        isHintVisible={isHintVisible}
        handleShowHint={handleShowHint}
        isAnswerVisible={isAnswerVisible}
        handleShowAnswer={handleShowAnswer}
        validateAnswer={validateAnswer}
      />
    </div>
  );
}

export default App;
