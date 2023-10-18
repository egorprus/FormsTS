import { useSelector } from "react-redux";
import { FieldNames } from "../../models/types";
import { CustomSelect } from "../../modules/Form/components/CustomSelect/CustomSelect";
import { IPForm } from "../../modules/Form/components/IPForm/IPForm";
import { OOOForm } from "../../modules/Form/components/OOOForm/OOOForm";
import { RootState } from "../../store";

export const OwnershipFormContent = () => {
  const { ownershipTypeOptions } = useSelector(
    (state: RootState) => state.dictionary.dictionary
  );
  return (
    <form className="form field-container">
      <CustomSelect {...FIELDS.ownershipType} options={ownershipTypeOptions} />
      <IPForm />
      <OOOForm />
    </form>
  );
};

const FIELDS = {
  ownershipType: {
    name: FieldNames.ownershipType,
    label: "Вид деятельности",
  },
};
