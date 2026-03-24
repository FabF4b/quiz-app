import Button from "../../../components/button/Button";
import type { QuizQuestionProps } from "../../../types";
import Answer from "../answers/answer/Answer";
import Answers from "../answers/Answers";
import Hint from "../hint/Hint";
import Question from "../question/Question";

import "./QuizQuestion.scss";

function QuizQuestion({
  currentQuestion,
  nextQuestion,
  isHintVisible,
  handleShowHint,
  isAnswerVisible,
  validateAnswer,
  handleShowAnswer,
}: QuizQuestionProps) {
  return (
    <div className="quiz-question">
      <Question currentQuestion={currentQuestion} />
      <Answers
        currentQuestion={currentQuestion}
        validateAnswer={validateAnswer}
      />
      {isHintVisible && (
        <div className="quiz-question__hint">
          <Hint text={currentQuestion.hint} />
        </div>
      )}
      {isAnswerVisible && (
        <div className="quiz-question__answer">
          <Answer
            text={
              currentQuestion.answers.find((answer) => answer.isCorrect)?.info
            }
          />
        </div>
      )}
      <div className="quiz-question__resolve-buttons">
        <Button className="button" text="Hinweis" clickEvent={handleShowHint} />
        <Button
          className="button"
          text="Lösung"
          clickEvent={handleShowAnswer}
        />
      </div>
      <div className="quiz-question__next-button">
        <Button
          className="button"
          text="Nächste Frage"
          clickEvent={nextQuestion}
        />
      </div>
    </div>
  );
}

export default QuizQuestion;
