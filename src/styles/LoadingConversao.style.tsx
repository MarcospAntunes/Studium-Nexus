import ProgressProps from "@/types/ProgessType";
import styled from "styled-components";

const ProgressBar = styled.div<ProgressProps>`
    width: 100px;
    height: 30px;
    border: 1px solid green;

    div {
        width: ${({porcentagem}) => porcentagem}px;
        height: 100%;
        background-color: #6dca6d;
    }

`

export default ProgressBar;