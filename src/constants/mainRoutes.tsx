import { DefaultUrls } from "../models/enums";
import { MainRoutes } from "../models/types";
import { GeneralForm } from "../pages/GeneralForm/GeneralForm";
import { OwnershipForm } from "../pages/OwnershipForm/OwnershipForm";
import { RegistrationAddressForm } from "../pages/RegistrationAddressForm/RegistrationAddressForm";
import { ResidentialAddressForm } from "../pages/ResidentialAddressForm/ResidentialAddressForm";

export const mainRoutes: readonly MainRoutes[] = [
	{
		id: 1,
		url: DefaultUrls.general,
		component: <GeneralForm />,
	},
	{
		id: 2,
		url: DefaultUrls.ownership,
		component: <OwnershipForm />,
	},
	{
		id: 3,
		url: DefaultUrls.registerAddress,
		component: <RegistrationAddressForm />,
	},
	{
		id: 4,
		url: DefaultUrls.residentAddress,
		component: <ResidentialAddressForm />,
	},
]

export const API_URL = 'http://localhost:3000/disctionary';