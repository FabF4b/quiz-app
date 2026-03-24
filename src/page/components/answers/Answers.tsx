import type { AnswersProps } from "../../../types";
import AnswerOption from "./answerOption/AnswerOption";
import "./Answers.scss";

function Answers({ currentQuestion, validateAnswer }: AnswersProps) {
  return (
    <div className="answers">
      <AnswerOption
        validateAnswer={validateAnswer}
        id={currentQuestion.answers[0].id}
        text={currentQuestion.answers[0].text}
      />
      <AnswerOption
        validateAnswer={validateAnswer}
        id={currentQuestion.answers[1].id}
        text={currentQuestion.answers[1].text}
      />
      <AnswerOption
        validateAnswer={validateAnswer}
        id={currentQuestion.answers[2].id}
        text={currentQuestion.answers[2].text}
      />
      <AnswerOption
        validateAnswer={validateAnswer}
        id={currentQuestion.answers[3].id}
        text={currentQuestion.answers[3].text}
      />
    </div>
  );
}

export default Answers;
