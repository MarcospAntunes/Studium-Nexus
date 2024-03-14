/* eslint-disable @next/next/no-img-element */
import { Arrow, Button, InputConverter, LoadingConversao, SelectUnit } from "@/components";
import { ConverterContainer, FlexContainerAdapter } from "@/containers";
import { useConverterReducer, useConverter, useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";

function DocMidiaConvertScreen({ params }: { params: { slug: string } }): JSX.Element {
    const { namesOfUnits } = useConverterReducer(params.slug);
    const { 
        setDestiny, 
        setOrigin, 
        setUpload,
        upload,
        resultOfConversion, 
        handleValue,
        clear
    } = useConverter(params.slug)
    const { theme } = useTheme();

    const fileName = upload ? upload![1] : "";
    
    const accept = namesOfUnits?.map((unit) => (
        `.${unit}`
    )).join(', ');

    const texto = resultOfConversion[1] === -1 ? "Erro ao converter arquivo" : "Clique em converter para inicar a conversão"

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
                required={true}
                onChange={(e) => setUpload([e.target.files![0], e.target.value])}
                theme={theme === "light" ? lightTheme : darkTheme}
                />
            </div>
            <div className="divConversao">
                <div className="divConversao">
                <div className="divConversao container">
                    <label htmlFor="original">Formato original</label>
                    <SelectUnit
                    name="original"
                    id="original"
                    defaultValue = {fileName?.replace(/[A-Za-z].*[.]/, "")}
                    arrayOfUnits={namesOfUnits}
                    onChange={e => setOrigin(e.target.value)}
                    setOrigin={setOrigin}
                    theme={theme === "light" ? lightTheme : darkTheme}
                    />
                </div>
                <Arrow src={`../../images/icons/arrow.png`} alt="arrow" theme={theme === "light" ? lightTheme : darkTheme}/>
                <div className="divConversao container">
                    <label htmlFor="destino">Formato destinado</label>
                    <SelectUnit
                    name="destino"
                    id="destino"
                    defaultValue={null}
                    arrayOfUnits={namesOfUnits}
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
                {resultOfConversion[1] > 0 && resultOfConversion[1] < 100 ?
                    <LoadingConversao percentage={resultOfConversion[1]} />
                :
                resultOfConversion[1] === 100 ?
                <>
                    <div className="divConversao">
                    <img src="../../../images/icons/convertido.png" alt="Convertido" className="convertido" />
                    </div>
                    <Button 
                    onClick={() => window.open(resultOfConversion[0], "_blank")} 
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
            </ConverterContainer>
        </FlexContainerAdapter>
    )
}

export default DocMidiaConvertScreen;