import { Arrow, Button, InputConversor, Resultado, SelectUnidade } from "@/components";
import { ConversorContainer, FlexContainerAdapter } from "@/containers";
import { useConversorReducer, useConverter, useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";

function GeneralConvertScreen({ params }: { params: { slug: string } }) {
    const slug = params.slug
    const { nomesDasUnidades, valoresDasUnidades } = useConversorReducer(slug);
    const itens = slug === "moeda" ? valoresDasUnidades : nomesDasUnidades
    
    const { 
        setDestino, 
        setOrigem, 
        setValor,
        valor, 
        resultadoDaConversao, 
        unidade, 
        pegarValor,
        limpar
    } = useConverter(params.slug)
    const { theme } = useTheme();

    return (
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
                    defaultValue={null}
                    arrayDeUnidades={itens}
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
                        defaultValue={null}
                        arrayDeUnidades={itens}
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
                <p>Resultado</p>
                <div className="divConversao">
                <Resultado theme={theme === "light" ? lightTheme : darkTheme} aria-live="polite">{resultadoDaConversao}</Resultado>
                <Resultado theme={theme === "light" ? lightTheme : darkTheme} aria-live="polite">{unidade ? unidade[1] : ""}</Resultado>
                </div>
            </div>
            </ConversorContainer>
        </FlexContainerAdapter>
    )
}

export default GeneralConvertScreen;