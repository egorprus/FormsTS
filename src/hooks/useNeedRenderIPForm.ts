import { useSelector } from "react-redux";
import { RootState } from "../store";
import { OwnershipType } from "../models/types";

export const useNeedRenderIPForm = () => {
	const {ownershipType} = useSelector((state: RootState) => state.form.form);
	const needRender = ownershipType?.value === OwnershipType.ip;
  return {needRender};
};