import { InputText } from "../../../modules/Form/components/InputText/InputText";
import { InputDate } from "../../../modules/Form/components/InputDate/InputDate";
import { InputFile } from "../../../modules/Form/components/InputFile/InputFile";
import { useForm } from "../../../hooks/useForm";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { FieldNames } from "../../../modules/Form/models";

export const OOOForm = () => {
  const form = useSelector((state: RootState) => state.form.form);
  const { handleChangeInputText, handleChangeDate } = useForm();

  return (
    <>
      <InputText
        currentValue={form[FieldNames.fullName]}
        name={FieldNames.fullName}
        label="Наименование полное"
        handleChange={handleChangeInputText}
      />
      <InputText
        currentValue={form[FieldNames.reduction]}
        name={FieldNames.reduction}
        label="Сокращение"
        handleChange={handleChangeInputText}
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
      />
      <InputFile name={FieldNames.innScan} label="Скан ИНН" />
      <InputText
        currentValue={form[FieldNames.ogrn]}
        name={FieldNames.ogrn}
        label="ОГРН"
        handleChange={handleChangeInputText}
      />
      <InputFile name={FieldNames.ogrnScan} label="Скан ОГРН" />
    </>
  );
};

