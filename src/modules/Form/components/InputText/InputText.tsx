import "./style.css";
import { ValidatorsType } from "../../../../models/types";
import { ChangeEvent } from "react";
import { FieldLabel } from "../FieldLabel/FieldLabel";
import { FieldNames } from "../../models";

interface InputTextProp {
  label: string;
  require?: boolean;
  name: Partial<FieldNames>;
  inputProcessing?: ValidatorsType[];
  placeholder?: string;
  handleChange: (value: string, name: string) => void;
  currentValue: string | undefined;
}
export const InputText = ({
  label,
  require,
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
      <FieldLabel name={name} label={label} require={require} />
      <div className="field__input-wrapper">
        <input
          id={name}
          name={name}
          className="field__input"
          type="text"
          required={require}
          placeholder={placeholder}
          onChange={handleChangeInputText}
          value={currentValue}
        />
      </div>
    </div>
  );
};
