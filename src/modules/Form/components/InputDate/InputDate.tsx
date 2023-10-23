import "./style.css";
import calendarIcon from "../../../../assets/calendar.svg";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getDateRange } from "./utils";
import { FieldNames } from "../../../../models/types";
import { FieldLabel } from "../FieldLabel/FieldLabel";

interface InputDateProp {
  label: string;
  require?: boolean;
  name: FieldNames;
	handleChange: (date: Date | null, fieldName: string) => void;
	currentValue: string | undefined;
}
export const InputDate = ({ label, require, name, handleChange, currentValue }: InputDateProp) => {
  const { minDate, maxDate } = getDateRange();

  return (
    <div className="field field-container field-date">
      <FieldLabel name={name} label={label} require={require} />
      <div className="field__input-wrapper">
        <ReactDatePicker
          className="input-date"
          placeholderText="Select date"
          onChange={(date) => {
            handleChange(date, name);
          }}
          maxDate={maxDate}
          minDate={minDate}
          selected={null}
          name={name}
          value={currentValue}
					id={name}
        />
        <img className="input-data-icon" src={calendarIcon} alt="calendar" />
      </div>
    </div>
  );
};
