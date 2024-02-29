import { CriaTrabalhoProps, ExportarArquivoProps, ImportarArquivoProps } from "./convertAPI.type";

async function criaTrabalho({unidade, upload, taskID, apiKey}: CriaTrabalhoProps) {
    const formatoOriginal = unidade[0];
    const formatoDestinado = unidade[1];
    if (formatoOriginal && formatoDestinado && upload) {
        try {
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
                        "input": [
                            `import-${taskID}`
                        ],
                        "optimize_print": true,
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

            return [data, 35]
        
        } catch(error) {
            console.log("Erro ao criar trabalho", error)
            return ["", -1]
        }
    }
}

async function importarArquivo({ data, file }: ImportarArquivoProps) {
    try {
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
        return [data, 90]
    } catch(error) {
        console.log("Erro ao importar arquivo", error)
        return ["", -1]
    } 
}

async function exportarArquivo({data, apiKey}: ExportarArquivoProps) {
    try {
        const inputTaskIds = data.data.tasks[2].id
        const endpoint = `https://sync.api.cloudconvert.com/v2/tasks/${inputTaskIds}?include=payload`
    
        const request = await fetch(endpoint, {
            method: "GET",
            headers: {
            "Authorization": `Bearer ${apiKey}`,
            },
        });
        if(request.ok) {
            const res = await request.json()
            const url = res.data.result.files[0].url;
            return [url, 100]
        }
    } catch(error) {
        console.log("Erro ao fornecer link de download", error)
        return ["", -1]
    }
}

export { criaTrabalho, importarArquivo, exportarArquivo }