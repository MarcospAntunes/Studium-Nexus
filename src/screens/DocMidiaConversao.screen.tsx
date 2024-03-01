/* eslint-disable @next/next/no-img-element */
import { Arrow, Button, InputConversor, LoadingConversao, SelectUnidade } from "@/components";
import { ConversorContainer, FlexContainerAdapter } from "@/containers";
import { useConversorReducer, useConverter, useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";

function DocMidiaConvertScreen({ params }: { params: { slug: string } }) {
    const { nomesDasUnidades } = useConversorReducer(params.slug);
    const { 
        setDestino, 
        setOrigem, 
        setUpload,
        upload,
        resultadoDaConversao, 
        pegarValor,
        limpar
    } = useConverter(params.slug)
    const { theme } = useTheme();
    const fileName = upload ? upload![1] : "";
    const accept = nomesDasUnidades?.map((unidade) => (
        `.${unidade}`
    )).join(', ');

    const texto = resultadoDaConversao[1] === -1 ? "Erro ao converter arquivo" : "Clique em converter para inicar a conversão"

    return (
        <FlexContainerAdapter>
            <ConversorContainer>
            <div className="divConversao container">
                <InputConversor
                type="file"
                accept={accept}
                name="upload"
                id="upload"
                value={fileName}
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
                    defaultValue = {fileName.replace(/[A-Za-z].*[.]/, "")}
                    arrayDeUnidades={nomesDasUnidades}
                    onChange={e => setOrigem(e.target.value)}
                    setOrigem={setOrigem}
                    theme={theme === "light" ? lightTheme : darkTheme}
                    />
                </div>
                <Arrow src={`../../images/icons/arrow.png`} alt="arrow" theme={theme === "light" ? lightTheme : darkTheme}/>
                <div className="divConversao container">
                    <label htmlFor="destino">Formato destinado</label>
                    <SelectUnidade
                    name="destino"
                    id="destino"
                    defaultValue={null}
                    arrayDeUnidades={nomesDasUnidades}
                    onChange={e => setDestino(e.target.value)}
                    theme={theme === "light" ? lightTheme : darkTheme}
                    />
                </div>
                </div>
            </div>
            <div className="divConversao botoes">
                <Button onClick={() => pegarValor()} theme={theme === "light" ? lightTheme : darkTheme} type="button">Converter</Button>
                <Button theme={theme === "light" ? lightTheme : darkTheme} type="button" onClick={() => limpar()}>Limpar</Button>
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
    )
}

export default DocMidiaConvertScreen;