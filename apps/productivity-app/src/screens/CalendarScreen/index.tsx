"use client";

import CalendarScreenStyled from "./CalendarScreen.style";
import { Calendar, Input } from "../../components";
import { useCalendar } from "../../hooks";

function CalendarScreen(): JSX.Element {
  const {
    isLoading,
    countDays,
    futureDateFormatted,
    currentYear,
    valueInput,
    handleYearChange
  } = useCalendar();

  return (
    <CalendarScreenStyled>
      <h1>Calendário</h1>
      <p>Aqui você verá os feriados dos anos e quanto tempo falta para tal dia.</p>

      <div id="yearContainer">
        <h3>Digite o ano</h3>
        <Input
          name="year"
          type="number"
          value={valueInput}
          required={false}
          id="year"
          placeholder={`Ex.: ${currentYear}`}
          onChange={handleYearChange}
          accept={undefined}
        />
      </div>

      <div>
        {countDays && futureDateFormatted && typeof countDays === "number" ? (
          <p>
            Falta {countDays} dia{countDays > 1 ? "s" : ""} para chegar em {futureDateFormatted}
          </p>
        ) : (
          <p></p>
        )}
      </div>

      {isLoading ? <p>Carregando...</p> : <Calendar />}
    </CalendarScreenStyled>
  );
}

export default CalendarScreen;
