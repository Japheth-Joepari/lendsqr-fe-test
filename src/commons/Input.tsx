import { InputProps } from "../types/input";

const Input = ({ type, className, value, name }: InputProps) => {
  return (
    <>
      <input type={type} className={"input"} value={value} name={name} />
    </>
  );
};
export default Input;
