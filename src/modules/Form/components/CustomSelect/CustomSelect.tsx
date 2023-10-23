import { FieldNames, SelectOption } from "../../../../models/types";
import "./style.css";
import Select, { ActionMeta, SingleValue } from "react-select";
import { FieldLabel } from "../FieldLabel/FieldLabel";

interface CustomSelectProp {
  label: string;
  require?: boolean;
  options?: SelectOption[];
  className?: string;
  name: FieldNames;
  handleChange: (
    newValue: SingleValue<SelectOption>,
    actionMeta: ActionMeta<SelectOption>
  ) => void;
  currentValue: SelectOption | undefined;
}
export const CustomSelect = ({
  label,
  require,
  options,
  name,
  handleChange,
  currentValue,
}: CustomSelectProp) => {
  return (
    <div className="field field-container custom-select">
      <FieldLabel name={name} label={label} require={require} />
      <div className="field__input-wrapper">
        <Select
          options={options}
          name={name}
          value={currentValue}
          onChange={handleChange}
          id={name}
        />
      </div>
    </div>
  );
};
