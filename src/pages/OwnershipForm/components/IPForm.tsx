import { InputText } from "../../../modules/Form/components/InputText/InputText";
import { InputFile } from "../../../modules/Form/components/InputFile/InputFile";
import { InputDate } from "../../../modules/Form/components/InputDate/InputDate";
import { Checkbox } from "../../../modules/Form/components/Checkbox/Checkbox";
import { FieldNames } from "../../../models/types";
import { useForm } from "../../../hooks/Form/useForm";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";

export const IPForm = () => {
	const form = useSelector((state: RootState) => state.form.form);
  const { handleChangeInputText, handleChangeCheckbox, handleChangeDate } =
    useForm();

  return (
    <>
      <InputText
				currentValue={form[FieldNames.inn]}
        name={FieldNames.inn}
        label="ИНН"
        handleChange={handleChangeInputText}
      />
      <InputFile name={FieldNames.innScan} label="Скан ИНН" />
      <InputDate
				currentValue={form[FieldNames.companyRegistrationDate]}
        name={FieldNames.companyRegistrationDate}
        label="Дата регистрации"
        handleChange={handleChangeDate}
      />
      <InputText
				currentValue={form[FieldNames.ogrnip]}
        name={FieldNames.ogrnip}
        label="ОГРНИП"
        handleChange={handleChangeInputText}
      />
      <InputFile name={FieldNames.ogrnipScan} label="Скан ОГРНИП" />
      <InputFile
        name={FieldNames.scanLeaseAgreement}
        label="Скан договора аренды помещения (офиса)"
      />
      <Checkbox
				currentValue={form[FieldNames.statusContract]}
        name={FieldNames.statusContract}
        label="Нет договора"
        handleChange={handleChangeCheckbox}
      />
      <InputFile
        name={FieldNames.scanExtractFromEgrip}
        label="Скан выписки из ЕГРИП (не старше 3 месяцев)*"
      />
    </>
  );
};
