import { getSexIcon } from "../../../../assets/sexIcons";
import { SelectOption } from "../../../../models/types";
import { FieldNames } from "../../models";
import { InputRadioButton } from "./InputRadioButton";
import "./style.css";
import { ChangeEvent } from "react";

interface RadioButtonProp {
  options: SelectOption[];
  label?: string;
  require?: boolean;
  name: FieldNames;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  currentValue: string | undefined;
}
export const RadioButton = ({
  options,
  label,
  require,
  name,
  handleChange,
  currentValue,
}: RadioButtonProp) => {
  return (
    <div className="field field-container">
      <div className="field__title">
        {label}
        {require && "*"}
      </div>
      <div className="field__radio-wrapper field-container">
        {options.map((option, index) => (
          <InputRadioButton
            value={option}
            isActive={currentValue === option.value}
            index={index}
            key={index}
            name={name}
            icon={getSexIcon(option.value)}
            handleChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
};
