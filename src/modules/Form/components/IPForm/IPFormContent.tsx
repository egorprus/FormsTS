// import "./style.scss";
import { InputText } from "../InputText/InputText";
import { InputFile } from "../InputFile/InputFile";
import { InputDate } from "../InputDate/InputDate";
import { Checkbox } from "../Checkbox/Checkbox";
import { currentLength, required } from "../../validation";
import { FieldNames } from "../../../../models/types";

const IPFormContent = () => {
  return (
    <>
      <InputText {...FIELDS.inn} />
      <InputFile {...FIELDS.innScan} />
      <InputDate {...FIELDS.companyRegistrationDate} />
      <InputText {...FIELDS.ogrnip} />
      <InputFile {...FIELDS.ogrnipScan} />
      <InputFile {...FIELDS.scanLeaseAgreement} />
      <Checkbox {...FIELDS.statusContract} />
      <InputFile {...FIELDS.scanExtractFromEgrip} />
    </>
  );
};

export default IPFormContent;

const FIELDS = {
  inn: {
    name: FieldNames.inn,
    label: "ИНН",
    validate: {
      currentLength: currentLength(10),
      required: required,
    },
  },
  innScan: {
    name: FieldNames.innScan,
    label: "Скан ИНН",
  },
  companyRegistrationDate: {
    name: FieldNames.companyRegistrationDate,
    label: "Дата регистрации",
  },
  ogrnip: {
    name: FieldNames.ogrnip,
    label: "ОГРНИП",
    validate: {
      currentLength: currentLength(15),
      required: required,
    },
  },
  ogrnipScan: {
    name: FieldNames.ogrnipScan,
    label: "Скан ОГРНИП",
  },
  scanLeaseAgreement: {
    name: FieldNames.scanLeaseAgreement,
    label: "Скан договора аренды помещения (офиса)",
  },
  scanExtractFromEgrip: {
    name: FieldNames.scanExtractFromEgrip,
    label: "Скан выписки из ЕГРИП (не старше 3 месяцев)*",
  },
  statusContract: {
    name: FieldNames.statusContract,
    label: "Нет договора",
  },
};
