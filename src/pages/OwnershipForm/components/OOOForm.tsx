import {
  InputDate,
  InputText,
  InputFile,
} from "../../../modules/Form/components/index";
import { useSelector } from "react-redux";
import { FieldNames } from "../../../modules/Form/models";
import { formSelector } from "../../../store/selectors";
import { useForm } from "../../../modules/Form/hooks/useForm";
import { onlyLetters, onlyNumber } from "../../../modules/Form/inputProcessing";

export const OOOForm = () => {
  const form = useSelector(formSelector);
  const { handleChangeInputText, handleChangeDate, handleChangeFile } =
    useForm();

  return (
    <>
      <InputText
        currentValue={form[FieldNames.fullName]}
        name={FieldNames.fullName}
        label="Наименование полное"
        handleChange={handleChangeInputText}
				inputProcessing={[onlyLetters]}
      />
      <InputText
        currentValue={form[FieldNames.reduction]}
        name={FieldNames.reduction}
        label="Сокращение"
        handleChange={handleChangeInputText}
				inputProcessing={[onlyLetters]}
      />
      <InputDate
        currentValue={form[FieldNames.registrationDate]}
        name={FieldNames.registrationDate}
        label="Дата регистрации"
        handleChange={handleChangeDate}
      />
      <InputText
        currentValue={form[FieldNames.inn]}
        name={FieldNames.inn}
        label="ИНН"
        handleChange={handleChangeInputText}
				inputProcessing={[onlyNumber]}
      />
      <InputFile
        name={FieldNames.innScan}
        label="Скан ИНН"
        handleChange={handleChangeFile}
      />
      <InputText
        currentValue={form[FieldNames.ogrn]}
        name={FieldNames.ogrn}
        label="ОГРН"
        handleChange={handleChangeInputText}
				inputProcessing={[onlyNumber]}
      />
      <InputFile
        name={FieldNames.ogrnScan}
        label="Скан ОГРН"
        handleChange={handleChangeFile}
      />
    </>
  );
};
