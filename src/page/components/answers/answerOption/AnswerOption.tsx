import Button from "../../../../components/button/Button";
import type { AnswerOptionProps } from "../../../../types";

function AnswerOption({
  text,
  id,
  validateAnswer,
  className,
}: AnswerOptionProps) {
  return (
    <Button
      className={className}
      text={text}
      id={id}
      clickEvent={validateAnswer}
    />
  );
}

export default AnswerOption;
