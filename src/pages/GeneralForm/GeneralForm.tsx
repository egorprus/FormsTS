import { InputText } from "../../modules/Form/components/InputText/InputText";
import { CustomSelect } from "../../modules/Form/components/CustomSelect/CustomSelect";
import { RadioButton } from "../../modules/Form/components/RadioButton/RadioButton";
import { InputDate } from "../../modules/Form/components/InputDate/InputDate";
import { onlyLetters } from "../../modules/Form/validation";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useForm } from "../../hooks/useForm";
import { FieldNames } from "../../modules/Form/models";

export const GeneralForm = () => {
  const { citizenshipOptions, cityOptions, sexOptions } = useSelector(
    (state: RootState) => state.dictionary.dictionary
  );
  const form = useSelector((state: RootState) => state.form.form);
  const {
    handleChangeInputText,
    handleChangeSelect,
    handleChangeRadioButton,
    handleChangeDate,
  } = useForm();

  return (
    <form className="form field-container">
      <InputText
        currentValue={form[FieldNames.lastName]}
        name={FieldNames.lastName}
        label="Фамилия"
        placeholder="Васильев"
        inputProcessing={[onlyLetters]}
        handleChange={handleChangeInputText}
      />
      <InputText
        currentValue={form[FieldNames.firstName]}
        name={FieldNames.firstName}
        label="Имя"
        placeholder="Иван"
        inputProcessing={[onlyLetters]}
        handleChange={handleChangeInputText}
      />
      <InputText
        currentValue={form[FieldNames.middleName]}
        name={FieldNames.middleName}
        label="Отчество"
        placeholder="Сергеевич"
        inputProcessing={[onlyLetters]}
        handleChange={handleChangeInputText}
      />
      <CustomSelect
        currentValue={form[FieldNames.mainCity]}
        name={FieldNames.mainCity}
        label="Основной город"
        options={cityOptions}
        handleChange={handleChangeSelect}
      />
      <CustomSelect
        currentValue={form[FieldNames.citizenship]}
        name={FieldNames.citizenship}
        label="Гражданство"
        options={citizenshipOptions}
        handleChange={handleChangeSelect}
      />
      <RadioButton
        currentValue={form[FieldNames.sex]?.value}
        name={FieldNames.sex}
        label="Пол"
        options={sexOptions}
        handleChange={handleChangeRadioButton}
      />
      <InputDate
        currentValue={form[FieldNames.dob]}
        name={FieldNames.dob}
        label="Дата рождения"
        handleChange={handleChangeDate}
      />
      <InputText
        currentValue={form[FieldNames.placeOfBirth]}
        name={FieldNames.placeOfBirth}
        label="Место рождения (как указано в паспорте)"
        inputProcessing={[onlyLetters]}
        handleChange={handleChangeInputText}
      />
    </form>
  );
};
