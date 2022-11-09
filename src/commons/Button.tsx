import { ButtonProps } from "../types";

const Button = ({ type, className, text }: ButtonProps) => {
  return (
    <button type={type} className={"btn" + className}>
      {text}
    </button>
  );
};
export default Button;
