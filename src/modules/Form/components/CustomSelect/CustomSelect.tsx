import { FieldNames, SelectOption } from "../../../../models/types";
import "./style.css";
import Select from "react-select";
import { useForm } from "../../../../hooks/Form/useForm";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

interface CustomSelectProp {
  label?: string;
  require?: boolean;
  options?: SelectOption[];
  className?: string;
  name: FieldNames;
}
export const CustomSelect = ({
  label,
  require,
  options,
  name,
}: CustomSelectProp) => {
  const { handleChangeSelect } = useForm();
  const form = useSelector((state: RootState) => state.form.form);

  return (
    <div className="field field-container">
      <div className="field__title">
        {label}
        {require && "*"}
      </div>
      <div className="field__input-wrapper">
        <Select
          options={options}
          className="custom-select"
          name={name}
          value={form[name] as SelectOption}
          onChange={handleChangeSelect}
        />
      </div>
    </div>
  );
};
