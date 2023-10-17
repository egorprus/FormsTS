// import "./style.scss";
import { InputText } from "../InputText/InputText";
import { InputDate } from "../InputDate/InputDate";
import { InputFile } from "../InputFile/InputFile";
import { currentLength, required } from "../../validation";
import { FieldNames } from "../../../../models/types";

const OOOFormContent = () => {
  return (
    <>
      <InputText {...FIELDS.fullName} />
      <InputText {...FIELDS.reduction} />
      <InputDate {...FIELDS.registrationDate} />
      <InputText {...FIELDS.inn} />
      <InputFile {...FIELDS.innScan} />
      <InputText {...FIELDS.ogrn} />
      <InputFile {...FIELDS.ogrnScan} />
    </>
  );
};

export default OOOFormContent;

const FIELDS = {
  fullName: {
    name: FieldNames.fullName,
    label: "Наименование полное",
  },
  reduction: {
    name: FieldNames.reduction,
    label: "Сокращение",
  },
  ogrn: {
    name: FieldNames.ogrn,
    label: "ОГРН",
    validate: {
      currentLength: currentLength(13),
      required: required,
    },
  },
  ogrnScan: {
    name: FieldNames.ogrnScan,
    label: "Скан ОГРН",
  },
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
  registrationDate: {
    name: FieldNames.registrationDate,
    label: "Дата регистрации",
  },
};
