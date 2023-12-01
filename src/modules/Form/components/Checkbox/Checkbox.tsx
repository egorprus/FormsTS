import "./style.css";
import { FieldLabel } from "../FieldLabel/FieldLabel";
import { ChangeEvent } from "react";
import { FieldNames } from "../../models";

interface CheckboxProp {
  label: string;
  name: FieldNames;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
	currentValue: boolean | undefined;
}

const Checkbox = ({ label, name, handleChange, currentValue }: CheckboxProp) => {

  return (
    <div className="field checkbox">
			<FieldLabel name={name} label={label} />
      <input
				id={name}
        className="checkbox-input"
        type="checkbox"
        name={name}
        checked={currentValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default Checkbox;