import type { HintProps } from "../../../types";

function Hint({ text }: HintProps) {
  return (
    <div>
      <h4>HINWEIS:</h4>
      <em>{text}</em>
    </div>
  );
}

export default Hint;
