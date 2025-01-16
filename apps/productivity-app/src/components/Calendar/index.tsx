import { darkTheme, lightTheme } from "@studium-nexus/utils-commons";
import CalendarContainer from "./Calendar.style";
import { useTheme } from "@studium-nexus/hooks-commons";
import { useCalendar } from "../../hooks";
import { useRef } from "react";

function Calendar() {
  const { theme } = useTheme();
  const { getDaysLeft, calendar, year, yearData } = useCalendar();
  const daysRefs = useRef<HTMLSpanElement[]>([]);

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

  daysRefs.current.forEach((el) => {
    if (el.id) {
      const id = el.id.split(" ").join("%20");
      el.style.backgroundImage = `url(/icons/${id}.png)`;
    }
  });

  return (
    <CalendarContainer theme={theme === "light" ? lightTheme : darkTheme}>
      {calendar.map(({ month, days }) => (
        <div id="container" key={month}>
          <h3>{month}</h3>
          <div id="days">
            {days.map(({ day, holidayName }, index) => (
              <span
                key={index}
                id={holidayName != undefined ? holidayName : undefined}
                ref={(el) => {
                  if (el?.id) {
                    daysRefs.current.push(el);
                  }
                }}
                onClick={() => getDaysLeft(day.toString(), month, yearData)}
                title={holidayName != undefined ? holidayName : undefined}
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
