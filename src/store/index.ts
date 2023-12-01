import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import formSlice from "./formSlice";
import dictionarySlice from "./dictionarySlice";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "./saga/rootWatcher";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    form: formSlice,
    dictionary: dictionarySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootWatcher);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
