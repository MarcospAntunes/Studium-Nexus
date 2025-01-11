import { SetStateAction, Dispatch } from "react";

type CalendarContextProps = {
  getDaysLeft: (day: string, month: string, yearTyped: string) => void;
  calendar: {
    month: string;
    days: string[];
  }[];
  year: string;
  countDays: number | undefined;
  futureDateFormatted: string | undefined;
  setData: Dispatch<SetStateAction<any[]>>;
  currentYear: string;
  valueInput: string;
  handleYearChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean | undefined;
  yearData: string
};

export default CalendarContextProps;

