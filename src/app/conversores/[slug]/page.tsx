"use client"

import Arrow from "@/components/Arrow";
import Button from "@/components/Button";
import Header from "@/components/Header";
import InputConversor from "@/components/InputConversor";
import Resultado from "@/components/Resultado";
import SelectUnidade from "@/components/SelectUnidade";
import AppContainer from "@/containers/AppContainer";
import ConversorContainer from "@/containers/ConversorContainer";
import { FlexContainerCenter } from "@/containers/FlexContainer";
import useConversorReducer from "@/hooks/useConversorReducer";
import useConverter from "@/hooks/useConverter";

function Conversor({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const { nomesDasUnidades } = useConversorReducer(slug);
  const { 
    setDestino, 
    setOrigem, 
    setUpload, 
    setValor, 
    valor, 
    upload,
    resultadoDaConversao, 
    unidade, 
    pegarValor,
  } = useConverter(slug)

  return (
    <AppContainer>
      <Header convertion={true} />
      <FlexContainerCenter>
        <h2>Converter {params.slug}</h2>

        {slug === "documento" || slug === "midia" ? 
          <>
            <ConversorContainer>
              <div className="container">
                <label htmlFor="upload">Carregue o arquivo</label>
                <InputConversor
                  type="file"
                  name="upload"
                  id="upload"
                  value={upload ? upload![1] : ""}
                  required={true}
                  onChange={(e) => setUpload([e.target.files![0], e.target.value])}
                />
              </div>
              <div>
                <div>
                  <div className="container">
                    <label htmlFor="original">Formato original</label>
                    <SelectUnidade
                      name="original"
                      id="original"
                      arrayDeUnidades={nomesDasUnidades}
                      onChange={e => setOrigem(e.target.value)}
                    />
                  </div>
                  <Arrow src="../../images/icons/light-theme/arrow.png" alt="arrow" />
                  <div className="container">
                    <label htmlFor="destino">Formato destinado</label>
                    <SelectUnidade
                      name="destino"
                      id="destino"
                      arrayDeUnidades={nomesDasUnidades}
                      onChange={e => setDestino(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <Button onClick={() => pegarValor()}>Converter</Button>
              <Button>Limpar</Button>
            </ConversorContainer>

            <ConversorContainer>
              <div className="container">
                {resultadoDaConversao ?
                  <>
                    <p>Convertido</p>
                    <div>
                      <img src="../../../images/icons/convertido.png" alt="Convertido" />
                    </div>
                  </>
                :
                  <p>Convertendo...</p>
                }
                
                
              </div>
            </ConversorContainer>
          </>
        :
          <>
            <ConversorContainer>
              <div className="container">
                <label htmlFor="valor">Valor</label>
                <InputConversor
                  type="number"
                  name="valor"
                  id="valor"
                  value={valor}
                  required={true}
                  onChange={(e) => setValor(e.target.value)}
                  placeholder="Digite o valor a ser convertido"
                />
              </div>
              <div>
                <div>
                  <div className="container">
                    <label htmlFor="origem">Origem</label>
                    <SelectUnidade
                      name="origem"
                      id="origem"
                      arrayDeUnidades={nomesDasUnidades}
                      onChange={e => setOrigem(e.target.value)}
                    />
                  </div>
                  <Arrow src="../../images/icons/light-theme/arrow.png" alt="arrow" />
                  <div className="container">
                    <label htmlFor="destino">Destino</label>
                      <SelectUnidade
                        name="destino"
                        id="destino"
                        arrayDeUnidades={nomesDasUnidades}
                        onChange={e => setDestino(e.target.value)}
                      />
                  </div>
                </div>
              </div>
              <Button onClick={() => pegarValor()}>Converter</Button>
              <Button>Limpar</Button>
            </ConversorContainer>

            <ConversorContainer>
              <div className="container">
                <p>Resultado</p>
                <div>
                  <Resultado>{resultadoDaConversao}</Resultado>
                  <Resultado>{unidade ? unidade[1] : ""}</Resultado>
                </div>
              </div>
            </ConversorContainer>
          </>
        }
      </FlexContainerCenter>
    </AppContainer>
  );
}
  
export default Conversor;
