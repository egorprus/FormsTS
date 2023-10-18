import "./style.css";
import { RootState } from "../../../../store";
import { useSelector } from "react-redux";
import { FieldNames } from "../../../../models/types";
import { useForm } from "../../../../hooks/Form/useForm";

interface InputTextProp {
  label?: string;
  isRequire?: boolean;
  name: Partial<FieldNames>;
  inputProcessing?: (value: string) => string;
}
export const InputText = ({
  label,
  isRequire,
  inputProcessing,
  name,
}: InputTextProp) => {
  const form = useSelector((state: RootState) => state.form.form);
  const { handleChangeInputText } = useForm();

  return (
    <div className="field field-text">
      <label className="field__label field-container">
        <span className="field__label-text">
          {label}
          {isRequire && "*"}
        </span>
        <div className="field__input-wrapper">
          <input
            name={name}
            className="field__input"
            type="text"
            required={isRequire}
            onChange={handleChangeInputText}
            value={form[name] as string}
          />
        </div>
      </label>
    </div>
  );
};
