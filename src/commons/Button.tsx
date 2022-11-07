import { ButtonProps } from "../types";

const Button = ({ type, style, text }: ButtonProps) => {
  return (
    <button type={type} className={"default" + style}>
      {text}
    </button>
  );
};
export default Button;
