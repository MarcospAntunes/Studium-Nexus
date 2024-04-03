/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useEffect, useState } from "react";
import { convertUnitsAndCoins } from "../../utils";
import { createJob, exportArchive, importArchive } from "../../services";
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import { useUnitsSelectedContext, useConverterReducer } from "../../hooks";

dotenv.config();

function useConverter(slug: string) {
    const { state } = useConverterReducer(slug);
    const [value, setValue] = useState<string>("");
    const [upload, setUpload] = useState<[File, string] | any>([]);
    const { unit, setUnit } = useUnitsSelectedContext();
    const [resultOfConversion, setResultOfConversion] = useState<any>(0);
    const [origin, setOrigin] = useState<string>("");
    const [destiny, setDestiny] = useState<string>("");
    const taskID: string = uuidv4();

    useEffect(() => {
        setUnit([origin, destiny]);
    }, [destiny, origin])

    const handleValue: () => Promise<void> = async () => {
        if (origin && destiny) {
            if (slug === "documento" || slug === "midia") {
                setResultOfConversion(["", 15])
                try {
                    const apiKey = process.env.CONVERT_KEY;
                    const resultOfConversion = await createJob({ unit, upload, taskID, apiKey });
                    setResultOfConversion(resultOfConversion);

                    if (resultOfConversion && resultOfConversion[1] !== -1) {
                        const data = resultOfConversion[0];
                        const file = upload![0];
                        const resultImportArchive = await importArchive({ data, file });
                        setResultOfConversion(resultImportArchive);

                        if (resultImportArchive && resultImportArchive[1] !== -1) {
                            const resultExportArchive = await exportArchive({ data, apiKey });
                            setResultOfConversion(resultExportArchive);
                        }
                    }
                } catch (error) {
                    console.error('Erro durante a conversão:', error);
                }
            } else {
                const resultado = await convertUnitsAndCoins({ unit, value, state, slug })
                setResultOfConversion(resultado);
            }
        } else {
            alert("Uma ou mais unidades não foram escolhidas");
        }
    }

    const clear: VoidFunction = () => {
        const selecteds = document.querySelectorAll("select");
        selecteds.forEach((selected) => {
            selected.value = "";
        })

        setDestiny("");
        setOrigin("");
        setResultOfConversion(0);
        setUpload([]);
        setValue("");
    }

    return {
        setOrigin,
        setValue,
        setDestiny,
        setUpload,
        setResultOfConversion,
        value,
        unit,
        resultOfConversion,
        upload,
        handleValue,
        clear
    }
}

export default useConverter;