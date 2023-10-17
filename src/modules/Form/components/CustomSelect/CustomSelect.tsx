import { SelectOption } from "../../../../models/types";
import "./style.css";
import Select from "react-select";
import { useForm } from "../../../../hooks/Form/useForm";

interface CustomSelectProp {
  label?: string;
  require?: boolean;
  options?: SelectOption[];
  className?: string;
  name?: string;
}
export const CustomSelect = ({
  label,
  require,
  options,
  name,
}: CustomSelectProp) => {
	const {handleChangeSelect} = useForm();

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
          onChange={handleChangeSelect}
        />
      </div>
    </div>
  );
};
