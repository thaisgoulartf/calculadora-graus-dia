
export async function getWeatherTomorrow() {
    const response = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Florianopolis/tomorrow?unitGroup=metric&include=days&key=AXQA82N32LPULYZQLZJNUUAFF&contentType=json"
    );
    const data = await response.json();

    return data;
}

