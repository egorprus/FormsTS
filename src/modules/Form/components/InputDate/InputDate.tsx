import "./style.css";
import calendarIcon from "../../../../assets/calendar.svg";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getDateRange } from "./utils";
import { FieldNames } from "../../../../models/types";
import { useForm } from "../../../../hooks/Form/useForm";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

interface InputDateProp {
  label?: string;
  require?: boolean;
  name: FieldNames;
}
export const InputDate = ({ label, require, name }: InputDateProp) => {
  const form = useSelector((state: RootState) => state.form.form);
  const { minDate, maxDate } = getDateRange();
  const { handleChangeDate } = useForm();

  return (
    <div className="field field-date">
      <label className="field__label field-container">
        <span className="field__label-text">
          {label}
          {require && "*"}
        </span>
      </label>
      <div className="field__input-wrapper">
        <ReactDatePicker
          className="input-date"
          placeholderText="Select date"
          onChange={(date) => {
            handleChangeDate(date, name);
          }}
          maxDate={maxDate}
          minDate={minDate}
          selected={null}
          name={name}
          value={form[name] as string}
        />
        <img className="input-data-icon" src={calendarIcon} alt="calendar" />
      </div>
    </div>
  );
};
