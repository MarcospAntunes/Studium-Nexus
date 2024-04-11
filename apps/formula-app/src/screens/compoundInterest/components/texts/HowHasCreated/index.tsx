import { LazyLoadedText } from "@studium-nexus/components-commons";

function HowHasCreated(): JSX.Element {
    return(
        <>
            <h3 id="#como-foi-criada">Como Foi Criada?</h3>
            <LazyLoadedText className="explantion">Os primeiros registros desta fórmula remonta à Babilônia antiga e foi aprimorada ao longo da história por diversos matemáticos e economistas.</LazyLoadedText>
            <LazyLoadedText>Uma das primeiras referências documentadas a uma fórmula de juros compostos de forma explícita foi na obra <i>Summa de Arithmetica</i> do matemático italiano Luca Pacioli.</LazyLoadedText>
            <LazyLoadedText>A fórmula é representada da seguinte maneira:</LazyLoadedText>
            <ul>
                <li>
                    <strong>M = C ( 1 + i )<sup>t</sup></strong>
                </li>
                <li>
                    <i>M</i> é o <strong>Montante</strong>
                </li>
                <li>
                    <i>C</i> é o <strong>capital inicial</strong>
                </li>
                <li>
                    <i>i</i> é a <strong>taxa de juros</strong>
                </li>
                <li>
                    <i>t</i> é o <strong>tempo</strong> em que o dinheiro é aplicado
                </li>
            </ul>
        </>
    )
}

export default HowHasCreated;