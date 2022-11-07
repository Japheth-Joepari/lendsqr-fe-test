import { CardProps } from "../types/card";

const Card = ({ image, title, content, style }: CardProps) => {
  return (
    <>
      <div className={"card" + style}>
        <img className="card-icon" src={image} alt="card-icon" />
        <h5>{title}</h5>
        <p>{content}</p>
      </div>
    </>
  );
};
export default Card;
