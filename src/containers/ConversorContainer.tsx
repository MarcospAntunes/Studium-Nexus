import useTheme from "@/hooks/useTheme";
import { darkTheme, lightTheme } from "@/themes";
import styled from "styled-components";

const ConversorContainerStyled = styled.section`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;

    width: 350px;
    height: 200px;
    padding: 10px;
    border-radius: 15px;

    background-color: ${({theme}) => theme.bgConversor};
    box-shadow: -2px 2px 4px 1px ${({theme}) => theme.shadown};
    color: ${({theme}) => theme.text};
    transition: .3s;

    & div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        
    }

    & .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        

        & div {
            display: flex;
            gap: 30px;
        }

        & img {
            width: 64px;
            height: 64px;
            filter: invert(${({theme}) => theme.invert});
        }
    }
`

function ConversorContainer({children}: any) {
    const { theme } = useTheme();

    return(
        <ConversorContainerStyled theme={theme === "light" ? lightTheme : darkTheme}>
            {children}
        </ConversorContainerStyled>
    )
}

export default ConversorContainer;