import { OwnershipType } from "../../../models/types";
import { IPForm } from "../components/IPForm";
import { OOOForm } from "../components/OOOForm";

export const getOwnershipTypeForm = (ownershipType: string = '') => {
  switch (ownershipType) {
    case OwnershipType.ip:
      return <IPForm />;
    case OwnershipType.ooo:
      return <OOOForm />;
    default:
      return <></>;
  }
};
