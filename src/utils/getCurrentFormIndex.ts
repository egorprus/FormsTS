import { DefaultUrls } from "../models/enums";

export const getCurrentFormIndex = () => {
  const currentPath = window.location.pathname;
  return Object.values(DefaultUrls).indexOf(currentPath);
};
