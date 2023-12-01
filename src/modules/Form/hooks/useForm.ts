import { ChangeEvent, useCallback } from "react";
import { useAppDispatch } from "../../../store";
import { updateForm } from "../../../store/formSlice";
import { SelectOption } from "../../../models/types";
import { ActionMeta, SingleValue } from "react-select";
import moment from "moment";
import { FieldNames } from "../models";

interface THook {
	handleChangeInputText: (value: string, name: string) => void,
	handleChangeSelect: (newValue: SingleValue<SelectOption>, actionMeta: ActionMeta<SelectOption>) => void,
	handleChangeRadioButton: (e: ChangeEvent<HTMLInputElement>) => void,
	handleChangeDate: (date: Date | null, fieldName: string) => void,
	handleChangeCheckbox: (e: ChangeEvent<HTMLInputElement>) => void,
	handleChangeFile: (img: string | ArrayBuffer, name: string) => void,
}
export const useForm = (): THook => {
  const dispatch = useAppDispatch();

  const handleChangeInputText = useCallback(
    (value: string, name: string) => {
      dispatch(updateForm({ [name]: value }));
    },
    [dispatch]
  );

  const handleChangeSelect = useCallback(
    (
      newValue: SingleValue<SelectOption>,
      actionMeta: ActionMeta<SelectOption>
    ) => {
      dispatch(updateForm({ [actionMeta.name as FieldNames]: newValue }));
    },
    [dispatch]
  );

  const handleChangeRadioButton = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(updateForm({ [name]: value }));
  };

	const handleChangeDate = (date: Date | null, fieldName: string) => {
		const formatDate = moment(date).format('DD.MM.YYYY')
		dispatch(updateForm({[fieldName]: formatDate}));
	};

	const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
		const {name, checked} = e.target;
		dispatch(updateForm({[name]: checked}))
	};
	const handleChangeFile = (imgBase64: string | ArrayBuffer, name: string) => {
		dispatch(updateForm({[name]: imgBase64}));
	}

  return { handleChangeInputText, handleChangeSelect, handleChangeRadioButton, handleChangeDate, handleChangeCheckbox, handleChangeFile };
};