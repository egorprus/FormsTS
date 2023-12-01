import { Link } from "react-router-dom";
import "./style.css";

interface Prop {
  url: string;
  disable: boolean;
  text: string;
  handleClick?: () => void;
}

const ButtonLink = ({ url, disable, text, handleClick }: Prop) => {
  return (
    <Link
      className={`button-link${disable ? " btn-disabled" : ""}`}
      to={`${url || "#"}`}
			onClick={handleClick}
    >
      {text}
    </Link>
  );
};

export default ButtonLink;
