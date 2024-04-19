import ConverterActionProps from "./ConverterReducer.type";

function ConverterReducer(state: any, action: ConverterActionProps) {
  switch (state.slug) {
    case "tempo":
      return {
        seculo: 0.01,
        ano: 1,
        mes: 12,
        semana: 52.143,
        dia: 365,
        hora: 8760,
        minuto: 525600,
        segundo: 31622400,
        milessegundo: 31536000000,
      };

    case "peso":
      return {
        quilograma: 1,
        hectograma: 10,
        decagrama: 100,
        grama: 1000,
        decigrama: 10000,
        centigrama: 100000,
        miligrama: 1000000,
        onca: 35.274,
        libra: 2.205,
      };

    case "temperatura":
      return {
        celsius: 1,
        Kelvin: 274.15,
        fahrenheit: 32,
      };

    case "velocidade":
      return {
        "quilometro por hora": 0.2778,
        "metros por segundo": 1,
        "milhas por hora": 0.44704,
        nós: 0.514444,
        pés: 0.3048,
      };

    case "comprimento":
      return {
        quilometro: 1,
        hectometro: 10,
        decametro: 100,
        metro: 1000,
        decimetro: 10000,
        centimetro: 100000,
        milimetro: 1000000,
        milha: 0.621371,
        jarda: 1094,
        pes: 3281,
        polegada: 39370,
      };

    case "energia":
      return {
        gigawatts: 0.000000001,
        megawatts: 0.000001,
        quilowatts: 0.001,
        watts: 1,
        miliwatts: 1000,
        microwatts: 1000000,
        nanowatts: 1000000000,
      };
    case "documento":
      return {
        pdf: "pdf",
        docx: "docx",
        doc: "doc",
        xls: "xls",
        xlsx: "xlsx",
        ppt: "ppt",
        pptx: "pptx",
        txt: "txt",
      };
    case "moeda":
      return {
        USD: "Dólar Americano",
        AUD: "Dólar Australiano",
        EUR: "Euro",
        GBP: "Libra Esterlina",
        JPY: "Lene",
        CHF: "Franco Suíço",
        CAD: "Dólar Canadense",
        CNY: "Renminbi",
        ARS: "Peso Argentino",
        TRY: "Lira Turca",
        BRL: "Real",
      };
    case "midia":
      return {
        "3gp": "3gp",
        mp4: "mp4",
        mkv: "mkv",
        mpeg: "mpeg",
        ogg: "ogg",
        webm: "webm",
        wmv: "wmv",
        mp3: "mp3",
        wav: "wav",
        m4a: "m4a",
        gif: "gif",
        jpeg: "jpeg",
        jpg: "jpg",
        png: "png",
        raw: "raw",
        webp: "webp",
      };
    default:
      return state;
  }
}

export default ConverterReducer;
