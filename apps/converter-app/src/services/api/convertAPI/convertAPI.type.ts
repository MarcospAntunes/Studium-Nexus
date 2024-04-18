type CreateJobProps = {
    unit: string[]
    upload: [File[] | File, String] | any | undefined
    taskID: string,
    apiKey: string | undefined
}

type ImportArchiveProps = {
    data: any
    files: [File[]] | File[] | any
}

type ExportArchiveProps = {
    data: any
    apiKey: string | undefined
}

type ConvertProps = {
    unit: string[]
    value: string
    state: any
    slug: string
}


export type { CreateJobProps, ImportArchiveProps, ExportArchiveProps, ConvertProps };