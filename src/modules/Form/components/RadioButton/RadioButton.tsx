import { getSexIcon } from "../../../../assets/sexIcons";
import { SelectOption } from "../../../../models/types";
import { FieldNames } from "../../models";
import { FieldLabel } from "../FieldLabel/FieldLabel";
import { InputRadioButton } from "./InputRadioButton";
import "./style.css";
import { ChangeEvent } from "react";

interface RadioButtonProp {
  options: SelectOption[];
  label: string;
  name: FieldNames;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  currentValue: string | undefined;
}
const RadioButton = ({
  options,
  label,
  name,
  handleChange,
  currentValue,
}: RadioButtonProp) => {
	console.log(currentValue)
  return (
    <div className="field field-container">
      <FieldLabel name={name} label={label} require={true} />
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

export default RadioButton;