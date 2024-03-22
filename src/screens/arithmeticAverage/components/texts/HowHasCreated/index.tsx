import LazyLoadedText from "@/components/LazyLoadedText";

function HowHasCreated(): JSX.Element {
    return (
        <>
            <h3 id="#como-foi-criada">Como Foi Criada?</h3>
            <LazyLoadedText className="explantion">A média aritmética remonta à antiguidade e não há um criador ou evento específico associado a ela. </LazyLoadedText>
            <LazyLoadedText>A lógica é bem simples: somar todos os valores em um conjunto e depois dividir pela quantidade de valores presentes, ou seja, se tiver uma soma de <i>n</i> números, essa soma será dividia por <i>n</i></LazyLoadedText>
        </>
    )
}

export default HowHasCreated;