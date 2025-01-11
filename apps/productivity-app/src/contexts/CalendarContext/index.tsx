import { Children } from "@studium-nexus/types-commons";
import { createContext, useState, useEffect } from "react";
import { calendarAPI } from "../../services";
import CalendarContextProps from "./CalendarContext.Type";

const CalendarContext = createContext<CalendarContextProps>({
  getDaysLeft: () => null,
  calendar: [{ month: "", days: [""] }],
  year: "",
  countDays: undefined,
  futureDateFormatted: undefined,
  setData: () => null,
  currentYear: "",
  valueInput: "",
  handleYearChange: () => null,
  isLoading: true,
  yearData: "",
});

function CalendarProvider({ children }: Children) {
  const [countDays, setCountDays] = useState<number>();
  const [futureDateFormatted, setFutureDateFormatted] = useState<string>();
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(true);
  const currentYear = new Date().getFullYear().toString();
  const [yearData, setYear] = useState(currentYear);
  const [valueInput, setValueInput] = useState("");
  // eslint-disable-next-line no-undef
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null,
  );

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const formattedHolidays = data.map(({ date, localName }) => {
    const [year, month, day] = date.split("-");
    return {
      formattedDate: `${day}/${month}/${year}`,
      localName,
    };
  });
  const year = formattedHolidays[0]?.formattedDate.split("/")[2];

  const calendar = months.map((month, index) => {
    const daysInMonth = new Date(Number(year), index + 1, 0).getDate();
    const days = Array.from({ length: daysInMonth }, (_, day) => day + 1)
      .join(" ")
      .split(" ");

    return { month, days };
  });

  const getDaysLeft = (day: string, month: string, yearTyped: string) => {
    const dateObj = new Date();

    const futureDate = Date.UTC(
      Number(yearTyped),
      months.indexOf(month),
      Number(day),
    );
    const currentDate = Date.UTC(
      dateObj.getFullYear(),
      dateObj.getMonth(),
      dateObj.getDate(),
    );

    const daysLeft = (futureDate - currentDate) / 86400000;

    setCountDays(daysLeft);
    setFutureDateFormatted(`${day}/${months.indexOf(month) + 1}/${year}`);
  };

  useEffect(() => {
    const fetchCalendar = async () => {
      try {
        setIsloading(true);
        const result = await calendarAPI({ year: yearData, countryCode: "BR" });
        if (!result || result.length === 0) {
          console.error("Nenhum dado válido retornado pela API.");
          setData([]);
        } else {
          setData(result);
        }
      } catch (error) {
        console.error("Erro ao buscar dados do calendário:", error);
        setData([]);
      } finally {
        setIsloading(false);
      }
    };

    fetchCalendar();
  }, [yearData]);

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newYear = e.target.value;
    setValueInput(newYear);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const newTimeout = setTimeout(() => {
      setYear(newYear);
    }, 1000);

    setTypingTimeout(newTimeout);
  };

  return (
    <CalendarContext.Provider value={{
      getDaysLeft,
      calendar,
      year,
      countDays,
      futureDateFormatted,
      setData,
      currentYear,
      valueInput,
      handleYearChange,
      isLoading,
      yearData,
    }}>
      {children}
    </CalendarContext.Provider>
  )
}

export { CalendarContext, CalendarProvider }
