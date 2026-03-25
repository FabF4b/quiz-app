import type { HintProps } from "../../../types";

function Hint({ text }: HintProps) {
  return (
    <div>
      <h4>HINWEIS:</h4>
      <p>{text}</p>
    </div>
  );
}

export default Hint;
