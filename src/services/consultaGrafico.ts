import { useCultura } from "../hooks/useCulture";

export async function getGrafico(city?: string, firstDay?: string, lastDay?: string) {
  const privateKey = "AXQA82N32LPULYZQLZJNUUAFF";

  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${firstDay}/${lastDay}?unitGroup=metric&include=days&key=${privateKey}&contentType=json`
  );

  const data = await response.json();
  console.log(data)
  return data;
}

export async function getGraficoX() {
  const privateKey = "AXQA82N32LPULYZQLZJNUUAFF";
  const city = "Florianopolis"
  const firstDay = "2022-01-01"
  const lastDay = "2022-03-01"


  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${firstDay}/${lastDay}?unitGroup=metric&include=days&key=${privateKey}&contentType=json`
  );
  const data = await response.json();

  return data;
}

// export async function getGraficoX() {
//   const { culturas } = useCultura();
//   const cultura = getCurrentCultura();
//   const privateKey = "AXQA82N32LPULYZQLZJNUUAFF";
//   const city = "Florianopolis"
//   const firstDay = "2022-01-01"
//   const lastDay = "2022-03-01"

  



//   const response = await fetch(
//     `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${firstDay}/${lastDay}?unitGroup=metric&include=days&key=${privateKey}&contentType=json`
//   );
//   const data = await response.json();

//   return data;
// }

// function getCurrentCultura() {
//   for
// }
