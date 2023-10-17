import { ownershipTypeOptions } from "../../constants";
import { FieldNames } from "../../models/types";
import { CustomSelect } from "../../modules/Form/components/CustomSelect/CustomSelect";
import { IPForm } from "../../modules/Form/components/IPForm/IPForm";
import { OOOForm } from "../../modules/Form/components/OOOForm/OOOForm";
import { useAppDispatch } from "../../store";

export const OwnershipFormContent = () => {
	const dispatch = useAppDispatch();
  return (
    <form className="form field-container">
      <CustomSelect {...FIELDS.ownershipType} />
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
