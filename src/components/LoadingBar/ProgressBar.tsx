import ProgressBar from "./ProgressBar.style";
import ProgressProps from "./ProgessBar.type";

function LoadingConversao({porcentagem}: ProgressProps) {
    return(
        <ProgressBar porcentagem={porcentagem}>
            <span/>
        </ProgressBar>
    )
}

export default LoadingConversao;