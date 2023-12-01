import { RootState } from ".";

export const dictionarySelector = (state: RootState) => state.dictionary.dictionary;

export const formSelector = (state: RootState) => state.form.form;