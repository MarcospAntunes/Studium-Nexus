import { useContext } from "react";
import { CalendarContext } from "../../contexts";

function useCalendar() {
  const {
    calendar,
    countDays,
    currentYear,
    futureDateFormatted,
    getDaysLeft,
    handleYearChange,
    setData,
    valueInput,
    year,
    isLoading,
    yearData,
  } = useContext(CalendarContext);

  return {
    getDaysLeft,
    calendar,
    year,
    countDays,
    futureDateFormatted,
    currentYear,
    handleYearChange,
    setData,
    valueInput,
    isLoading,
    yearData,
  };
}

export default useCalendar;
