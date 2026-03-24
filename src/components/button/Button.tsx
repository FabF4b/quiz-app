import type { ButtonProps } from "../../types";
import "./Button.scss";

function Button({ className, text, id, clickEvent }: ButtonProps) {
  return (
    <button className={className} onClick={() => clickEvent(id)}>
      {text}
    </button>
  );
}

export default Button;
