import { Link } from "react-router-dom";
import './style.css';

interface Prop {
	url: string,
	disable: boolean,
	text: string,
}

export const ButtonLink = ({url, disable, text}: Prop) => {
	return (
		<Link className={`button-link${disable ? ' btn-disabled' : ''}`} to={`${url || '#'}`}>{text}</Link>
	);
};