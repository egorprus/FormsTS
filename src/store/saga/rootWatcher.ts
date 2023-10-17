import { call, put, takeEvery } from "redux-saga/effects";
import { getDictionary } from "../../api/apiCall";
import { DictionaryState, updateDictionary } from "../dictionarySlice";

export function* rootWatcher() {
	yield takeEvery("formSlice/changePage", initDictionary)
};

function* initDictionary() {
	const data: DictionaryState = yield call(getDictionary);
	console.log(data)
	yield put(updateDictionary(data));
};