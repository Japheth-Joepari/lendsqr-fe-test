import { InputProps } from "../types/input";

const Input = ({ type, style, value, name }: InputProps) => {
  return (
    <>
      <input
        type={type}
        className={"defaultInput" + style}
        value={value}
        name={name}
      />
    </>
  );
};
export default Input;
