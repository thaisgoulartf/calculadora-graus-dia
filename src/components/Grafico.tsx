import "../styles/grafico.scss";
import {
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useEffect, useState } from "react";
import { getGraficoX } from "../services/consultaGrafico";

interface Tempo {
  resolvedAddress: string;
  longitude: number;
  days: Days[];
}
interface Days {
  datetime: string;
  tempmax: number;
  temp: number;
  precip: number;
}

interface GraficoProps {
  culturaId: string;
}

export function Grafico() {
  useEffect(() => {}, []);

  const [tempo, setTempo] = useState<Tempo>();

  useEffect(() => {
    getGraficoX().then((data) => {
      setTempo(data);
    });
  }, []);

  const dataTeste = tempo?.days.map((day) => {
    return {
      data: day.datetime,
      chuva: day.precip,
      temp: day.temp,
    };
  });

  const data = [
    {
      data: "21/02",
      gd: 10,
      chuva: 10,
      temp: 26,
    },
    {
      data: "22/02",
      gd: 30,
      chuva: 20,
      temp: 28,
    },
    {
      data: "23/02",
      gd: 60,
      chuva: 10,
      temp: 29,
    },
    {
      data: "24/02",
      gd: 90,
      chuva: 20,
      temp: 18,
    },
    {
      data: "25/02",
      gd: 100,
      chuva: 40,
      temp: 20,
    },
    {
      data: "26/02",
      gd: 133,
      chuva: 10,
      temp: 25,
    },
    {
      data: "27/02",
      gd: 150,
      chuva: 30,
      temp: 24,
    },
    {
      data: "29/02",
      gd: 60,
      chuva: 10,
      temp: 29,
    },
    {
      data: "30/02",
      gd: 90,
      chuva: 20,
      temp: 18,
    },
    {
      data: "31/02",
      gd: 100,
      chuva: 40,
      temp: 20,
    },
    {
      data: "32/02",
      gd: 133,
      chuva: 10,
      temp: 25,
    },
    {
      data: "33/02",
      gd: 150,
      chuva: 30,
      temp: 24,
    },
  ];

  return (
    <section style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <ComposedChart
          width={1200}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="data" scale="band" />
          <YAxis scale="linear" />
          <Tooltip />
          <Legend />
          {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
          <Bar dataKey="chuva" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="gd" stroke="#ff7300" />
          <Line type="monotone" dataKey="temp" stroke="#ff7300" />
          {/* <Scatter dataKey="cnt" fill="red" /> */}
        </ComposedChart>
      </ResponsiveContainer>
    </section>
  );
}
