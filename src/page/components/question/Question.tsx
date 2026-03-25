import type { QuestionProps } from "../../../types";
import "./Question.scss";

function Question({ currentQuestion }: QuestionProps) {
  return <h1 className="question">{currentQuestion.text}</h1>;
}

export default Question;
