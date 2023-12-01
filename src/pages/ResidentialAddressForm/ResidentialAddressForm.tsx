import { Checkbox, InputDate, InputText, CustomSelect } from "../../modules/Form/components/index";
import { useSelector } from "react-redux";
import { FieldNames } from "../../modules/Form/models";
import { dictionarySelector, formSelector } from "../../store/selectors";
import { useForm } from "../../modules/Form/hooks/useForm";
import { onlyLetters, onlyNumber } from "../../modules/Form/inputProcessing";

export const ResidentialAddressForm = () => {
  const { countryOptions, regionOptions } = useSelector(dictionarySelector);
  const form = useSelector(formSelector);
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
				inputProcessing={[onlyLetters]}
      />
      <InputText
        currentValue={form[FieldNames.registrationStreet]}
        name={FieldNames.registrationStreet}
        label="Улица"
        handleChange={handleChangeInputText}
				inputProcessing={[onlyLetters]}
      />
      <InputText
        currentValue={form[FieldNames.registrationHouse]}
        name={FieldNames.registrationHouse}
        label="Дом"
        handleChange={handleChangeInputText}
				inputProcessing={[onlyNumber]}
      />
      <InputText
        currentValue={form[FieldNames.registrationApartment]}
        name={FieldNames.registrationApartment}
        label="Квартира"
        handleChange={handleChangeInputText}
				inputProcessing={[onlyNumber]}
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
