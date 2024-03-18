import { CreateJobProps, ExportArchiveProps, ImportArchiveProps } from "./convertAPI.type";

async function createJob({unit, upload, taskID, apiKey}: CreateJobProps): Promise<any[] | undefined> {
    const originalFormat: string = unit[0];
    const destinyFormat: string = unit[1];
    if (originalFormat && destinyFormat && upload) {
        try {
            const endpoint: string = 'https://api.cloudconvert.com/v2/jobs';
            const requestBody: Object = {
                "tasks": {
                    [`import-${taskID}`]: {
                        "operation": `import/upload`,
                    },
                    [`task-${taskID}`]: {
                        "operation": "convert",
                        "input_format": originalFormat,
                        "output_format": destinyFormat,
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
    
            const response: Response = await fetch(endpoint, {
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

async function importArchive({ data, file }: ImportArchiveProps): Promise<any[]> {
    try {
        const importTask = data.data.tasks[0].result.form
        const importInfo = importTask;
        const { url, parameters } = importInfo;
        const formData: FormData = new FormData();
        for(const key in parameters) {
            formData.append(key, parameters[key]);
        }
        formData.append("file", file);
        const responseImport: Response = await fetch(url, {
            method: "POST",
            body: formData
        })
        return [data, 90]
    } catch(error) {
        console.log("Erro ao importar arquivo", error)
        return ["", -1]
    } 
}

async function exportArchive({data, apiKey}: ExportArchiveProps): Promise<any[] | undefined> {
    try {
        const inputTaskIds: string = data.data.tasks[2].id
        const endpoint: string = `https://sync.api.cloudconvert.com/v2/tasks/${inputTaskIds}?include=payload`
    
        const request: Response = await fetch(endpoint, {
            method: "GET",
            headers: {
            "Authorization": `Bearer ${apiKey}`,
            },
        });
        if(request.ok) {
            const res = await request.json()
            const url: string = res.data.result.files[0].url;
            return [url, 100]
        }
    } catch(error) {
        console.log("Erro ao fornecer link de download", error)
        return ["", -1]
    }
}

export { createJob, importArchive, exportArchive }