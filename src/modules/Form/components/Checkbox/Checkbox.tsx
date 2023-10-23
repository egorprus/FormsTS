import { FieldNames } from "../../../../models/types";
import "./style.css";
import { FieldLabel } from "../FieldLabel/FieldLabel";
import { ChangeEvent } from "react";

interface CheckboxProp {
  label: string;
  require?: boolean;
  name: FieldNames;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
	currentValue: boolean | undefined;
}

export const Checkbox = ({ label, require, name, handleChange, currentValue }: CheckboxProp) => {

  return (
    <div className="field checkbox">
			<FieldLabel name={name} label={label} require={require} />
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
