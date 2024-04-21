/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Arrow,
  Button,
  InputConverter,
  LoadingConversao,
  SelectUnit,
} from "../../components";
import { ConverterContainer, FlexContainerAdapter } from "../../containers";
import { useConverterReducer, useConverter } from "../../hooks";

function DocMidiaConvertScreen({
  params,
}: {
  params: { slug: string };
}): JSX.Element {
  const { namesOfUnits } = useConverterReducer(params.slug);
  const {
    setDestiny,
    setOrigin,
    setUpload,
    upload,
    resultOfConversion,
    handleValue,
    clear,
  } = useConverter(params.slug);

  const fileName = upload ? upload![1] : "";

  const accept: string = namesOfUnits?.map((unit) => `.${unit}`).join(", ");

  const texto =
    resultOfConversion[1] === -1
      ? resultOfConversion[0]
      : "Clique em converter para inicar a conversão";

  return (
    <FlexContainerAdapter>
      <ConverterContainer>
        <div className="divConversao container">
          <InputConverter
            type="file"
            accept={accept}
            name="upload"
            id="upload"
            value={fileName}
            multiple={true}
            required={true}
            onChange={(e) => setUpload([e.target.files, e.target.value])}
          />
        </div>
        <div className="divConversao">
          <div className="divConversao">
            <div className="divConversao container">
              <label htmlFor="original">Formato original</label>
              <SelectUnit
                name="original"
                id="original"
                defaultValue={fileName?.replace(/[A-Za-z].*[.]/, "")}
                arrayOfUnits={namesOfUnits}
                onChange={(e) => setOrigin(e.target.value)}
                setOrigin={setOrigin}
              />
            </div>
            <Arrow />
            <div className="divConversao container">
              <label htmlFor="destino">Formato destinado</label>
              <SelectUnit
                name="destino"
                id="destino"
                defaultValue={null}
                arrayOfUnits={namesOfUnits}
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
          {resultOfConversion[1] > 0 && resultOfConversion[1] < 100 ? (
            <LoadingConversao percentage={resultOfConversion[1]} />
          ) : resultOfConversion[1] === 100 ? (
            <>
              <div className="divConversao">
                <img
                  src="/icons/convertido.png"
                  alt="Convertido"
                  className="convertido"
                />
              </div>
              <Button
                onClick={() => window.open(resultOfConversion[0], "_blank")}
                type="button"
                aria-live="assertive"
              >
                Download
              </Button>
            </>
          ) : (
            <p aria-live="polite">{texto}</p>
          )}
        </div>
      </ConverterContainer>
    </FlexContainerAdapter>
  );
}

export default DocMidiaConvertScreen;
