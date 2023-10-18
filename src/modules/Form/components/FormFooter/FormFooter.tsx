import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { mainRoutes } from "../../../../constants";

export const FormFooter = () => {
  const location = useLocation();
  const [nextForm, setNextForm] = useState({});
  const [prevForm, setPrevForm] = useState({});

  useEffect(() => {
    const currentIndex = mainRoutes.findIndex(
      (page) => page.url === location.pathname
    );
    currentIndex > 0 && setPrevForm(mainRoutes[currentIndex - 1].url ?? 0);
    currentIndex < mainRoutes.length - 1 &&
      setNextForm(mainRoutes[currentIndex + 1].url);
  }, [location.pathname]);

  return (
    <div className="form__footer">
      <Link to={prevForm}>Назад</Link>
      <Link to={nextForm}>Далее</Link>
    </div>
  );
};
