import ProgressBar from "@/styles/LoadingConversao.style";
import ProgressProps from "@/types/ProgessType";

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