import styled from "styled-components"

const AppContainerStyled = styled.div`
    width: 100dvw;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 10px;
    text-align: center;
    color: ${({theme}) => theme.text};
    background-color: ${({theme}) => theme.body};
    transition: .3s;

    h2 {
        margin-bottom: 20px;
    }
`

export default AppContainerStyled;