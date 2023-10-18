import { useSelector } from "react-redux";
import { RootState } from "../store";
import { OwnershipType } from "../models/types";

export const useNeedRenderOOOForm = () => {
	const {ownershipType} = useSelector((state: RootState) => state.form.form);
	const needRender = ownershipType?.value === OwnershipType.ooo;

  return {needRender};
};