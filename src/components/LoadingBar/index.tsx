"use client"

import ProgressBar from "./ProgressBar.style";
import ProgressProps from "./ProgessBar.type";
import { StyleSheetManager } from "styled-components";

function LoadingConversao({ percentage }: ProgressProps): JSX.Element {
    return(
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'percentage'}>
        <ProgressBar percentage={percentage} role="progressbar">
            <span />
        </ProgressBar>
        </StyleSheetManager>
    )
}

export default LoadingConversao;