import { ChangeEvent, useCallback } from "react";
import { useAppDispatch } from "../../store";
import { updateForm } from "../../store/formSlice";
import { FieldNames, SelectOption } from "../../models/types";
import { ActionMeta, SingleValue } from "react-select";
import moment from "moment";

export const useForm = () => {
  const dispatch = useAppDispatch();

  const handleChangeInputText = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      dispatch(updateForm({ [name]: value }));
    },
    [dispatch]
  );

  const handleChangeSelect = useCallback(
    (
      nweValue: SingleValue<SelectOption>,
      actionMeta: ActionMeta<SelectOption>
    ) => {
      dispatch(updateForm({ [actionMeta.name as FieldNames]: nweValue }));
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
		const {name, value} = e.target;
		dispatch(updateForm({[name]: !value}))
	};

  return { handleChangeInputText, handleChangeSelect, handleChangeRadioButton, handleChangeDate, handleChangeCheckbox };
};
