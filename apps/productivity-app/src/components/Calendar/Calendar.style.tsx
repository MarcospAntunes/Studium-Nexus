import styled from "styled-components";

const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  border-radius: 15px;
  padding: 20px;

  & #container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 500px;
    padding: 10px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.bgCalendar};
    color: ${({ theme }) => theme.body};
  }

  & #days {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    & span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 5px;
      color: ${({ theme }) => theme.textHover};
      background-color: ${({ theme }) => theme.bgDays};
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.text};
        background-color: ${({ theme }) => theme.body};
      }
    }
  }
`;

export default CalendarContainer;
