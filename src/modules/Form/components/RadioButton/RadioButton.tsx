import { useSelector } from "react-redux";
import { getSexIcon } from "../../../../assets/sexIcons";
import { FieldNames, SelectOption } from "../../../../models/types";
import { InputRadioButton } from "./InputRadioButton";
import "./style.css";
import { RootState } from "../../../../store";

interface RadioButtonProp {
  options: SelectOption[];
  label?: string;
  require?: boolean;
  name: FieldNames;
}
export const RadioButton = ({
  options,
  label,
  require,
  name,
}: RadioButtonProp) => {
  const form = useSelector((state: RootState) => state.form.form);

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
            isActive={form[name] === option.value}
            index={index}
            key={index}
            name={name}
            icon={getSexIcon(option.value)}
          />
        ))}
      </div>
    </div>
  );
};
