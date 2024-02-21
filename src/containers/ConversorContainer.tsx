import styled from "styled-components";

const ConversorContainer = styled.section`
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

    background-color: #EFEFEF;
    box-shadow: -2px 2px 4px 1px rgba(0, 0, 0, 0.25);


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
        }
    }
`

export default ConversorContainer;