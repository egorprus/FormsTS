import { useSelector } from "react-redux";
import { FieldNames } from "../../modules/Form/models";
import { dictionarySelector, formSelector } from "../../store/selectors";
import { useForm } from "../../modules/Form/hooks/useForm";
import {
  CustomSelect,
  InputDate,
  InputText,
  RadioButton,
} from "../../modules/Form/components/index";
import { onlyLetters } from "../../modules/Form/inputProcessing";

export const GeneralForm = () => {
  const { citizenshipOptions, cityOptions, sexOptions } =
    useSelector(dictionarySelector);
  const form = useSelector(formSelector);
  const {
    handleChangeInputText,
    handleChangeSelect,
    handleChangeRadioButton,
    handleChangeDate,
  } = useForm();
  console.log(form[FieldNames.sex]);
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
        currentValue={form[FieldNames.sex]}
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
