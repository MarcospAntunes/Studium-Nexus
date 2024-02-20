import styled from "styled-components";

const PesquisaContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 5px;
    width: 140px;
    padding: 5px;
    border-radius: 15px;
    
    background-color: #EFEFEF;

    img {
        width: 24px;
        height: 24px;
    }

    input {
        width: 100%;
        border: none;
        background-color: transparent;
        font-size: 14px;

        &:focus {
            outline: none;
        }
    }
`

export default PesquisaContainer;