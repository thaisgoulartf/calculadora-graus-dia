import { Culture } from "../contexts/CultureContext";
import {
  ApiData,
  ApiDay,
  getApiData,
} from "../services/repositories/ApiRepository";
import { convertToOneDecimalPlace } from "./function_utils";

export type GraphData = {
  days: GraphDay[];
};

export type GraphDay = {
  avgTemp: number;
  accumulatedGrausDias: number;
  day: Date;
  precip: number;
};

const defaultRange = 100;

export async function getGraphData(culture: Culture) {
  const startDate = new Date(culture.startDate + 'T00:00:00');
  const currentFinalDate = new Date(
    startDate.getTime() + 1000 * 60 * 60 * 24 * defaultRange
  );
  const apiData: ApiData = await getApiData(startDate, currentFinalDate);
  const graphData = calculateGraphData(
    apiData.days,
    culture.planta.basalTemp,
    culture.planta.thermalSum
  );
  return graphData;
}

function calculateGraphData(
  days: ApiDay[],
  basalTemp: number,
  thermalSum: number
): GraphData {
  const graphDays: GraphDay[] = [];
  let accumulatedGrausDias = 0;
  for (
    let index = 0;
    index < days.length && accumulatedGrausDias < thermalSum;
    index++
  ) {
    const graphDay = calculateGraphDay(
      days[index],
      accumulatedGrausDias,
      basalTemp
    );
    accumulatedGrausDias = graphDay.accumulatedGrausDias;
    graphDays.push(graphDay);
  }
  const graphData: GraphData = { days: graphDays };
  return graphData;
}

function calculateGraphDay(
  day: ApiDay,
  accumulatedGrausDias: number,
  basalTemp: number
): GraphDay {
  const currentTemp = day.temp;
  const currentDiff = currentTemp - basalTemp;
  accumulatedGrausDias = incrementGrausDias(accumulatedGrausDias, currentDiff);
  const datetime = new Date(day.datetime);
  const precip = day.precip;
  const graphDay: GraphDay = {
    accumulatedGrausDias: accumulatedGrausDias,
    avgTemp: currentTemp,
    day: datetime,
    precip: precip,
  };
  return graphDay;
}

function incrementGrausDias(currentGrausDias: number, currentDiff: number) {
  var incrementedGrausDias = currentGrausDias;
  if (currentDiff > 0) {
    incrementedGrausDias += currentDiff;
  }

  return convertToOneDecimalPlace(incrementedGrausDias);
}
