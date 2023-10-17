import "./style.css";
import FormHeader from "./components/FormHeader/FormHeader";
import { FormFooter } from "./components/FormFooter/FormFooter";
import { useLocation } from "react-router-dom";
import { ReactElement, useEffect, useRef } from "react";
import { useAppDispatch } from "../../store";
import { changePage } from "../../store/formSlice";
import { pages } from "../../constants";
import { GeneralForm } from "../../pages/GeneralForm/GeneralForm";
import { OwnershipForm } from "../../pages/OwnershipForm/OwnershipForm";
import { RegistrationAddressForm } from "../../pages/RegistrationAddressForm/RegistrationAddressForm";

interface FormContainerProp {
	children: JSX.Element
}

export const FormContainer = ({ children }: FormContainerProp) => {
	const location = useLocation();
	const dispatch = useAppDispatch();
	const mainBlock = useRef<HTMLElement>(null);

	useEffect(() => {
		mainBlock.current && mainBlock.current.scrollTo(0, 0);
		const newPage = pages.find(page => page.url === location.pathname)
		dispatch(changePage(newPage));
	}, [location.pathname]);

  return (
    <main className="main" ref={mainBlock}>
			<FormHeader />
      {children}
			<FormFooter />
    </main>
  );
};
