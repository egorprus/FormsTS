import { createSlice } from '@reduxjs/toolkit';
import { DefaultUrls } from '../models/enums';
import { FormValues, PageTemplate } from '../models/types';

interface FormSliceI {
	currentPage: PageTemplate,
	form: Partial<FormValues>,
}
const initialState: FormSliceI = {
  currentPage: {
		url: DefaultUrls.general,
    title: "Общие",
		formText: 'Введите свои персональные данные.',
	},
	form: {},
};

const formSlice = createSlice({
  name: 'formSlice',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
		updateForm: (state, action) => {
			state.form = {...state.form, ...action.payload}
		}
  },
});

export const { changePage, updateForm } = formSlice.actions;

export default formSlice.reducer;