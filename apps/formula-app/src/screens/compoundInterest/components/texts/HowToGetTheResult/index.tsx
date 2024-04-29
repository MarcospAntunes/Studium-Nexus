import HowToGetTheResultProps from "./HowToGetTheResult.type";

function HowToGetTheResult({
  values,
  result,
}: HowToGetTheResultProps): JSX.Element {
  const [amount, fees] = result;
  const [c, i, t] = values || ["C", "i", "t"];
  return (
    <>
      <h3 id="passo-a-passo">Como Chegar no Resultado</h3>
      <ol type="1">
        <li>
          Basta multiplicarmos todos os valores obtidos:{" "}
          <strong>
            M ={" "}
            <span>
              {c || "C"} (1 + {i || "i"})<sup>{t || "t"}</sup>
            </span>
          </strong>{" "}
          <br />
          Com isso, iremos obter um resultado igual a{" "}
          <strong>
            {!isNaN(fees)
              ? fees?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              : "J"}
          </strong>
        </li>
        <li>
          Caso deseje, você pode calcular o montante somando o capital inicial
          com o valor do juros que foi calculado anteriormente:{" "}
          <strong>
            M = {c} + {fees || "J"}
          </strong>
          <p>
            Assim, obtendo o resultado{" "}
            <strong>
              {!isNaN(amount)
                ? amount?.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                : "M"}
            </strong>
          </p>
        </li>
      </ol>
    </>
  );
}

export default HowToGetTheResult;
