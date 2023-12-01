import { SelectOption } from "../../../../models/types";
import "./style.css";
import Select, { ActionMeta, SingleValue } from "react-select";
import { FieldLabel } from "../FieldLabel/FieldLabel";
import { FieldNames } from "../../models";

interface CustomSelectProp {
  label: string;
  options?: SelectOption[];
  className?: string;
  name: FieldNames;
  handleChange: (
    newValue: SingleValue<SelectOption>,
    actionMeta: ActionMeta<SelectOption>
  ) => void;
  currentValue: SelectOption | undefined;
}
const CustomSelect = ({
  label,
  options,
  name,
  handleChange,
  currentValue,
}: CustomSelectProp) => {
  return (
    <div className="field field-container custom-select">
      <FieldLabel name={name} label={label} require={true} />
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

export default CustomSelect;