import { ReactElement } from "react";
import { DefaultUrls } from "./enums";

export enum OwnershipType {
	ip = 'ip',
	ooo = 'ooo'
} 
export interface PageTemplate {
  url: DefaultUrls;
  title: string;
  formText: string;
}
export interface MainRoutes {
  id: number;
  url: DefaultUrls;
  component: ReactElement;
}
export type SelectOption = {
  value: string;
  label: string;
};

// export type FieldNames = 'lastName' |
// 'firstName' |
// 'middleName' |
// 'mainCity' |
// 'citizenship' |
// 'sex' |
// 'dob' |
// 'placeOfBirth' |
// 'ownershipType' |
// 'inn' |
// 'innScan' |
// 'ogrnip' |
// 'ogrnipScan' |
// 'companyRegistrationDate' |
// 'scanLeaseAgreement' |
// 'scanExtractFromEgrip' |
// 'fullName' |
// 'reduction' |
// 'ogrn' |
// 'ogrnScan' |
// 'country' |
// 'region' |
// 'city' |
// 'street' |
// 'house' |
// 'apartment' |
// 'apartmentStatus' |
// 'registrationDate' |
// 'addressStatus' |
// 'registrationCountry' |
// 'registrationRegion' |
// 'registrationCity' |
// 'registrationStreet' |
// 'registrationHouse' |
// 'registrationApartment' |
// 'registrationApartmentStatus' |
// 'resAddressRegistrationDate';

export type FormValues =
  & GeneralFormFields
  & OwnershipFormFields
  & RegistrationAddressFormFields
	& ResidentialAddressFormFields;

export enum FieldNames {
  lastName = 'lastName',
  firstName = 'firstName',
  middleName = 'middleName',
  mainCity = 'mainCity',
  citizenship = 'citizenship',
  sex = 'sex',
  dob = 'dob',
  placeOfBirth = 'placeOfBirth',
	ownershipType = 'ownershipType',
  inn = 'inn',
  innScan = 'innScan',
  ogrnip = 'ogrnip',
  ogrnipScan = 'ogrnipScan',
  companyRegistrationDate = 'companyRegistrationDate',
  scanLeaseAgreement = 'scanLeaseAgreement',
  scanExtractFromEgrip = 'scanExtractFromEgrip',
  statusContract = 'statusContract',
  fullName = 'fullName',
  reduction = 'reduction',
  ogrn = 'ogrn',
  ogrnScan = 'ogrnScan',
	country = 'country',
  region = 'region',
  city = 'city',
  street = 'street',
  house = 'house',
  apartment = 'apartment',
  apartmentStatus = 'apartmentStatus',
  registrationDate = 'registrationDate',
	addressStatus = 'addressStatus',
  registrationCountry = 'registrationCountry',
  registrationRegion = 'registrationRegion',
  registrationCity = 'registrationCity',
  registrationStreet = 'registrationStreet',
  registrationHouse = 'registrationHouse',
  registrationApartment = 'registrationApartment',
  registrationApartmentStatus = 'registrationApartmentStatus',
  resAddressRegistrationDate = 'resAddressRegistrationDate',
}
export interface GeneralFormFields {
  lastName: string;
  firstName: string;
  middleName: string;
  mainCity: SelectOption;
  citizenship: SelectOption;
  sex: SelectOption;
  dob: string;
  placeOfBirth: string;
}
export interface OwnershipFormFields {
  ownershipType: SelectOption;
  inn: string;
  innScan: string;
  ogrnip: string;
  ogrnipScan: string;
  companyRegistrationDate: string;
  scanLeaseAgreement: string;
  scanExtractFromEgrip: string;
  statusContract: boolean;
  fullName: string;
  reduction: string;
  ogrn: string;
  ogrnScan: string;
}

export interface RegistrationAddressFormFields {
  country: SelectOption;
  region: SelectOption;
  city: string;
  street: string;
  house: string;
  apartment: string;
  apartmentStatus: boolean;
  registrationDate: string;
}

export type ValidatorsType = ValidateLetter | ValidateNumber;

export type ValidateNumber = (value: string) => string;
export type ValidateLetter = (value: string) => string;

export interface ResidentialAddressFormFields {
  addressStatus: boolean;
  registrationCountry: SelectOption;
  registrationRegion: SelectOption;
  registrationCity: string;
  registrationStreet: string;
  registrationHouse: string;
  registrationApartment: string;
  registrationApartmentStatus: boolean;
  resAddressRegistrationDate: string;
}
