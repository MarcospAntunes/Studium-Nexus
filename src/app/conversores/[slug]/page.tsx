/* eslint-disable @next/next/no-img-element */
"use client"

import { 
  useConversorReducer, 
  useConverter, 
  useTheme 
} from "@/hooks";

import { darkTheme, lightTheme } from "@/themes";
import { 
  Arrow, 
  Button, 
  Header, 
  InputConversor, 
  SelectUnidade, 
  LoadingConversao, 
  Resultado 
} from '@/components';

import { 
  AppContainer, 
  ConversorContainer, 
  FlexContainerAdapter, 
  FlexContainerCenter 
} from "@/containers";
import GlobalStyles from "@/GlobalStyles";

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

  const texto = resultadoDaConversao[1] === -1 ? "Erro ao converter arquivo" : "Clique em converter para inicar a conversão"

  const { theme } = useTheme();

  return (
    <>
      <GlobalStyles theme={theme === "light" ? lightTheme : darkTheme} />
      <AppContainer>
        <Header convertion={true}/>
        <FlexContainerCenter>
          <h2>Converter {params.slug}</h2>

          {slug === "documento" || slug === "midia" ? 
            <FlexContainerAdapter>
              <ConversorContainer>
                <div className="divConversao container">
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
                <div className="divConversao">
                  <div className="divConversao">
                    <div className="divConversao container">
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
                    <div className="divConversao container">
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
                <div className="divConversao botoes">
                  <Button onClick={() => pegarValor()} theme={theme === "light" ? lightTheme : darkTheme} type="button">Converter</Button>
                  <Button theme={theme === "light" ? lightTheme : darkTheme} type="button">Limpar</Button>
                </div>
              </ConversorContainer>

              <ConversorContainer>
                <div className="divConversao container">
                  {resultadoDaConversao[1] > 0 && resultadoDaConversao[1] < 100 ?
                      <LoadingConversao porcentagem={resultadoDaConversao[1]} />
                  :
                    resultadoDaConversao[1] === 100 ?
                    <>
                      <div className="divConversao">
                        <img src="../../../images/icons/convertido.png" alt="Convertido" className="convertido" />
                      </div>
                      <Button 
                        onClick={() => window.open(resultadoDaConversao[0], "_blank")} 
                        theme={theme === "light" ? lightTheme : darkTheme}
                        type="button"
                        aria-live="assertive"
                      >
                        Download
                      </Button>
                    </>
                    :
                      <p aria-live="polite">{texto}</p>
                  } 
                </div>
              </ConversorContainer>
            </FlexContainerAdapter>
          :
            <FlexContainerAdapter>
              <ConversorContainer>
                <div className="divConversao container">
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
                <div className="divConversao">
                  <div className="divConversao">
                    <div className="divConversao container">
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
                    <div className="divConversao container">
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
                <div className="divConversao botoes">
                  <Button onClick={() => pegarValor()} theme={theme === "light" ? lightTheme : darkTheme} type="button">Converter</Button>
                  <Button theme={theme === "light" ? lightTheme : darkTheme} type="button">Limpar</Button>
                </div>
              </ConversorContainer>

              <ConversorContainer>
                <div className="divConversao container">
                  <p>Resultado</p>
                  <div className="divConversao">
                    <Resultado theme={theme === "light" ? lightTheme : darkTheme} aria-live="polite">{resultadoDaConversao}</Resultado>
                    <Resultado theme={theme === "light" ? lightTheme : darkTheme} aria-live="polite">{unidade ? unidade[1] : ""}</Resultado>
                  </div>
                </div>
              </ConversorContainer>
            </FlexContainerAdapter>
          }
        </FlexContainerCenter>
      </AppContainer>
    </>
  );
}
  
export default Conversor;
