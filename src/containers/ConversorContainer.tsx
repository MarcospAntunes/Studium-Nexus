import styled from "styled-components";

const ConversorContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;

    width: 300px;
    height: 150px;
    padding: 10px;
    border-radius: 15px;

    background-color: #EFEFEF;
    box-shadow: -2px 2px 4px 1px rgba(0, 0, 0, 0.25);


    & div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export default ConversorContainer;