import { DefaultUrls } from "../models/enums";
import { MainRoutes, PageTemplate, SelectOption } from "../models/types";
import { GeneralForm } from "../pages/GeneralForm/GeneralForm";
import { OwnershipForm } from "../pages/OwnershipForm/OwnershipForm";
import { RegistrationAddressForm } from "../pages/RegistrationAddressForm/RegistrationAddressForm";
import { ResidentialAddressForm } from "../pages/ResidentialAddressForm/ResidentialAddressForm";
// import { SocialMediaForm } from "../pages/SocialMediaForm";

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
  // {
  //   url: DefaultUrls.socialMedia,
  //   title: "Сшциальные сети",
	// 	formText: 'Введите свои действуйющие ссылки на социальные сети и количество подписчиков.',
  //   component: SocialMediaForm,
  // },
];

export const mainRoutes: MainRoutes[] = [
	{
		id: 1,
		url: DefaultUrls.general,
		component: GeneralForm(),
	},
	{
		id: 2,
		url: DefaultUrls.ownership,
		component: OwnershipForm(),
	},
	{
		id: 3,
		url: DefaultUrls.registerAddress,
		component: RegistrationAddressForm(),
	},
	{
		id: 4,
		url: DefaultUrls.residentAddress,
		component: ResidentialAddressForm(),
	},
]

export const EmptySlectOption: SelectOption = {
	label: 'List is empty',
	value: 'empty',
}

export const cityOptions: SelectOption[] = [
	{
		value: "stPetersburg",
		label: "Санкт-Петербург",
	},
	{
		value: "moscow",
		label: "Москва",
	},
	{
		value: "kazan",
		label: "Казань",
	},
	{
		value: "novosibirsk",
		label: "Новосибирск",
	},
	{
		value: "vladivostok",
		label: "Владивосток",
	},
	{
		value: "sochi",
		label: "Сочи",
	},
]

export const citizenshipOptions: SelectOption[] = [
	{
		value: "rus",
		label: "Российское",
	},
	{
		value: "bel",
		label: "Белорусское",
	},
	{
		value: "usa",
		label: "Американское",
	},
	{
		value: "ger",
		label: "Немецкое",
	},
]

export const ownershipTypeOptions: SelectOption[] = [
	{
		value: "ip",
		label: "Индивидуальный предприниматель (ИП)",
	},
	{
		value: "ooo",
		label: "Общество с ограниченной ответственностью (ООО)",
	},
]

export const countryOptions: SelectOption[] = [
	{
		value: "rus",
		label: "Россия",
	},
	{
		value: "bel",
		label: "Беларусь",
	},
	{
		value: "usa",
		label: "США",
	},
	{
		value: "ger",
		label: "Германия",
	},
]

export const sexOptions: SelectOption[] = [
	{
		value: 'm',
		label: 'М',
	},
	{
		value: 'f',
		label: 'Ж',
	}
]

export const regionOptions: SelectOption[] = [
	{
		value: "a",
		label: "а",
	},
	{
		value: "b",
		label: "б",
	},
	{
		value: "c",
		label: "в",
	},
]