import { FieldNames, SelectOption } from "../../../../models/types";
import { InputRadioButton } from "./InputRadioButton";
import "./style.css";

interface RadioButtonProp {
  options: SelectOption[];
  label?: string;
  require?: boolean;
  currentValue?: string;
  name: FieldNames;
}
export const RadioButton = ({
  options,
  label,
  require,
  currentValue,
	name,
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
            active={currentValue === option.value}
            index={index}
            key={index}
						name={name}
          />
        ))}
      </div>
    </div>
  );
};
