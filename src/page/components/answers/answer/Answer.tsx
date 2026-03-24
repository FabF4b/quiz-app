import type { AnswerProps } from "../../../../types";

function Answer({ text }: AnswerProps) {
  return (
    <div>
      <h4>ANTWORT:</h4>
      <em>{text}</em>
    </div>
  );
}

export default Answer;
