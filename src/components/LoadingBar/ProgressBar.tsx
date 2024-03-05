import ProgressBar from "./ProgressBar.style";
import ProgressProps from "./ProgessBar.type";
import { StyleSheetManager } from "styled-components";

function LoadingConversao({ porcentagem }: ProgressProps): JSX.Element {
    return(
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'porcentagem'}>
        <ProgressBar porcentagem={porcentagem} role="progressbar">
            <span />
        </ProgressBar>
        </StyleSheetManager>
    )
}

export default LoadingConversao;