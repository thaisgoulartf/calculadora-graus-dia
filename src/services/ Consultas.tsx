import React, { useEffect } from "react";
import axios from "axios";

export function Consultas() {
  const privateKey = "835CK5ZZLFKENY22FQTEB9JY9";

  const tempoAgora = axios
    .get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Florianopolis?unitGroup=metric&include=days&key=835CK5ZZLFKENY22FQTEB9JY9&contentType=json`
    )
    .then((response) => console.log(response.data.days[0].temp))
    .catch((err) => console.error(err));
  console.log(tempoAgora);

  return <div>Olá</div>;
}
