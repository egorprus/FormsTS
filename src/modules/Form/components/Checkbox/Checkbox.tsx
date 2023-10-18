import { FieldNames } from "../../../../models/types";
import "./style.css";
import { useForm } from "../../../../hooks/Form/useForm";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

interface CheckboxProp {
  label?: string;
  require?: boolean;
  name: FieldNames;
}

export const Checkbox = ({ label, require, name }: CheckboxProp) => {
  const { handleChangeCheckbox } = useForm();
  const form = useSelector((state: RootState) => state.form.form);

  return (
    <div className="field checkbox">
      <label className="field__label">
        <input
          className="checkbox-input"
          type="checkbox"
          name={name}
          checked={form[name] as boolean}
          onChange={handleChangeCheckbox}
        />
        <span>
          {label}
          {require && "*"}
        </span>
      </label>
    </div>
  );
};
