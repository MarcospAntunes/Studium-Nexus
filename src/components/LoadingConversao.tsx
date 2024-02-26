import { ProgressBar } from "@/styles/@index";
import { ProgressProps } from "@/types/@index";

function LoadingConversao({porcentagem}: ProgressProps) {
    return(
        <ProgressBar porcentagem={porcentagem}>
            <span/>
        </ProgressBar>
    )
}

export default LoadingConversao;