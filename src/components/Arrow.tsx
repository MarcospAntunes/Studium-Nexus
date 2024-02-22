import styled from "styled-components";

const Arrow = styled.img`
    position: absolute;
    top: 52vw;
    width: 24px;
    height: 50px;
    transform: rotate(180deg);
    z-index: 1;
    filter: invert(${({theme}) => theme.invert});
`

export default Arrow;