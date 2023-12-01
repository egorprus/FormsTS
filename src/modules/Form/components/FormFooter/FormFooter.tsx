import { useEffect, useState } from "react";
import { DefaultUrls } from "../../../../models/enums";
import { ButtonLink } from "../index";
import { validateForm } from "../../validation";

interface Prop {
  pathname: string;
}
const urlList = Object.values(DefaultUrls);

export const FormFooter = ({ pathname }: Prop) => {
  const [nextForm, setNextForm] = useState<DefaultUrls>(urlList[1]);
  const [prevForm, setPrevForm] = useState<DefaultUrls>(urlList[0]);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  useEffect(() => {
    const currentIndex = urlList.findIndex((url) => url === pathname);
    currentIndex > 0 && setPrevForm(urlList[currentIndex - 1]);
    currentIndex < urlList.length - 1 && setNextForm(urlList[currentIndex + 1]);
    if (pathname === urlList[urlList.length - 1]) {
      setIsEnd(true);
    } else {
      setIsEnd(false);
    }
  }, [pathname]);

  return (
    <div className="form__footer">
      <ButtonLink
        disable={prevForm === pathname}
        url={prevForm}
        text="Назад"
      />
      <ButtonLink
        disable={nextForm === pathname}
        url={nextForm}
        text={`${isEnd ? "Сохранить" : "Далее"}`}
				handleClick={() => validateForm(pathname)}
      />
    </div>
  );
};
