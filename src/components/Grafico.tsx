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
import { useCultura } from "../hooks/useCulture";
import { getGraphData, GraphData } from "../util/GraphBuilder";

export function Grafico() {
  const { culturas } = useCultura();
  const [data, setData] = useState<GraphData>();

  useEffect(() => {
    getData().then((data) => {
      setData(data);
    });
  }, []);

  const dataTest = data?.days.map((day) => {
    return {
      data: day.day.toISOString().split("T")[0],
      chuva: day.precip,
      temp: day.avgTemp,
      gd: day.accumulatedGrausDias,
    };
  });

  async function getData() {
    const graphData = await getGraphData(culturas![0]);
    return graphData;
  }

  return (
    <section style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <ComposedChart
          width={1200}
          height={400}
          data={dataTest}
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
