import { FieldNames } from "../../../../models/types";
import "./style.css";
import { useForm } from "../../../../hooks/Form/useForm";

interface CheckboxProp {
  label?: string;
  require?: boolean;
	name: FieldNames;
}

export const Checkbox = ({ label, require, name }: CheckboxProp) => {
	const {handleChangeCheckbox} = useForm();

  return (
    <div className="field checkbox">
      <label className="field__label">
        <input className="checkbox-input" type="checkbox" name={name} onChange={handleChangeCheckbox} />
        <span>
          {label}
          {require && "*"}
        </span>
      </label>
    </div>
  );
};
