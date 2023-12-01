import { DefaultUrls } from "../../../models/enums";
import { errorType } from "../../../models/types";
import { generalFormValidation } from "../../../pages/GeneralForm/validate";
import { FieldNames } from "../models";

export const validateForm = (pathname: string) => {
	let errors: errorType = {};
	switch (pathname) {
		case DefaultUrls.general:
			return generalFormValidation();
		case DefaultUrls.ownership:
		case DefaultUrls.registerAddress:
		case DefaultUrls.residentAddress:
		default:
			//no default
	}
};