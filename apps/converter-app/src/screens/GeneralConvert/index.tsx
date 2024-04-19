"use client";

import {
  Arrow,
  Button,
  InputConverter,
  ResultConverter,
  SelectUnit,
} from "../../components";
import { ConverterContainer, FlexContainerAdapter } from "../../containers";
import { useConverterReducer, useConverter } from "../../hooks";

function GeneralConvertScreen({
  params,
}: {
  params: { slug: string };
}): JSX.Element {
  const slug: string = params.slug;
  const { namesOfUnits, valuesOfUnits } = useConverterReducer(slug);
  const itens: string[] = slug === "moeda" ? valuesOfUnits : namesOfUnits;

  const {
    setDestiny,
    setOrigin,
    setValue,
    value,
    resultOfConversion,
    unit,
    handleValue,
    clear,
  } = useConverter(params.slug);

  return (
    <FlexContainerAdapter>
      <ConverterContainer>
        <div className="divConversao container">
          <label htmlFor="valor">Valor</label>
          <InputConverter
            type="number"
            name="valor"
            accept={undefined}
            id="valor"
            value={value}
            required={true}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Digite o valor a ser convertido"
          />
        </div>
        <div className="divConversao">
          <div className="divConversao">
            <div className="divConversao container">
              <label htmlFor="origem">Origem</label>
              <SelectUnit
                name="origem"
                id="origem"
                defaultValue={null}
                arrayOfUnits={itens}
                onChange={(e) => setOrigin(e.target.value)}
              />
            </div>
            <Arrow />
            <div className="divConversao container">
              <label htmlFor="destino">Destino</label>
              <SelectUnit
                name="destino"
                id="destino"
                defaultValue={null}
                arrayOfUnits={itens}
                onChange={(e) => setDestiny(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="divConversao botoes">
          <Button onClick={() => handleValue()} type="button">
            Converter
          </Button>
          <Button type="button" onClick={() => clear()}>
            limpar
          </Button>
        </div>
      </ConverterContainer>

      <ConverterContainer>
        <div className="divConversao container">
          <p>Resultado</p>
          <div className="divConversao">
            <ResultConverter aria-live="polite">
              {resultOfConversion}
            </ResultConverter>
            <ResultConverter aria-live="polite">
              {unit ? unit[1] : ""}
            </ResultConverter>
          </div>
        </div>
      </ConverterContainer>
    </FlexContainerAdapter>
  );
}

export default GeneralConvertScreen;
