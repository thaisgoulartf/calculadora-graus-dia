import "../styles/dashboard.scss";

import React, { useEffect, useState } from "react";
import { getWeatherToday } from "../services/consultaWeatherToday";
import milho from "../assets/images/corn-aside.png";
import { months } from "../util/months";
interface Tempo {
  resolvedAddress: string;
  longitude: number;
  days: [
    {
      tempmax: number;
      temp: number;
      datetime: string;
    }
  ];
}

export function CardToday(props: any) {
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
    getWeatherToday().then((data) => {
      setCard(data);
    });
  }, []);

  var data = new Date();
  var dia = String(data.getDate()).padStart(2, "0");
  var mes = data.getMonth();
  var dataAtual = dia + " de " + months[mes];

  return (
    <div className="card-single">
      <div>
        <h2>{props.day}</h2>
        <span>{dataAtual}</span>
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
