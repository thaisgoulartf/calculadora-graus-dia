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
import { getGraphData } from "../util/GraphBuilder";
import { useCurrentCulture } from "../hooks/useCurrentCulture";

type ParsedData = {
  data: string;
  chuva: number;
  temp: number;
  gd: number;
};

export function Graph() {
  const { currentCulture } = useCurrentCulture();
  const [parsedData, setParsedData] = useState<ParsedData[]>();

  useEffect(() => {
    if (!currentCulture) return;
    updateGraphData();
  }, [currentCulture]);

  async function updateGraphData() {
    if (!hasGraphData()) {
      await loadGraphData();
    }
    setParsedData(
      currentCulture?.graphData?.days.map((day) => {
        return {
          data: day.day.toISOString().split("T")[0],
          chuva: day.precip,
          temp: day.avgTemp,
          gd: day.accumulatedGrausDias,
        };
      })
    );
  }

  function hasGraphData() {
    return currentCulture?.graphData != undefined;
  }

  async function loadGraphData() {
    const data = await getData();
    if (currentCulture) {
      currentCulture.graphData = data;
    }
  }

  async function getData() {
    if (currentCulture) {
      const graphData = await getGraphData(currentCulture);
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
          <YAxis yAxisId="left" scale="linear" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="gd"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Bar
            yAxisId="right"
            type="monotone"
            dataKey="chuva"
            stroke="#39A2DB"
            barSize={20}
            fill="#1CC5DC"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </section>
  );
}
