import type { AnswersProps } from "../../../types";
import AnswerOption from "./answerOption/AnswerOption";
import "./Answers.scss";

function Answers({
  selectedAnswer,
  currentQuestion,
  validateAnswer,
}: AnswersProps) {
  function getButtonClass(answer) {
    if (!selectedAnswer) return "button";
    else if (answer.isCorrect) return "button__correct";
    else if (selectedAnswer === answer.id) return "button__wrong";
    else if (!answer.isCorrect) return "button";
  }

  return (
    <div className="answers">
      {currentQuestion.answers.map((answer) => (
        <AnswerOption
          validateAnswer={validateAnswer}
          className={getButtonClass(answer)}
          id={answer.id}
          text={answer.text}
        />
      ))}

      {/* <AnswerOption
        validateAnswer={validateAnswer}
        className="button"
        id={currentQuestion.answers[0].id}
        text={currentQuestion.answers[0].text}
      />
      <AnswerOption
        validateAnswer={validateAnswer}
        className="button"
        id={currentQuestion.answers[1].id}
        text={currentQuestion.answers[1].text}
      />
      <AnswerOption
        validateAnswer={validateAnswer}
        className="button"
        id={currentQuestion.answers[2].id}
        text={currentQuestion.answers[2].text}
      />
      <AnswerOption
        validateAnswer={validateAnswer}
        className="button"
        id={currentQuestion.answers[3].id}
        text={currentQuestion.answers[3].text}
      /> */}
    </div>
  );
}

export default Answers;
