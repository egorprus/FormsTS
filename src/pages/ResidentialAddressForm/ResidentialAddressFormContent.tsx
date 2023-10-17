import { Checkbox } from "../../modules/Form/components/Checkbox/Checkbox";
import { CustomSelect } from "../../modules/Form/components/CustomSelect/CustomSelect";
import { InputText } from "../../modules/Form/components/InputText/InputText";
import { InputDate } from "../../modules/Form/components/InputDate/InputDate";
import { FieldNames } from "../../models/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const ResidentialAddressFormContent = () => {
  const { countryOptions, regionOptions } = useSelector(
    (state: RootState) => state.dictionary.dictionary
  );
  return (
    <form className="form field-container">
      <Checkbox {...FIELDS.addressStatus} />
      <CustomSelect {...FIELDS.registrationCountry} options={countryOptions} />
      <CustomSelect {...FIELDS.registrationRegion} options={regionOptions} />
      <InputText {...FIELDS.registrationCity} />
      <InputText {...FIELDS.registrationStreet} />
      <InputText {...FIELDS.registrationHouse} />
      <InputText {...FIELDS.registrationApartment} />
      <Checkbox {...FIELDS.registrationApartmentStatus} />
      <InputDate {...FIELDS.resAddressRegistrationDate} />
    </form>
  );
};

const FIELDS = {
  addressStatus: {
    name: FieldNames.addressStatus,
    label: "Адрес регистрации и фактического проживания совпадают",
  },
  registrationCountry: {
    name: FieldNames.registrationCountry,
    label: "Страна",
  },
  registrationRegion: {
    name: FieldNames.registrationRegion,
    label: "Регион",
  },
  registrationCity: {
    name: FieldNames.registrationCity,
    label: "Город / Населенный пункт",
  },
  registrationStreet: {
    name: FieldNames.registrationStreet,
    label: "Улица",
  },
  registrationHouse: {
    name: FieldNames.registrationHouse,
    label: "Дом",
  },
  registrationApartment: {
    name: FieldNames.registrationApartment,
    label: "Квартира",
  },
  registrationApartmentStatus: {
    name: FieldNames.registrationApartmentStatus,
    label: "нет квартиры",
  },
  resAddressRegistrationDate: {
    name: FieldNames.resAddressRegistrationDate,
    label: "Дата прописки",
  },
};
