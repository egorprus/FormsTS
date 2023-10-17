import { Link } from "react-router-dom";
import { PageTemplate } from "../../../models/types";

interface NavigationItemProp {
  page: PageTemplate;
  index: number;
  isActive: boolean;
}

export const NavigationItem = ({
  page,
  index,
  isActive,
}: NavigationItemProp) => {
  return (
    <li key={index}>
      <Link
        to={page.url}
        className={`navigation__link ${isActive && "navigation__link--active"}`}
      >
        <p className="navigation__link-text">{page.title}</p>
      </Link>
    </li>
  );
};
