/* eslint-disable @next/next/no-img-element */

import { FormulaImage } from "@/components";

function HowHasCreated() {
    return(
        <>
            <h2 id="#como-foi-criada">Como Foi Criada?</h2>
            <p className="explantion">A fórmula de Bhaskara foi <strong>demonstrada</strong> pelo matemático <strong>Bhaskara II no século XII</strong>. Ele era um renomado matemático e astrônomo que contribuiu significativamente para a matemática e ciências astronômicas da Índia medieval. Vale ressaltar que, embora tenha a fórmula tenha seu nome como homenagem, <strong>não</strong> foi Bhaskara II que a criou, pois acredita-se que a fórmula ja era conhecida antes.</p>
            <p className="explantion">A fórmula de Bhaskara é derivada principalmente de uma técnica conhecida como <strong>complementar o quadrado</strong>. Abaixo está um resumo do processo até chegar na fórmula que conhecemos atualmente:</p>
            <ol type="1">
                <li>
                    Começamos com a forma geral de uma equação quadrática:
                    <p className="formulaContent">
                        <FormulaImage src='../../images/formulaImages/bhaskara/images/equation1.png' alt="equação quadrática" />
                    </p>
                </li>

                <li>
                    Após isso, movemos o termo constante <i>c</i> para outro lado da equação:
                    <p className="formulaContent">
                    <FormulaImage src='../../images/formulaImages/bhaskara/images/equation2.png' alt="constate no outro lado da equação" />
                    </p>
                </li>

                <li>
                    Agora iremos dividir ambos os lados da equação por <i>a</i> para simplificar futuros cálculos, assumindo que <i>a</i> seja diferente de zero:
                    <p className="formulaContent">
                    <FormulaImage src='../../images/formulaImages/bhaskara/images/equation3.png' alt="dividir ambos os lados por a" />
                    </p>
                </li>
                
                <li>
                    Para completar o quadrado, adicionamos o quadrado do quarto do coeficiente de <i>x</i> elevado ao quadrado nos dois lados da equação:
                    <p className="formulaContent">
                        <FormulaImage src='../../images/formulaImages/bhaskara/images/equation4.png' alt="completar o quadrado" />
                    </p>
                </li>

                <li>
                    Feito isso, o lado esquerdo da equação pode ser reescrito como um quadrado perfeito:
                    <p className="formulaContent">
                        <FormulaImage src='../../images/formulaImages/bhaskara/images/equation5.png' alt="quadrado perfeito" />
                    </p>
                </li>

                <li>
                    Agora, iremos extrair a raíz quadrada em ambos os lados:
                    <p className="formulaContent">
                        <FormulaImage src='../../images/formulaImages/bhaskara/images/equation6.png' alt="Extrair a raíz quadrada em ambos os lados" />
                    </p>
                </li>
                
                <li>
                    Na raíz iremos calcular o múltiplo comum dos denominadores e teremos o este resultado:
                    <p className="formulaContent">
                        <FormulaImage src='../../images/formulaImages/bhaskara/images/equation7.png' alt="Calcular o múltiplo comum dos denominadores" />
                    </p>
                </li>

                <li>
                    Usando o a propriedade de radiação (extrair raíz quadrada de uma divisão é a mesma coisa que fazer a raíz quadrada do numerador pelo denominador):
                    <p className="formulaContent">
                        <FormulaImage src='../../images/formulaImages/bhaskara/images/equation8.png' alt="Fazer a raíz quadrada do numerador pelo denominador" />
                    </p>
                    Porém, nota-se que <i>4a<sup>2</sup></i> é um quadrado perfeito e com isso podemos tirar a raíz, resultando em: 
                    <p className="formulaContent">
                        <FormulaImage src='../../images/formulaImages/bhaskara/images/equation8.1.png' alt="Tirar a raíz" />
                    </p>
                </li>

                <li>
                    Feito isso, iremos passar <i>b/2a</i> para o lado direito da equação, deixando apenas o x no lado esquerdo:
                    <p className="formulaContent">
                        <FormulaImage src='../../images/formulaImages/bhaskara/images/equation9.png' alt="Tirar a raíz" />
                    </p>
                    Para ficar mais organizado, iremos deixar tudo no mesmo denomidador e, finalmente, teremos nossa fórmula de bhaskara!
                    <p className="formulaContent">
                    <FormulaImage src='../../images/formulaImages/bhaskara/images/equation9.1.png' alt="Tirar a raíz" />
                    </p>
                </li>
            </ol>
        </>
    )
}

export default HowHasCreated;