// import Axios from "axios";

import axios from "axios";

// export async function getTempoAgora() {
//   return Axios.get(
//     "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Florianopolis/today?unitGroup=metric&include=current&key=AXQA82N32LPULYZQLZJNUUAFF&contentType=json"
//   ).then((res) => console.log(res.data));
// }

// export async function getTempoHoje() {
     // getTempoAgora().then(setTempoAgora);
//     const response = await fetch(
//       "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Florianopolis/today?unitGroup=metric&include=current&key=835CK5ZZLFKENY22FQTEB9JY9&contentType=json"
//     );
//     const data = await response.json();
//     return data;
// }



// export async function getTempoAgora() {
//   const data = Axios.get(
//     "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=5ce2523828e8bff26682ab9a8d0f4dd7"
//   ).then((res) => console.log(res.data));

//   return data;
// }

// const api = axios.create({baseURL: "https://weather.visualcrossing.com"})

export async function getWeatherToday() {
  try {
    const response = await axios.get("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Florianopolis/today?unitGroup=metric&include=current&key=AXQA82N32LPULYZQLZJNUUAFF&contentType=json")
    const data = await response.data;
    return data
  } catch (error) {
    console.log(error)
  }
  // .then((res) => console.log(res.data))
}
