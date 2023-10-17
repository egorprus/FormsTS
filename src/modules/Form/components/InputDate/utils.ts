type DateRange = () => {minDate: Date, maxDate: Date};

export const getDateRange: DateRange = () => {
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 100);
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18);
	
  return { minDate, maxDate };
};
