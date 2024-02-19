type conversoresActionProps = {
    type: string
    payload?: any
}

function conversoresReducer( state: any, action: conversoresActionProps) {
    switch(state.slug) {
        case "tempo":
            return {
                seculo: 'Século', 
                ano:'Ano',
                mes: 'Mês',
                semana: 'Semana',
                dia: 'Dia',
                hora: 'h',
                minuto: 'min',
                segundo: 's',
                milessegundo: 'ms'
            }
        
        case "peso":
            return {
                quilograma: 'Kg', 
                hectograma:'Hg',
                decagrama: 'Dag',
                grama: 'g',
                decigrama: 'dg',
                centigrama: 'cg',
                miligrama: 'mg',
                onca: 'Onça',
                libra: 'Libra'
            }
        
            case "temperatura":
                return {
                    celsius: '°C', 
                    Kelvin:'K',
                    fahrenheit: '°F'
                }
        default:
            return state
    }
}

export  { conversoresReducer };