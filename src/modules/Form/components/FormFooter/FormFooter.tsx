import { useEffect, useState } from "react";
import { Location } from "react-router-dom";
import { DefaultUrls } from "../../../../models/enums";
import { ButtonLink } from "../ButtonLink/ButtonLink";

interface Prop {
	location: Location<any>;
}
const urlList = Object.values(DefaultUrls);

export const FormFooter = ({location}: Prop) => {
  const [nextForm, setNextForm] = useState<DefaultUrls>(urlList[1]);
  const [prevForm, setPrevForm] = useState<DefaultUrls>(urlList[0]);

  useEffect(() => {
    const currentIndex = urlList.findIndex((url) => url === location.pathname);
    currentIndex > 0 && setPrevForm(urlList[currentIndex - 1]);
    currentIndex < urlList.length - 1 &&
      setNextForm(urlList[currentIndex + 1]);
  }, [location.pathname]);

  return (
    <div className="form__footer">
			<ButtonLink disable={prevForm === location.pathname} url={prevForm} text="Назад" />
			<ButtonLink disable={nextForm === location.pathname} url={nextForm} text="Далее" />
    </div>
  );
};
