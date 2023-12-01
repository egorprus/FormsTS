import { useSelector } from "react-redux";
import { CustomSelect } from "../../modules/Form/components/index";
import { getOwnershipTypeForm } from "./utils/getOwnershipTypeForm";
import { FieldNames } from "../../modules/Form/models";
import { dictionarySelector, formSelector } from "../../store/selectors";
import { useForm } from "../../modules/Form/hooks/useForm";

export const OwnershipForm = () => {
  const { ownershipTypeOptions } = useSelector(dictionarySelector);
  const form = useSelector(formSelector);
  const { handleChangeSelect } = useForm();
	console.log(form)
  return (
    <form className="form field-container">
      <CustomSelect
        currentValue={form[FieldNames.ownershipType]}
        name={FieldNames.ownershipType}
        label="Вид деятельности"
        options={ownershipTypeOptions}
        handleChange={handleChangeSelect}
      />
      {getOwnershipTypeForm(form[FieldNames.ownershipType]?.value)}
    </form>
  );
};
