import { LazyLoadedText } from "../../../../../components";

function HowHasCreated(): JSX.Element {
  return (
    <>
      <h3 id="#como-foi-criada">Como Foi Criada?</h3>
      <LazyLoadedText className="explantion">
        A fórmula de juros simples é derivada de uma ideia fundamental de que os
        juros são calculados apenas sobre o principal inicial e não incluem os
        juros acumulados.{" "}
      </LazyLoadedText>
      <LazyLoadedText>
        Está fórmula apresenta indícios de que era utilizada em atividades
        comerciais antigas, sendo utilizada há muitos anos.
      </LazyLoadedText>
      <LazyLoadedText>
        A fórmula é representada da seguinte maneira:
      </LazyLoadedText>
      <ul>
        <li>
          <strong>J = C x i x t</strong>
        </li>
        <li>
          <i>J</i> é o valor dos <strong>juros acumulados</strong>
        </li>
        <li>
          <i>C</i> é o <strong>capital inicial</strong>
        </li>
        <li>
          <i>i</i> é a <strong>taxa de juros</strong>
        </li>
        <li>
          <i>t</i> é o <strong>tempo em anos</strong> em que o dinheiro é
          aplicado
        </li>
      </ul>
    </>
  );
}

export default HowHasCreated;
