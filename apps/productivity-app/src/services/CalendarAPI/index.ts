import calendarAPIProps from "./calendarAPI.type";

async function calendarAPI({ year, countryCode }: calendarAPIProps) {
  try {
    const response = await fetch(
      `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`,
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Erro: ${error}`);
  }
}

export default calendarAPI;
