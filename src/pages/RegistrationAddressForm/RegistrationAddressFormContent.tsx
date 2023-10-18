import { CustomSelect } from "../../modules/Form/components/CustomSelect/CustomSelect";
import { InputText } from "../../modules/Form/components/InputText/InputText";
import { Checkbox } from "../../modules/Form/components/Checkbox/Checkbox";
import { InputDate } from "../../modules/Form/components/InputDate/InputDate";
import { FieldNames } from "../../models/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const RegistrationAddressFormContent = () => {
  const { countryOptions, regionOptions } = useSelector(
    (state: RootState) => state.dictionary.dictionary
  );
  return (
    <form className="form field-container">
      <CustomSelect {...FIELDS.country} options={countryOptions} />
      <CustomSelect {...FIELDS.region} options={regionOptions} />
      <InputText {...FIELDS.city} />
      <InputText {...FIELDS.street} />
      <InputText {...FIELDS.house} />
      <InputText {...FIELDS.apartment} />
      <Checkbox {...FIELDS.apartmentStatus} />
      <InputDate {...FIELDS.registrationDate} />
    </form>
  );
};

const FIELDS = {
  country: {
    name: FieldNames.country,
    label: "Страна",
  },
  region: {
    name: FieldNames.region,
    label: "Регион",
  },
  city: {
    name: FieldNames.city,
    label: "Город / Населенный пункт",
  },
  street: {
    name: FieldNames.street,
    label: "Улица",
  },
  house: {
    name: FieldNames.house,
    label: "Дом",
  },
  apartment: {
    name: FieldNames.apartment,
    label: "Квартира",
  },
  apartmentStatus: {
    name: FieldNames.apartmentStatus,
    label: "нет квартиры",
  },
  registrationDate: {
    name: FieldNames.registrationDate,
    label: "Дата прописки",
  },
};
