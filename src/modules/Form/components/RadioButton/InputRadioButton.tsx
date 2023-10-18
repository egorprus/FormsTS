import { FieldNames, SelectOption } from "../../../../models/types";
import "./style.css";
import { useForm } from "../../../../hooks/Form/useForm";

interface InputRadioButtonProp {
  isActive: boolean;
  value: SelectOption;
  index: number;
  name: FieldNames;
  icon: JSX.Element | undefined;
}
export const InputRadioButton = ({
  isActive,
  value,
  index,
  name,
  icon,
}: InputRadioButtonProp) => {
  const { handleChangeRadioButton } = useForm();

  return (
    <div className={`field__radio-container${isActive ? " active" : ""}`}>
      <input
        className="field__radio-input"
        type="radio"
        name={name}
        value={value.value}
        id={`radio-button${index + 1}`}
        onChange={handleChangeRadioButton}
      />
      <label
        className="field__radio-label"
        htmlFor={`radio-button${index + 1}`}
      >
        {icon}
        {value.label}
      </label>
    </div>
  );
};
