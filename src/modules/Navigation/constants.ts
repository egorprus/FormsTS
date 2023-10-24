import { DefaultUrls } from "../../models/enums";
import { PageTemplate } from "../../models/types";

export const pages: PageTemplate[] = [
  {
    url: DefaultUrls.general,
    title: "Общие",
		formText: 'Введите свои персональные данные.',
  },
  {
    url: DefaultUrls.ownership,
    title: "Форма собственности",
		formText: 'Выберите форму собственности и заполните данные',
  },
  {
    url: DefaultUrls.registerAddress,
    title: "Адрес регистрации",
		formText: 'Введите свой действуйющий адрес прописки.',
  },
  {
    url: DefaultUrls.residentAddress,
    title: "Адрес проживания",
		formText: 'Введите свой действуйющий адрес проживания.',
  },
];