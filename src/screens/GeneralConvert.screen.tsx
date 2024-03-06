import { Arrow, Button, InputConverter, Result, SelectUnit } from "@/components";
import { ConverterContainer, FlexContainerAdapter } from "@/containers";
import { useConverterReducer, useConverter, useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";

function GeneralConvertScreen({ params }: { params: { slug: string } }): JSX.Element {
    const slug = params.slug
    const { namesOfUnits, valuesOfUnits } = useConverterReducer(slug);
    const itens = slug === "moeda" ? valuesOfUnits : namesOfUnits
    
    const { 
        setDestiny, 
        setOrigin, 
        setValue,
        value, 
        resultOfConversion, 
        unit, 
        handleValue,
        clear
    } = useConverter(params.slug)
    const { theme } = useTheme();

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
                theme={theme === "light" ? lightTheme : darkTheme}
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
                    onChange={e => setOrigin(e.target.value)}
                    theme={theme === "light" ? lightTheme : darkTheme}
                    />
                </div>
                <Arrow src={`../../images/icons/arrow.png`} alt="arrow" theme={theme === "light" ? lightTheme : darkTheme} />
                <div className="divConversao container">
                    <label htmlFor="destino">Destino</label>
                    <SelectUnit
                        name="destino"
                        id="destino"
                        defaultValue={null}
                        arrayOfUnits={itens}
                        onChange={e => setDestiny(e.target.value)}
                        theme={theme === "light" ? lightTheme : darkTheme}
                    />
                </div>
                </div>
            </div>
            <div className="divConversao botoes">
                <Button onClick={() => handleValue()} theme={theme === "light" ? lightTheme : darkTheme} type="button">Converter</Button>
                <Button theme={theme === "light" ? lightTheme : darkTheme} type="button" onClick={() => clear()}>limpar</Button>
            </div>
            </ConverterContainer>

            <ConverterContainer>
            <div className="divConversao container">
                <p>Resultado</p>
                <div className="divConversao">
                <Result theme={theme === "light" ? lightTheme : darkTheme} aria-live="polite">{resultOfConversion}</Result>
                <Result theme={theme === "light" ? lightTheme : darkTheme} aria-live="polite">{unit ? unit[1] : ""}</Result>
                </div>
            </div>
            </ConverterContainer>
        </FlexContainerAdapter>
    )
}

export default GeneralConvertScreen;