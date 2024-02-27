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
    <AppContainer>
      <Header convertion={true}/>
      <FlexContainerCenter>
        <h2>Converter {params.slug}</h2>

        {slug === "documento" || slug === "midia" ? 
          <FlexContainerAdapter>
            <ConversorContainer>
              <div className="divConversao container">
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
              <Button onClick={() => pegarValor()} theme={theme === "light" ? lightTheme : darkTheme}>Converter</Button>
              <Button theme={theme === "light" ? lightTheme : darkTheme}>Limpar</Button>
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
                    >
                      Download
                    </Button>
                  </>
                  :
                    <p>{texto}</p>
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
                <Button onClick={() => pegarValor()} theme={theme === "light" ? lightTheme : darkTheme}>Converter</Button>
                <Button theme={theme === "light" ? lightTheme : darkTheme}>Limpar</Button>
              </div>
            </ConversorContainer>

            <ConversorContainer>
              <div className="divConversao container">
                <p>Resultado</p>
                <div className="divConversao">
                  <Resultado theme={theme === "light" ? lightTheme : darkTheme}>{resultadoDaConversao}</Resultado>
                  <Resultado theme={theme === "light" ? lightTheme : darkTheme}>{unidade ? unidade[1] : ""}</Resultado>
                </div>
              </div>
            </ConversorContainer>
          </FlexContainerAdapter>
        }
      </FlexContainerCenter>
    </AppContainer>
  );
}
  
export default Conversor;
