import "../styles/dashboard.scss";

import { useEffect, useState } from "react";
import { months } from "../util/months";
import {
  ApiData,
  getWeatherTodayOrTomorrow,
} from "../services/repositories/ApiRepository";
import { BsCloudLightningRain } from "react-icons/bs";

export enum Day {
  today = "Hoje",
  tomorrow = "Amanhã",
}

interface WeatherForecast {
  resolvedAddress?: string;
  day?: {
    tempmax?: number;
    temp?: number;
    datetime?: string;
  };
}

interface ForecastCardProps {
  day: Day;
}

export function ForecastCard(props: ForecastCardProps) {
  const [weatherForecast, setWeatherForecast] = useState<WeatherForecast>();
  const [dateLabel, setDateLabel] = useState<string>();

  useEffect(() => {
    buildDateLabel();
    const isToday = props.day === Day.today;
    getWeatherTodayOrTomorrow(isToday).then((data) => {
      if (data) setWeatherData(data);
    });
  }, []);

  function setWeatherData(data: ApiData) {
    const weatherData = {
      resolvedAddress: data.resolvedAddress,
      day: data.days[0],
    };
    setWeatherForecast(weatherData);
  }

  function buildDateLabel() {
    let date = new Date();
    if (props.day === Day.tomorrow) {
      date = new Date(date.getTime() + 1000 * 60 * 60 * 24 * 1);
    }
    const dayLabel = String(date.getDate()).padStart(2, "0");
    const monthLabel = date.getMonth();
    const finalDateLabel = dayLabel + " de " + months[monthLabel];
    setDateLabel(finalDateLabel);
  }

  return (
    <div className="card-single">
      <div>
        <h2>{props.day}</h2>
        <span>{dateLabel}</span>
        <h2>{weatherForecast?.day?.temp}°C</h2>
        <span>{weatherForecast?.resolvedAddress}</span>
      </div>
      <div>
        <span>
          <BsCloudLightningRain />
        </span>
      </div>
    </div>
  );
}
