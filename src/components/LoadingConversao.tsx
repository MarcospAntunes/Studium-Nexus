import styled from "styled-components";

type ProgressProps = {
    porcentagem: number
}

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

function LoadingConversao({porcentagem}: ProgressProps) {
    console.log(porcentagem);
    return(
        <ProgressBar porcentagem={porcentagem}>
            <div>

            </div>
        </ProgressBar>
    )
}

export default LoadingConversao;