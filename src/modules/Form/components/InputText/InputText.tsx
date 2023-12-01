import "./style.css";
import { ValidatorsType } from "../../../../models/types";
import { ChangeEvent } from "react";
import { FieldLabel } from "../FieldLabel/FieldLabel";
import { FieldNames } from "../../models";

interface InputTextProp {
  label: string;
  name: Partial<FieldNames>;
  inputProcessing?: ValidatorsType[];
  placeholder?: string;
  handleChange: (value: string, name: string) => void;
  currentValue: string | undefined;
}
const InputText = ({
  label,
  inputProcessing,
  name,
  placeholder,
  handleChange,
  currentValue = '',
}: InputTextProp) => {
  const handleChangeInputText = (event: ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;
    if (inputProcessing?.length) {
      value = inputProcessing.reduce(
        (newValue, validator) => validator(newValue),
        value
      );
    }
    handleChange(value, name);
  };

  return (
    <div className="field field-container field-text">
      <FieldLabel name={name} label={label} require={true} />
      <div className="field__input-wrapper">
        <input
          id={name}
          name={name}
          className="field__input"
          type="text"
          placeholder={placeholder}
          onChange={handleChangeInputText}
          value={currentValue}
        />
      </div>
    </div>
  );
};

export default InputText;