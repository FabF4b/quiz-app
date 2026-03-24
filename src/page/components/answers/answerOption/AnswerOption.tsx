import Button from "../../../../components/button/Button";
import type { AnswerOptionProps } from "../../../../types";

function AnswerOption({ text, id, validateAnswer }: AnswerOptionProps) {
  return (
    <Button
      className="button"
      text={text}
      id={id}
      clickEvent={validateAnswer}
    />
  );
}

export default AnswerOption;
