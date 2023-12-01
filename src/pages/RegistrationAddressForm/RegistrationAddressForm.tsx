import { Checkbox, InputDate, InputText, CustomSelect } from "../../modules/Form/components/index";
import { useSelector } from "react-redux";
import { FieldNames } from "../../modules/Form/models";
import { dictionarySelector, formSelector } from "../../store/selectors";
import { useForm } from "../../modules/Form/hooks/useForm";
import { onlyLetters, onlyNumber } from "../../modules/Form/inputProcessing";

export const RegistrationAddressForm = () => {
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
      <CustomSelect
        currentValue={form[FieldNames.country]}
        name={FieldNames.country}
        label="Страна"
        options={countryOptions}
        handleChange={handleChangeSelect}
      />
      <CustomSelect
        currentValue={form[FieldNames.region]}
        name={FieldNames.region}
        label="Регион"
        options={regionOptions}
        handleChange={handleChangeSelect}
      />
      <InputText
        currentValue={form[FieldNames.city]}
        name={FieldNames.city}
        label="Город / Населенный пункт"
        handleChange={handleChangeInputText}
				inputProcessing={[onlyLetters]}
      />
      <InputText
        currentValue={form[FieldNames.street]}
        name={FieldNames.street}
        label="Улица"
        handleChange={handleChangeInputText}
				inputProcessing={[onlyLetters]}
      />
      <InputText
        currentValue={form[FieldNames.house]}
        name={FieldNames.house}
        label="Дом"
        handleChange={handleChangeInputText}
				inputProcessing={[onlyNumber]}
      />
      <InputText
        currentValue={form[FieldNames.apartment]}
        name={FieldNames.apartment}
        label="Квартира"
        handleChange={handleChangeInputText}
				inputProcessing={[onlyNumber]}
      />
      <Checkbox
        currentValue={form[FieldNames.apartmentStatus]}
        name={FieldNames.apartmentStatus}
        label="нет квартиры"
        handleChange={handleChangeCheckbox}
      />
      <InputDate
        currentValue={form[FieldNames.registrationDate]}
        name={FieldNames.registrationDate}
        label="Дата прописки"
        handleChange={handleChangeDate}
      />
    </form>
  );
};
