import {
  Checkbox,
  InputDate,
  InputText,
  InputFile,
} from "../../../modules/Form/components/index";
import { useSelector } from "react-redux";
import { FieldNames } from "../../../modules/Form/models";
import { formSelector } from "../../../store/selectors";
import { useForm } from "../../../modules/Form/hooks/useForm";
import { onlyNumber } from "../../../modules/Form/inputProcessing";

export const IPForm = () => {
  const form = useSelector(formSelector);
  const {
    handleChangeInputText,
    handleChangeCheckbox,
    handleChangeDate,
    handleChangeFile,
  } = useForm();

  return (
    <>
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
				inputProcessing={[onlyNumber]}
      />
      <InputFile
        name={FieldNames.ogrnipScan}
        label="Скан ОГРНИП"
        handleChange={handleChangeFile}
      />
      <InputFile
        name={FieldNames.scanLeaseAgreement}
        label="Скан договора аренды помещения (офиса)"
        handleChange={handleChangeFile}
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
        handleChange={handleChangeFile}
      />
    </>
  );
};
