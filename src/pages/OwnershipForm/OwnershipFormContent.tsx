import { useSelector } from "react-redux";
import { FieldNames } from "../../models/types";
import { CustomSelect } from "../../modules/Form/components/CustomSelect/CustomSelect";
import { RootState } from "../../store";
import { useForm } from "../../hooks/Form/useForm";
import { getOwnershipTypeForm } from "./utils/getOwnershipTypeForm";

export const OwnershipFormContent = () => {
  const { ownershipTypeOptions } = useSelector(
    (state: RootState) => state.dictionary.dictionary
  );
  const form = useSelector((state: RootState) => state.form.form);
  const { handleChangeSelect } = useForm();

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
