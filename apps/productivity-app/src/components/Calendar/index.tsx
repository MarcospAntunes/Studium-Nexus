import { darkTheme, lightTheme } from "@studium-nexus/utils-commons";
import CalendarContainer from "./Calendar.style";
import { useTheme } from "@studium-nexus/hooks-commons";
import { useCalendar } from "../../hooks";

function Calendar() {
  const { theme } = useTheme();
  const {getDaysLeft, calendar, year, yearData} = useCalendar();

  if (yearData != year) {
    return (
      <p>
        O ano que digitou está incorreto ou está muito distante da data atual!{" "}
        <br />
        Certifique-se de escolher uma data de até 50 anos antes ou depois da
        data atual.
      </p>
    );
  }

  return (
    <CalendarContainer theme={theme === "light" ? lightTheme : darkTheme}>
      {calendar.map(({ month, days }) => (
        <div id="container" key={month}>
          <h3>{month}</h3>
          <div id="days">
            {days.map((day, index) => (
              <span
                key={index}
                onClick={() => getDaysLeft(day, month, yearData)}
              >
                {day}
              </span>
            ))}
          </div>
        </div>
      ))}
    </CalendarContainer>
  );
}

export default Calendar;
