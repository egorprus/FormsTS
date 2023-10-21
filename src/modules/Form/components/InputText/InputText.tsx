import "./style.css";
import { RootState } from "../../../../store";
import { useSelector } from "react-redux";
import { FieldNames, ValidatorsType } from "../../../../models/types";
import { useForm } from "../../../../hooks/Form/useForm";
import { ChangeEvent } from "react";

interface InputTextProp {
  label?: string;
  isRequire?: boolean;
  name: Partial<FieldNames>;
  inputProcessing?: ValidatorsType[];
}
export const InputText = ({
  label,
  isRequire,
  inputProcessing,
  name,
}: InputTextProp) => {
  const form = useSelector((state: RootState) => state.form.form);
  const { changeInputText } = useForm();

  const handleChangeInputText = (event: ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;
    if (inputProcessing?.length) {
      value = inputProcessing.reduce(
        (currentValue, validator) => validator(currentValue),
        value
      );
    }
    changeInputText(value, name);
  };

  return (
    <div className="field field-text">
      <label className="field__label field-container">
        <span className="field__label-text">
          {label}
          {isRequire && "*"}
        </span>
        <div className="field__input-wrapper">
          <input
            name={name}
            className="field__input"
            type="text"
            required={isRequire}
            onChange={handleChangeInputText}
            value={(form[name] as string) || ""}
          />
        </div>
      </label>
    </div>
  );
};
