import { call, put, takeLatest } from "redux-saga/effects";
import { DictionaryState, updateDictionary } from "../dictionarySlice";
import { API_URL } from "../../constants/mainRoutes";

export function* rootWatcher() {
  yield takeLatest("formSlice/changePage", initDictionary);
}

function* initDictionary() {
  const data: Response = yield call(fetch, API_URL);
  const res: DictionaryState = yield data.json();
  yield put(updateDictionary(res));
}
