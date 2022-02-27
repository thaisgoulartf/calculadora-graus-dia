import "../styles/grafico.scss";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useEffect, useState } from "react";
import { getGraphData, GraphData } from "../util/GraphBuilder";
import { useCurrentCultura } from "../hooks/useCurrentCultura";

type ParsedData = {
  data: string;
  chuva: number;
  temp: number;
  gd: number;
};

export function Grafico() {
  const { currentCultura } = useCurrentCultura();
  const [parsedData, setParsedData] = useState<ParsedData[]>();

  useEffect(() => {
    getData().then((data) => {
      setParsedData(
        data?.days.map((day) => {
          return {
            data: day.day.toISOString().split("T")[0],
            chuva: day.precip,
            temp: day.avgTemp,
            gd: day.accumulatedGrausDias,
          };
        })
      );
    });
  }, [currentCultura]);

  async function getData() {
    if (currentCultura) {
      const graphData = await getGraphData(currentCultura);
      return graphData;
    }
  }

  return (
    <section style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <ComposedChart
          width={1200}
          height={400}
          data={parsedData}
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
          <Bar dataKey="chuva" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="gd" stroke="#ff7300" />
          <Line type="monotone" dataKey="temp" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </section>
  );
}
