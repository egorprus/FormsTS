import { InputText } from "../../modules/Form/components/InputText/InputText";
import { CustomSelect } from "../../modules/Form/components/CustomSelect/CustomSelect";
import { RadioButton } from "../../modules/Form/components/RadioButton/RadioButton";
import { InputDate } from "../../modules/Form/components/InputDate/InputDate";
import {
  minLength,
  onlyLetters,
  required,
} from "../../modules/Form/validation";
import { FieldNames } from "../../models/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const GeneralFormContent = () => {
  const { citizenshipOptions, cityOptions, sexOptions } = useSelector(
    (state: RootState) => state.dictionary.dictionary
  );

  return (
    <form className="form field-container">
      <InputText {...FIELDS.lastName} />
      <InputText {...FIELDS.firstName} />
      <InputText {...FIELDS.middleName} />
      <CustomSelect {...FIELDS.mainCity} options={cityOptions} />
      <CustomSelect {...FIELDS.citizenship} options={citizenshipOptions} />
      <RadioButton {...FIELDS.sex} options={sexOptions} />
      <InputDate {...FIELDS.dob} />
      <InputText {...FIELDS.placeOfBirth} />
    </form>
  );
};

const FIELDS = {
  lastName: {
    name: FieldNames.lastName,
    label: "Фамилия",
    placeholder: "Васильев",
    validate: {
      min: minLength(3),
      required: required,
    },
    inputProcessing: [onlyLetters],
  },
  firstName: {
    name: FieldNames.firstName,
    label: "Имя",
    placeholder: "Иван",
    validate: {
      min: minLength(3),
      required: required,
    },
		inputProcessing: [onlyLetters],
  },
  middleName: {
    name: FieldNames.middleName,
    label: "Отчество",
    placeholder: "Сергеевич",
    validate: {
      min: minLength(3),
      required: required,
    },
		inputProcessing: [onlyLetters],
  },
  mainCity: {
    name: FieldNames.mainCity,
    label: "Основной город",
    validate: {
      required: required,
    },
  },
  citizenship: {
    name: FieldNames.citizenship,
    label: "Гражданство",
    validate: {
      required: required,
    },
  },
  sex: {
    name: FieldNames.sex,
    label: "Пол",
    validate: {
      required: required,
    },
  },
  dob: {
    name: FieldNames.dob,
    label: "Дата рождения",
    validate: {
      required: required,
    },
  },
  placeOfBirth: {
    name: FieldNames.placeOfBirth,
    label: "Место рождения (как указано в паспорте)",
    validate: {
      min: minLength(3),
      required: required,
    },
		inputProcessing: [onlyLetters],
  },
};
