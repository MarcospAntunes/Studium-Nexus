import { ProgressBar } from "@/styles/@index";
import { ProgressProps } from "@/types/@index";

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