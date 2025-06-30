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
    background-color: ${({ theme }: any) => theme.bgCalendar};
    color: ${({ theme }: any) => theme.body};
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
      color: ${({ theme }: any) => theme.textHover};
      background-color: ${({ theme }: any) => theme.bgDays};
      background-position: bottom right;
      background-repeat: no-repeat;
      background-size: 45%;
      cursor: pointer;

      &:hover {
        color: ${({ theme }: any) => theme.text};
        background-color: ${({ theme }: any) => theme.body};
      }
    }
  }
`;

export default CalendarContainer;
