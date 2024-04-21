import {
  CreateJobProps,
  ExportArchiveProps,
  ImportArchiveProps,
} from "./convertAPI.type";

async function createJob({
  unit,
  upload,
  taskID,
  apiKey,
}: CreateJobProps): Promise<any[] | undefined> {
  const originalFormat: string = unit[0];
  const destinyFormat: string = unit[1];
  if (originalFormat && destinyFormat && upload) {
    try {
      const endpoint: string = "https://api.cloudconvert.com/v2/jobs";
      const tasks: Record<string, any> = {};

      // Crie uma task de import para cada arquivo
      for (let i = 0; i < upload.length; i++) {
        tasks[`import-${taskID}-${i}`] = {
          operation: `import/upload`,
        };
      }

      tasks[`task-${taskID}`] = {
        operation: "convert",
        input_format: originalFormat,
        output_format: destinyFormat,
        input: [],
        optimize_print: true,
        include_markup: false,
        bookmarks: false,
      };

      // Adicione os inputs de todas as tasks de import à task de conversão
      for (let i = 0; i < upload.length; i++) {
        tasks[`task-${taskID}`].input.push(`import-${taskID}-${i}`);
      }

      tasks[`export-${taskID}`] = {
        operation: "export/url",
        input: [`task-${taskID}`],
        inline: false,
        archive_multiple_files: true,
      };

      const requestBody: Object = {
        tasks: tasks,
        tag: "jobbuilder",
      };
      const response: Response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();

      return [data, 35];
    } catch (error) {
      console.log("Erro ao criar trabalho", error);
      return ["", -1];
    }
  }
}

async function importArchive({
  data,
  files,
}: ImportArchiveProps): Promise<any[]> {
  try {
    if (Array.isArray(files)) {
      for (let i = 0; i < files.length; i++) {
        const formData: FormData = new FormData();
        const importTask = data.data.tasks[i].result.form;
        const importInfo = importTask;
        const { url, parameters } = importInfo;

        for (const key in parameters) {
          formData.append(key, parameters[key]);
        }
        formData.append("file", files[0][i]);

        await fetch(url, {
          method: "POST",
          body: formData,
        });
      }
    } else {
      const formData: FormData = new FormData();
      const importTask = data.data.tasks[0].result.form;
      const importInfo = importTask;
      const { url, parameters } = importInfo;
      for (const key in parameters) {
        formData.append(key, parameters[key]);
      }
      formData.append("file", files[0]);

      await fetch(url, {
        method: "POST",
        body: formData,
      });
    }

    return [data, 90];
  } catch (error) {
    console.log("Erro ao importar arquivo", error);
    return ["", -1];
  }
}

async function exportArchive({
  data,
  apiKey,
}: ExportArchiveProps): Promise<any[] | undefined> {
  try {
    const inputTask: [{id: string}] = data.data.tasks.filter(
      (obj: { name: string }) => obj.name.includes("export")
    );
    const taskId: string = inputTask[0].id
    const endpoint: string = `https://sync.api.cloudconvert.com/v2/tasks/${taskId}?include=payload`;

    const request: Response = await fetch(endpoint, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    if (request.ok) {
      const res = await request.json();

      const url: string = res.data.result.files[0].url;
      return [url, 100];
    }
  } catch (error) {
    console.log("Erro ao fornecer link de download", error);
    return ["", -1];
  }
}

export { createJob, importArchive, exportArchive };
