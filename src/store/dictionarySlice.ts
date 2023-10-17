import { createSlice } from "@reduxjs/toolkit";
import { SelectOption } from "../models/types";

export interface DictionaryState {
  cityOptions: SelectOption[] | [];
  citizenshipOptions: SelectOption[] | [];
  ownershipTypeOptions: SelectOption[] | [];
  countryOptions: SelectOption[] | [];
  sexOptions: SelectOption[] | [];
  regionOptions: SelectOption[] | [];
}

interface InitState {
	dictionary: DictionaryState
}
const initialState: InitState = {
  dictionary: {
    cityOptions: [],
    citizenshipOptions: [],
    ownershipTypeOptions: [],
    countryOptions: [],
    sexOptions: [],
    regionOptions: [],
  },
};

const dictionarySlice = createSlice({
  name: "dictionarySlice",
  initialState,
  reducers: {
    updateDictionary: (state, action) => {
      console.log(action.payload);
      state.dictionary = action.payload;
    },
  },
});

export const { updateDictionary } = dictionarySlice.actions;

export default dictionarySlice.reducer;
