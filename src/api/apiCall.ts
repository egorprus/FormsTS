import { DictionaryState } from "../store/dictionarySlice";

export const getDictionary =  async() => {
	const response = await fetch(' http://localhost:3000/disctionary');
	const data: DictionaryState = await response.json();
	return data;
};