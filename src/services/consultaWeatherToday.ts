import axios from "axios";

export async function getWeatherToday() {
  try {
    const response = await axios.get("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Florianopolis/today?unitGroup=metric&include=current&key=AXQA82N32LPULYZQLZJNUUAFF&contentType=json")
    const data = await response.data;
    return data
  } catch (error) {
    console.log(error)
  }
}
