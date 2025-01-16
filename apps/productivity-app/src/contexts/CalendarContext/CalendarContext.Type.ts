/* eslint-disable no-unused-vars */
import { SetStateAction, Dispatch } from "react";

type Day = {
  day: number;
  holidayName: string | null;
};

type CalendarMonth = {
  month: string;
  days: Day[];
};

type CalendarContextProps = {
  getDaysLeft: (day: string, month: string, yearTyped: string) => void | null;
  calendar: CalendarMonth[];
  year: string;
  countDays: number | undefined;
  futureDateFormatted: string | undefined;
  setData: Dispatch<SetStateAction<any[]>>;
  currentYear: string;
  valueInput: string;
  handleYearChange: (e: React.ChangeEvent<HTMLInputElement>) => void | null;
  isLoading: boolean;
  yearData: string;
};

export default CalendarContextProps;
