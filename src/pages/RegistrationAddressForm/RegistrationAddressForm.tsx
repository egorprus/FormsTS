import { CustomSelect } from "../../modules/Form/components/CustomSelect/CustomSelect";
import { InputText } from "../../modules/Form/components/InputText/InputText";
import { Checkbox } from "../../modules/Form/components/Checkbox/Checkbox";
import { InputDate } from "../../modules/Form/components/InputDate/InputDate";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useForm } from "../../hooks/useForm";
import { FieldNames } from "../../modules/Form/models";

export const RegistrationAddressForm = () => {
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
      />
      <InputText
        currentValue={form[FieldNames.street]}
        name={FieldNames.street}
        label="Улица"
        handleChange={handleChangeInputText}
      />
      <InputText
        currentValue={form[FieldNames.house]}
        name={FieldNames.house}
        label="Дом"
        handleChange={handleChangeInputText}
      />
      <InputText
        currentValue={form[FieldNames.apartment]}
        name={FieldNames.apartment}
        label="Квартира"
        handleChange={handleChangeInputText}
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
