import "./styles.css";
import { NavigationItem } from "./components/NavigationItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { pages } from "./constants";

export const Navigation = () => {
  const { currentPage } = useSelector((state: RootState) => state.form);

  return (
    <div className="navigation-wrapper">
      <menu className="navigation">
        <h2 className="navigation__title">Создание аккаунта</h2>
        <p className="navigation__text">
          Заполните все пункты данной формы и нажмите кнопку «Сохранить».
        </p>
        <ul className="navigation__list">
          {pages.map((page, index) => (
            <NavigationItem
              page={page}
              key={index}
              index={index + 1}
              isActive={page.url === currentPage?.url}
            />
          ))}
        </ul>
      </menu>
    </div>
  );
};
