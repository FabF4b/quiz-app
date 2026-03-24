import "./Question.scss";

function Question({ currentQuestion }) {
  return <h1 className="question">{currentQuestion.text}</h1>;
}

export default Question;
