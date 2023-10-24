import { IPForm } from "../components/IPForm";
import { OOOForm } from "../components/OOOForm";
import { OwnershipType } from "../models";

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
