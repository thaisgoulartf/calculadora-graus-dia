import "../styles/dashboard.scss";

import React, { useEffect, useState } from "react";
import milho from "../assets/images/corn-aside.png";
import { getWeatherTomorrow } from "../services/consultaWeatherTomorrow";
import { months } from "../util/months";

interface Tempo {
  resolvedAddress: string;
  longitude: number;
  days: Days[];
}
interface Days {
  tempmax: number;
  temp: number;
  datetime: string;
}

export function CardTomorrow(props: any) {
  const [card, setCard] = useState<Tempo>();

  // function fetchTempoAgora() {
  //   getTempoAgora().then(setUser);
  // }

  // useEffect(() => {
  //   fetchTempoAgora();
  // }, []);

  //   const RadioWrapper = styled.div`
  //   color: ${props => props.color}
  // `

  useEffect(() => {
    getWeatherTomorrow().then((data) => {
      setCard(data);
    });
  }, []);

  var data = new Date();
  var day = data.getDate() + 1;
  var month = data.getMonth();
  var dayTomorrow = day + " de " + months[month];

  return (
    <div className="card-single">
      <div>
        <h2>{props.day}</h2>
        <span>{dayTomorrow}</span>
        <h2>{card?.days[0].temp}°C</h2>
        <span>{card?.resolvedAddress}</span>
      </div>
      <div>
        <span>
          <img src={milho} alt="Milho" width="40px" height="40px" />
        </span>
      </div>
    </div>
  );
}
