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
import useTheme from "@/hooks/useTheme";
import { darkTheme, lightTheme } from "@/themes";

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

  const { theme } = useTheme();

  return (
    <AppContainer>
      <Header convertion={true}/>
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
                  theme={theme === "light" ? lightTheme : darkTheme}
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
                      theme={theme === "light" ? lightTheme : darkTheme}
                    />
                  </div>
                  <Arrow src={`../../images/icons/arrow.png`} alt="arrow" theme={theme === "light" ? lightTheme : darkTheme}/>
                  <div className="container">
                    <label htmlFor="destino">Formato destinado</label>
                    <SelectUnidade
                      name="destino"
                      id="destino"
                      arrayDeUnidades={nomesDasUnidades}
                      onChange={e => setDestino(e.target.value)}
                      theme={theme === "light" ? lightTheme : darkTheme}
                    />
                  </div>
                </div>
              </div>
              <Button onClick={() => pegarValor()} theme={theme === "light" ? lightTheme : darkTheme}>Converter</Button>
              <Button theme={theme === "light" ? lightTheme : darkTheme}>Limpar</Button>
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
                  theme={theme === "light" ? lightTheme : darkTheme}
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
                      theme={theme === "light" ? lightTheme : darkTheme}
                    />
                  </div>
                  <Arrow src={`../../images/icons/arrow.png`} alt="arrow" theme={theme === "light" ? lightTheme : darkTheme} />
                  <div className="container">
                    <label htmlFor="destino">Destino</label>
                      <SelectUnidade
                        name="destino"
                        id="destino"
                        arrayDeUnidades={nomesDasUnidades}
                        onChange={e => setDestino(e.target.value)}
                        theme={theme === "light" ? lightTheme : darkTheme}
                      />
                  </div>
                </div>
              </div>
              <Button onClick={() => pegarValor()} theme={theme === "light" ? lightTheme : darkTheme}>Converter</Button>
              <Button theme={theme === "light" ? lightTheme : darkTheme}>Limpar</Button>
            </ConversorContainer>

            <ConversorContainer>
              <div className="container">
                <p>Resultado</p>
                <div>
                  <Resultado theme={theme === "light" ? lightTheme : darkTheme}>{resultadoDaConversao}</Resultado>
                  <Resultado theme={theme === "light" ? lightTheme : darkTheme}>{unidade ? unidade[1] : ""}</Resultado>
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
