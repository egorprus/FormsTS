import { Checkbox } from "../../modules/Form/components/Checkbox/Checkbox";
import { CustomSelect } from "../../modules/Form/components/CustomSelect/CustomSelect";
import { InputText } from "../../modules/Form/components/InputText/InputText";
import { InputDate } from "../../modules/Form/components/InputDate/InputDate";
import { FieldNames } from "../../models/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useForm } from "../../hooks/Form/useForm";

export const ResidentialAddressFormContent = () => {
  const { countryOptions, regionOptions } = useSelector(
    (state: RootState) => state.dictionary.dictionary
  );
  const form = useSelector((state: RootState) => state.form.form);
  const {
    handleChangeInputText,
    handleChangeDate,
    handleChangeSelect,
    handleChangeCheckbox,
  } = useForm();

  return (
    <form className="form field-container">
      <Checkbox
        currentValue={form[FieldNames.addressStatus]}
        name={FieldNames.addressStatus}
        label="Адрес регистрации и фактического проживания совпадают"
        handleChange={handleChangeCheckbox}
      />
      <CustomSelect
        currentValue={form[FieldNames.registrationCountry]}
        name={FieldNames.registrationCountry}
        label="Страна"
        options={countryOptions}
        handleChange={handleChangeSelect}
      />
      <CustomSelect
        currentValue={form[FieldNames.registrationRegion]}
        name={FieldNames.registrationRegion}
        label="Регион"
        options={regionOptions}
        handleChange={handleChangeSelect}
      />
      <InputText
        currentValue={form[FieldNames.registrationCity]}
        name={FieldNames.registrationCity}
        label="Город / Населенный пункт"
        handleChange={handleChangeInputText}
      />
      <InputText
        currentValue={form[FieldNames.registrationStreet]}
        name={FieldNames.registrationStreet}
        label="Улица"
        handleChange={handleChangeInputText}
      />
      <InputText
        currentValue={form[FieldNames.registrationHouse]}
        name={FieldNames.registrationHouse}
        label="Дом"
        handleChange={handleChangeInputText}
      />
      <InputText
        currentValue={form[FieldNames.registrationApartment]}
        name={FieldNames.registrationApartment}
        label="Квартира"
        handleChange={handleChangeInputText}
      />
      <Checkbox
        currentValue={form[FieldNames.registrationApartmentStatus]}
        name={FieldNames.registrationApartmentStatus}
        label="нет квартиры"
        handleChange={handleChangeCheckbox}
      />
      <InputDate
        currentValue={form[FieldNames.resAddressRegistrationDate]}
        name={FieldNames.resAddressRegistrationDate}
        label="Дата прописки"
        handleChange={handleChangeDate}
      />
    </form>
  );
};
