type CriaTrabalhoProps = {
    unidade: string[]
    upload: [File, string] | undefined
    taskID: string,
    apiKey: string | undefined
}

type ImportarArquivoProps = {
    data: any 
    file: File
}

type ExportarArquivoProps = {
    data: any
    apiKey: string | undefined
}


export type {CriaTrabalhoProps, ImportarArquivoProps, ExportarArquivoProps};