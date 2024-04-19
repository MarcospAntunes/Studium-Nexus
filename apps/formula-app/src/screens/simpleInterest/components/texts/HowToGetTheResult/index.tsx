type HowToGetTheResultProps = {
  result: Array<number>;
  values: Array<number>;
};

function HowToGetTheResult({ result, values }: HowToGetTheResultProps) {
  const [amount, fees] = result;
  const [c, i, t] = values || ["C", "i", "t"];
  return (
    <>
      <h3 id="passo-a-passo">Como Chegar no Resultado</h3>
      <ol type="1">
        <li>
          Basta multiplicarmos todos os valores obtidos:{" "}
          <strong>
            J = {c || "C"} x {i || "i"} x {t || "t"}
          </strong>{" "}
          <br />
          Com isso, iremos obter um resultado igual a{" "}
          <strong>
            {fees?.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            }) || "J"}
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
              {amount?.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              }) || "M"}
            </strong>
          </p>
        </li>
      </ol>
    </>
  );
}

export default HowToGetTheResult;
