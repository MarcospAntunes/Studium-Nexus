/* eslint-disable @next/next/no-img-element */

import { FormulaImage } from "@/components";
import LazyLoadedText from "@/components/LazyLoadedText";

function HowHasCreated() {
    return(
        <>
            <h2 id="#como-foi-criada">Como Foi Criada?</h2>
            <LazyLoadedText className="explantion">A fórmula de Bhaskara foi <strong>demonstrada</strong> pelo matemático <strong>Bhaskara II no século XII</strong>. Ele era um renomado matemático e astrônomo que contribuiu significativamente para a matemática e ciências astronômicas da Índia medieval. Vale ressaltar que, embora tenha a fórmula tenha seu nome como homenagem, <strong>não</strong> foi Bhaskara II que a criou, pois acredita-se que a fórmula ja era conhecida antes.</LazyLoadedText>
            <LazyLoadedText>A fórmula de Bhaskara é derivada principalmente de uma técnica conhecida como <strong>complementar o quadrado</strong>. Abaixo está um resumo do processo até chegar na fórmula que conhecemos atualmente:</LazyLoadedText>
            <ol type="1">
                <li>
                    Começamos com a forma geral de uma equação quadrática:
                    <LazyLoadedText className="formulaContent">
                        <FormulaImage src='../../images/formulaImages/bhaskara/images/equation1.png' alt="equação quadrática" />
                    </LazyLoadedText>
                </li>

                <li>
                    Após isso, movemos o termo constante <i>c</i> para outro lado da equação:
                    <LazyLoadedText className="formulaContent">
                    <FormulaImage src='../../images/formulaImages/bhaskara/images/equation2.png' alt="constate no outro lado da equação" />
                    </LazyLoadedText>
                </li>

                <li>
                    Agora iremos dividir ambos os lados da equação por <i>a</i> para simplificar futuros cálculos, assumindo que <i>a</i> seja diferente de zero:
                    <LazyLoadedText className="formulaContent">
                    <FormulaImage src='../../images/formulaImages/bhaskara/images/equation3.png' alt="dividir ambos os lados por a" />
                    </LazyLoadedText>
                </li>
                
                <li>
                    Para completar o quadrado, adicionamos o quadrado do quarto do coeficiente de <i>x</i> elevado ao quadrado nos dois lados da equação:
                    <LazyLoadedText className="formulaContent">
                        <FormulaImage src='../../images/formulaImages/bhaskara/images/equation4.png' alt="completar o quadrado" />
                    </LazyLoadedText>
                </li>

                <li>
                    Feito isso, o lado esquerdo da equação pode ser reescrito como um quadrado perfeito:
                    <LazyLoadedText className="formulaContent">
                        <FormulaImage src='../../images/formulaImages/bhaskara/images/equation5.png' alt="quadrado perfeito" />
                    </LazyLoadedText>
                </li>

                <li>
                    Agora, iremos extrair a raíz quadrada em ambos os lados:
                    <LazyLoadedText className="formulaContent">
                        <FormulaImage src='../../images/formulaImages/bhaskara/images/equation6.png' alt="Extrair a raíz quadrada em ambos os lados" />
                    </LazyLoadedText>
                </li>
                
                <li>
                    Na raíz iremos calcular o múltiplo comum dos denominadores e teremos o este resultado:
                    <LazyLoadedText className="formulaContent">
                        <FormulaImage src='../../images/formulaImages/bhaskara/images/equation7.png' alt="Calcular o múltiplo comum dos denominadores" />
                    </LazyLoadedText>
                </li>

                <li>
                    Usando o a propriedade de radiação (extrair raíz quadrada de uma divisão é a mesma coisa que fazer a raíz quadrada do numerador pelo denominador):
                    <LazyLoadedText className="formulaContent">
                        <FormulaImage src='../../images/formulaImages/bhaskara/images/equation8.png' alt="Fazer a raíz quadrada do numerador pelo denominador" />
                    </LazyLoadedText>
                    Porém, nota-se que <i>4a<sup>2</sup></i> é um quadrado perfeito e com isso podemos tirar a raíz, resultando em: 
                    <LazyLoadedText className="formulaContent">
                        <FormulaImage src='../../images/formulaImages/bhaskara/images/equation8.1.png' alt="Tirar a raíz" />
                    </LazyLoadedText>
                </li>

                <li>
                    Feito isso, iremos passar <i>b/2a</i> para o lado direito da equação, deixando apenas o x no lado esquerdo:
                    <LazyLoadedText className="formulaContent">
                        <FormulaImage src='../../images/formulaImages/bhaskara/images/equation9.png' alt="Tirar a raíz" />
                    </LazyLoadedText>
                    Para ficar mais organizado, iremos deixar tudo no mesmo denomidador e, finalmente, teremos nossa fórmula de bhaskara!
                    <LazyLoadedText className="formulaContent">
                    <FormulaImage src='../../images/formulaImages/bhaskara/images/equation9.1.png' alt="Tirar a raíz" />
                    </LazyLoadedText>
                </li>
            </ol>
        </>
    )
}

export default HowHasCreated;