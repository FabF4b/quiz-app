import type { AnswerProps } from "../../../../types";

function Answer({ text }: AnswerProps) {
  return (
    <div>
      <h4>ANTWORT:</h4>
      <p>{text}</p>
    </div>
  );
}

export default Answer;
