import styled from "styled-components"

const CardContainer = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 105px;
    height: 115px;
    border-radius: 15px;

    background-color: ${({theme}) => theme.bgCard};
    box-shadow: -2px 2px 4px 1px ${({theme}) => theme.shadown};

    color: ${({theme}) => theme.text};
    font-size: 14px;
    transition: .3s;
    cursor: pointer;
    img {
        width: 32px;
        height: 32px;
        filter: invert(${({theme}) => theme.invert});
    }

    &:hover {
        background-color: ${({theme}) => theme.bgCardHover};
        color: ${({theme}) => theme.textHover};
        transition: .3s;

        & img {
            filter: invert(${({theme}) => theme.invertHover}); 
        }       
    }
    
`

export default CardContainer;