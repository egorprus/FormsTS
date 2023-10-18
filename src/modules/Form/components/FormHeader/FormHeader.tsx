import { useSelector } from "react-redux";
import logo from "../../../../assets/logo1.png";
import { RootState } from "../../../../store";

const FormHeader = () => {
  const { currentPage } = useSelector((state: RootState) => state.form);

  return (
    <div className="form__header">
      <img src={logo} alt="form logo" />
      <div className="form__header-column">
        <h3 className="form__title">{currentPage.title}</h3>
        <p className="form__text">{currentPage.formText}</p>
      </div>
    </div>
  );
};
export default FormHeader;
