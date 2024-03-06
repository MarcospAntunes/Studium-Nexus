type CreateJobProps = {
    unit: string[]
    upload: [File, string] | undefined
    taskID: string,
    apiKey: string | undefined
}

type ImportArchiveProps = {
    data: any 
    file: File
}

type ExportArchiveProps = {
    data: any
    apiKey: string | undefined
}

type ConvertProps = {
    unit: string[]
    value:  string
    state: any
    slug: string
}


export type {CreateJobProps, ImportArchiveProps, ExportArchiveProps, ConvertProps};