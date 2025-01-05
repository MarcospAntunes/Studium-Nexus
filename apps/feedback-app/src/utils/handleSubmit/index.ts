import { gapi } from "gapi-script";
import handleSubmitProps from "./handleSubmit.type";

async function handleSubmit({
  e,
  feedbackType,
  selectedfunctionalities,
  describeBug,
  suggestionsForImprovements,
  clear,
}: handleSubmitProps) {
  e.preventDefault();

  const date: Date = new Date();

  try {
    const response = await gapi.client.sheets.spreadsheets.values.append({
      spreadsheetId: "1P20dmxBjrmQl6xI6Pax-hWAlP7Dy5EgKFMPjuZuGr6Q",
      range: "Respostas!A1:D3",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [
          [
            feedbackType,
            selectedfunctionalities.join(", "),
            describeBug,
            suggestionsForImprovements,
            `${date?.getDate()}/${date?.getMonth()! + 1}/${date?.getFullYear()}`,
          ],
        ],
      },
    });

    if (response.status === 200) {
      alert("Dados enviados com sucesso!");
      clear();
    }
  } catch (error) {
    alert("Erro ao enviar dados, tente novamente mais tarde");
  }
}

export default handleSubmit;
