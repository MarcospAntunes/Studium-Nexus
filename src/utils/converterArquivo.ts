import { ConverterProps } from "@/types";
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

async function converterArquivo({ unidade, upload }: ConverterProps) {
    const taskID = uuidv4();
    const formatoOriginal = unidade[0];
    const formatoDestinado = unidade[1];

    if (formatoOriginal && formatoDestinado && upload) {
        try {
            const apiKey = process.env.SECRET_KEY;
            const file = upload[0];
            const endpoint = 'https://api.cloudconvert.com/v2/jobs';
            const requestBody = {
                "tasks": {
                    [`import-${taskID}`]: {
                        "operation": `import/upload`,
                    },
                    [`task-${taskID}`]: {
                        "operation": "convert",
                        "input_format": formatoOriginal,
                        "output_format": formatoDestinado,
                        "engine": "office",
                        "input": [
                            `import-${taskID}`
                        ],
                        "optimize_print": true,
                        "pdf_a": false,
                        "include_markup": false,
                        "bookmarks": false
                    },
                    [`export-${taskID}`]: {
                        "operation": "export/url",
                        "input": [
                            `task-${taskID}`
                        ],
                        "inline": false,
                        "archive_multiple_files": false
                    }
                },
                "tag": "jobbuilder"
              }

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    "Content-type": "application/json"
                },
                body: JSON.stringify(requestBody)
            });
            const data = await response.json();

            if(response.ok) {
                const importTask = data.data.tasks[0].result.form
                const importInfo = importTask;
                const { url, parameters } = importInfo;
                const formData = new FormData();
                for(const key in parameters) {
                    formData.append(key, parameters[key]);
                }
                formData.append("file", file);
                const responseImport = await fetch(url, {
                    method: "POST",
                    body: formData
                })
                
                if(responseImport.ok) {
                    const downloadURL = await data.data.tasks[2].result.files[0].url;
                    console.log(data.data.tasks[2].result.files[0].url);
                    const responseDownload = await fetch(downloadURL);
                    const dataDownload = await responseDownload.json();
                    return [dataDownload, 1]
                } else {
                    console.log("Erro ao fazer download.")
                    return ["", 0]
                }
            } else {
                console.log("Erro ao criar tarefa.")
                return ["", 0]
            }
        } catch (error) {
            console.error('Erro ao converter arquivo:', error);
            return ["", 0]
        }
    } else {
        console.error('Formato original, formato de destino ou upload não especificados.');
        return ["", 0]
    }
}

export default converterArquivo;


