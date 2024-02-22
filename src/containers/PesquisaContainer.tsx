import styled from "styled-components";

const PesquisaContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 5px;
    width: 140px;
    padding: 5px;
    border-radius: 15px;
    
    background-color: ${({theme}) => theme.bgSearch};
    transition: .3s;

    img {
        width: 24px;
        height: 24px;
        filter: invert(${({theme}) => theme.invert});filter: invert(${({theme}) => theme.invert});
    }

    input {
        width: 100%;
        border: none;
        background-color: transparent;
        color: ${({theme}) => theme.text};;
        font-size: 14px;

        &:focus {
            outline: none;
        }
    }
`

export default PesquisaContainer;