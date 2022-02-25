export type ApiData = {
  days: ApiDay[];
};

export type ApiDay = {
  datetime: string;
  temp: number;
  precip: number;
};

export async function getApiData(startDate: Date, finalDate: Date) {
  const privateKey = "AXQA82N32LPULYZQLZJNUUAFF";
  const city = "Florianopolis";
  const start = startDate.toISOString().split("T")[0];
  const final = finalDate.toISOString().split("T")[0];

  const query = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${start}/${final}?unitGroup=metric&include=days&key=${privateKey}&contentType=json`;
  console.log("query: " + query);
  console.log(resultMock);

  // const response = await fetch(query);
  // const data = await response.json();

  // return data;
  return resultMock;
}

const compressedResultMock = {
  queryCost: 6,
  latitude: -27.5976,
  longitude: -48.548,
  resolvedAddress: "Florianópolis, SC, Brasil",
  address: "Florianopolis",
  timezone: "America/Sao_Paulo",
  tzoffset: -3.0,
  days: [
    {
      datetime: "2022-02-01",
      datetimeEpoch: 1643684400,
      tempmax: 29.0,
      tempmin: 21.2,
      temp: 25.1,
      feelslikemax: 31.4,
      feelslikemin: 21.2,
      feelslike: 25.7,
      dew: 21.1,
      humidity: 79.4,
      precip: 0.9,
      precipprob: 100.0,
      precipcover: null,
      preciptype: ["rain"],
      snow: 0.0,
      snowdepth: 0.0,
      windgust: 16.6,
      windspeed: 24.1,
      winddir: 177.7,
      pressure: 1011.2,
      cloudcover: 52.7,
      visibility: 11.7,
      solarradiation: 293.0,
      solarenergy: 20.9,
      uvindex: 0.0,
      severerisk: 30.0,
      sunrise: "05:46:54",
      sunriseEpoch: 1643705214,
      sunset: "19:08:22",
      sunsetEpoch: 1643753302,
      moonphase: 0.0,
      conditions: "Rain, Partially cloudy",
      description: "Partly cloudy throughout the day with storms possible.",
      icon: "rain",
      stations: ["SBFL", "83899099999"],
      source: "obs",
    },
    {
      datetime: "2022-02-02",
      datetimeEpoch: 1643770800,
      tempmax: 31.0,
      tempmin: 23.0,
      temp: 26.4,
      feelslikemax: 35.1,
      feelslikemin: 23.0,
      feelslike: 28.0,
      dew: 22.4,
      humidity: 79.3,
      precip: 1.4,
      precipprob: 100.0,
      precipcover: null,
      preciptype: ["rain"],
      snow: 0.0,
      snowdepth: 0.0,
      windgust: 18.4,
      windspeed: 22.3,
      winddir: 192.5,
      pressure: 1013.7,
      cloudcover: 57.3,
      visibility: 11.7,
      solarradiation: 347.9,
      solarenergy: 25.3,
      uvindex: 0.0,
      severerisk: 30.0,
      sunrise: "05:47:42",
      sunriseEpoch: 1643791662,
      sunset: "19:07:49",
      sunsetEpoch: 1643839669,
      moonphase: 0.01,
      conditions: "Rain, Partially cloudy",
      description: "Partly cloudy throughout the day with storms possible.",
      icon: "rain",
      stations: ["SBFL", "83899099999"],
      source: "obs",
    },
    {
      datetime: "2022-02-03",
      datetimeEpoch: 1643857200,
      tempmax: 31.0,
      tempmin: 24.0,
      temp: 26.9,
      feelslikemax: 35.5,
      feelslikemin: 24.0,
      feelslike: 28.4,
      dew: 22.5,
      humidity: 77.7,
      precip: 0.7,
      precipprob: 100.0,
      precipcover: null,
      preciptype: ["rain"],
      snow: 0.0,
      snowdepth: 0.0,
      windgust: 21.6,
      windspeed: 33.5,
      winddir: 162.5,
      pressure: 1012.5,
      cloudcover: 51.2,
      visibility: 10.8,
      solarradiation: 347.7,
      solarenergy: 25.1,
      uvindex: 0.0,
      severerisk: 30.0,
      sunrise: "05:48:29",
      sunriseEpoch: 1643878109,
      sunset: "19:07:14",
      sunsetEpoch: 1643926034,
      moonphase: 0.03,
      conditions: "Rain, Partially cloudy",
      description: "Partly cloudy throughout the day with storms possible.",
      icon: "rain",
      stations: ["SBFL", "83899099999"],
      source: "obs",
    },
    {
      datetime: "2022-02-04",
      datetimeEpoch: 1643943600,
      tempmax: 28.0,
      tempmin: 25.0,
      temp: 26.2,
      feelslikemax: 31.3,
      feelslikemin: 25.0,
      feelslike: 27.1,
      dew: 23.0,
      humidity: 82.5,
      precip: 6.9,
      precipprob: 100.0,
      precipcover: null,
      preciptype: ["rain"],
      snow: 0.0,
      snowdepth: 0.0,
      windgust: 16.6,
      windspeed: 25.9,
      winddir: 226.7,
      pressure: 1009.1,
      cloudcover: 82.8,
      visibility: 11.5,
      solarradiation: 164.3,
      solarenergy: 11.9,
      uvindex: 0.0,
      severerisk: 30.0,
      sunrise: "05:49:17",
      sunriseEpoch: 1643964557,
      sunset: "19:06:38",
      sunsetEpoch: 1644012398,
      moonphase: 0.07,
      conditions: "Rain, Partially cloudy",
      description: "Partly cloudy throughout the day with storms possible.",
      icon: "rain",
      stations: ["SBFL", "83899099999"],
      source: "obs",
    },
    {
      datetime: "2022-02-05",
      datetimeEpoch: 1644030000,
      tempmax: 33.0,
      tempmin: 24.0,
      temp: 27.4,
      feelslikemax: 38.1,
      feelslikemin: 24.0,
      feelslike: 29.1,
      dew: 23.3,
      humidity: 80.1,
      precip: 17.4,
      precipprob: 100.0,
      precipcover: null,
      preciptype: ["rain"],
      snow: 0.0,
      snowdepth: 0.0,
      windgust: 22.7,
      windspeed: 24.1,
      winddir: 238.8,
      pressure: 1005.1,
      cloudcover: 62.4,
      visibility: 11.4,
      solarradiation: 268.3,
      solarenergy: 19.4,
      uvindex: 0.0,
      severerisk: 10.0,
      sunrise: "05:50:04",
      sunriseEpoch: 1644051004,
      sunset: "19:06:01",
      sunsetEpoch: 1644098761,
      moonphase: 0.11,
      conditions: "Rain, Partially cloudy",
      description: "Partly cloudy throughout the day with late afternoon rain.",
      icon: "rain",
      stations: ["SBFL", "83899099999"],
      source: "obs",
    },
    {
      datetime: "2022-02-06",
      datetimeEpoch: 1644116400,
      tempmax: 30.0,
      tempmin: 23.0,
      temp: 25.8,
      feelslikemax: 34.1,
      feelslikemin: 23.0,
      feelslike: 26.6,
      dew: 21.4,
      humidity: 77.4,
      precip: 6.7,
      precipprob: 100.0,
      precipcover: null,
      preciptype: ["rain"],
      snow: 0.0,
      snowdepth: 0.0,
      windgust: 15.1,
      windspeed: 27.7,
      winddir: 144.9,
      pressure: 1008.8,
      cloudcover: 74.1,
      visibility: 11.7,
      solarradiation: 332.1,
      solarenergy: 24.0,
      uvindex: 0.0,
      severerisk: 30.0,
      sunrise: "05:50:50",
      sunriseEpoch: 1644137450,
      sunset: "19:05:23",
      sunsetEpoch: 1644185123,
      moonphase: 0.15,
      conditions: "Rain, Partially cloudy",
      description: "Partly cloudy throughout the day with storms possible.",
      icon: "rain",
      stations: ["SBFL", "83899099999"],
      source: "obs",
    },
  ],
  stations: {
    SBFL: {
      distance: 8062.0,
      latitude: -27.67,
      longitude: -48.55,
      useCount: 0,
      id: "SBFL",
      name: "SBFL",
      quality: 50,
      contribution: 0.0,
    },
    "83899099999": {
      distance: 8116.0,
      latitude: -27.67,
      longitude: -48.547,
      useCount: 0,
      id: "83899099999",
      name: "HERCILIO LUZ, BR",
      quality: 50,
      contribution: 0.0,
    },
  },
};

const resultMock = {
  queryCost: 105,
  latitude: -27.5976,
  longitude: -48.548,
  resolvedAddress: "Florianópolis, SC, Brasil",
  address: "Florianopolis",
  timezone: "America/Sao_Paulo",
  tzoffset: -3.0,
  days: [
    {
      datetime: "2022-02-01",
      temp: 25.1,
      precip: 0.9,
      normal: { precip: [0.0, 13.2, 119.8] },
    },
    {
      datetime: "2022-02-02",
      temp: 26.4,
      precip: 1.4,
      normal: { precip: [0.0, 1.8, 22.1] },
    },
    {
      datetime: "2022-02-03",
      temp: 26.9,
      precip: 0.7,
      normal: { precip: [0.0, 1.1, 12.2] },
    },
    {
      datetime: "2022-02-04",
      temp: 26.2,
      precip: 6.9,
      normal: { precip: [0.0, 16.8, 307.0] },
    },
    {
      datetime: "2022-02-05",
      temp: 27.4,
      precip: 17.4,
      normal: { precip: [0.0, 1.8, 28.0] },
    },
    {
      datetime: "2022-02-06",
      temp: 25.8,
      precip: 6.7,
      normal: { precip: [0.0, 2.0, 18.0] },
    },
    {
      datetime: "2022-02-07",
      temp: 24.2,
      precip: 0.0,
      normal: { precip: [0.0, 1.5, 12.0] },
    },
    {
      datetime: "2022-02-08",
      temp: 23.7,
      precip: 0.0,
      normal: { precip: [0.0, 4.4, 75.2] },
    },
    {
      datetime: "2022-02-09",
      temp: 23.9,
      precip: 1.8,
      normal: { precip: [0.0, 2.3, 29.0] },
    },
    {
      datetime: "2022-02-10",
      temp: 24.3,
      precip: 10.8,
      normal: { precip: [0.0, 2.8, 39.3] },
    },
    {
      datetime: "2022-02-11",
      temp: 25.6,
      precip: 3.1,
      normal: { precip: [0.0, 2.6, 16.1] },
    },
    {
      datetime: "2022-02-12",
      temp: 25.3,
      precip: 0.3,
      normal: { precip: [0.0, 1.8, 16.8] },
    },
    {
      datetime: "2022-02-13",
      temp: 25.9,
      precip: 4.7,
      normal: { precip: [0.0, 1.8, 9.9] },
    },
    {
      datetime: "2022-02-14",
      temp: 23.8,
      precip: 8.7,
      normal: { precip: [0.0, 4.1, 29.3] },
    },
    {
      datetime: "2022-02-15",
      temp: 24.4,
      precip: 0.0,
      normal: { precip: [0.0, 6.4, 77.2] },
    },
    {
      datetime: "2022-02-16",
      temp: 24.1,
      precip: 0.0,
      normal: { precip: [0.0, 1.5, 16.9] },
    },
    {
      datetime: "2022-02-17",
      temp: 23.9,
      precip: 6.7,
      normal: { precip: [0.0, 2.4, 24.5] },
    },
    {
      datetime: "2022-02-18",
      temp: 22.8,
      precip: 3.7,
      normal: { precip: [0.0, 2.7, 40.9] },
    },
    {
      datetime: "2022-02-19",
      temp: 23.8,
      precip: 0.2,
      normal: { precip: [0.0, 3.2, 43.0] },
    },
    {
      datetime: "2022-02-20",
      temp: 27.0,
      precip: 0.1,
      normal: { precip: [0.0, 0.8, 10.9] },
    },
    {
      datetime: "2022-02-21",
      temp: 27.0,
      precip: 5.8,
      normal: { precip: [0.0, 3.1, 21.1] },
    },
    {
      datetime: "2022-02-22",
      temp: 24.6,
      precip: 1.6,
      normal: { precip: [0.0, 3.9, 25.9] },
    },
    {
      datetime: "2022-02-23",
      temp: 23.7,
      precip: 2.9,
      normal: { precip: [0.0, 1.3, 15.5] },
    },
    {
      datetime: "2022-02-24",
      temp: 23.6,
      precip: 0.4,
      normal: { precip: [0.0, 6.8, 115.1] },
    },
    {
      datetime: "2022-02-25",
      temp: 23.4,
      precip: 24.9,
      normal: { precip: [0.0, 3.5, 25.9] },
    },
    {
      datetime: "2022-02-26",
      temp: 25.5,
      precip: 0.0,
      normal: { precip: [0.0, 3.2, 40.8] },
    },
    {
      datetime: "2022-02-27",
      temp: 25.3,
      precip: 7.0,
      normal: { precip: [0.0, 3.7, 62.0] },
    },
    {
      datetime: "2022-02-28",
      temp: 25.8,
      precip: 11.3,
      normal: { precip: [0.0, 2.3, 18.5] },
    },
    {
      datetime: "2022-03-01",
      temp: 22.1,
      precip: 3.0,
      normal: { precip: [0.0, 6.2, 52.0] },
    },
    {
      datetime: "2022-03-02",
      temp: 21.2,
      precip: 1.2,
      normal: { precip: [0.0, 1.0, 7.1] },
    },
    {
      datetime: "2022-03-03",
      temp: 24.8,
      precip: 1.2,
      normal: { precip: [0.0, 2.5, 19.1] },
    },
    {
      datetime: "2022-03-04",
      temp: 23.4,
      precip: 28.2,
      normal: { precip: [0.0, 2.3, 15.0] },
    },
    {
      datetime: "2022-03-05",
      temp: 23.5,
      precip: 15.3,
      normal: { precip: [0.0, 2.5, 44.2] },
    },
    {
      datetime: "2022-03-06",
      temp: 24.0,
      precip: 1.4,
      normal: { precip: [0.0, 6.2, 50.0] },
    },
    {
      datetime: "2022-03-07",
      temp: 25.5,
      precip: 12.0,
      normal: { precip: [0.0, 1.7, 28.0] },
    },
    {
      datetime: "2022-03-08",
      temp: 26.6,
      precip: 5.1,
      normal: { precip: [0.0, 2.9, 26.1] },
    },
    {
      datetime: "2022-03-09",
      temp: 24.7,
      precip: 1.5,
      normal: { precip: [0.0, 6.7, 72.7] },
    },
    {
      datetime: "2022-03-10",
      temp: 25.2,
      precip: 2.3,
      normal: { precip: [0.0, 2.3, 34.8] },
    },
    {
      datetime: "2022-03-11",
      temp: 25.0,
      precip: 1.1,
      normal: { precip: [0.0, 1.1, 11.9] },
    },
    {
      datetime: "2022-03-12",
      temp: 24.5,
      precip: 4.0,
      normal: { precip: [0.0, 4.0, 34.1] },
    },
    {
      datetime: "2022-03-13",
      temp: 24.3,
      precip: 4.0,
      normal: { precip: [0.0, 4.0, 64.5] },
    },
    {
      datetime: "2022-03-14",
      temp: 24.5,
      precip: 7.0,
      normal: { precip: [0.0, 7.0, 78.1] },
    },
    {
      datetime: "2022-03-15",
      temp: 24.6,
      precip: 4.0,
      normal: { precip: [0.0, 4.0, 34.8] },
    },
    {
      datetime: "2022-03-16",
      temp: 24.5,
      precip: 1.0,
      normal: { precip: [0.0, 1.0, 8.9] },
    },
    {
      datetime: "2022-03-17",
      temp: 24.4,
      precip: 1.7,
      normal: { precip: [0.0, 1.7, 25.2] },
    },
    {
      datetime: "2022-03-18",
      temp: 24.3,
      precip: 3.5,
      normal: { precip: [0.0, 3.5, 53.9] },
    },
    {
      datetime: "2022-03-19",
      temp: 24.4,
      precip: 1.1,
      normal: { precip: [0.0, 1.1, 13.0] },
    },
    {
      datetime: "2022-03-20",
      temp: 24.3,
      precip: 2.0,
      normal: { precip: [0.0, 2.0, 24.9] },
    },
    {
      datetime: "2022-03-21",
      temp: 24.2,
      precip: 2.0,
      normal: { precip: [0.0, 2.0, 33.3] },
    },
    {
      datetime: "2022-03-22",
      temp: 23.8,
      precip: 0.3,
      normal: { precip: [0.0, 0.3, 5.0] },
    },
    {
      datetime: "2022-03-23",
      temp: 23.9,
      precip: 1.3,
      normal: { precip: [0.0, 1.3, 13.9] },
    },
    {
      datetime: "2022-03-24",
      temp: 24.0,
      precip: 3.9,
      normal: { precip: [0.0, 3.9, 34.0] },
    },
    {
      datetime: "2022-03-25",
      temp: 23.6,
      precip: 1.3,
      normal: { precip: [0.0, 1.3, 15.0] },
    },
    {
      datetime: "2022-03-26",
      temp: 23.6,
      precip: 3.7,
      normal: { precip: [0.0, 3.7, 65.0] },
    },
    {
      datetime: "2022-03-27",
      temp: 23.5,
      precip: 0.2,
      normal: { precip: [0.0, 0.2, 3.0] },
    },
    {
      datetime: "2022-03-28",
      temp: 23.2,
      precip: 1.1,
      normal: { precip: [0.0, 1.1, 10.9] },
    },
    {
      datetime: "2022-03-29",
      temp: 23.2,
      precip: 0.9,
      normal: { precip: [0.0, 0.9, 11.9] },
    },
    {
      datetime: "2022-03-30",
      temp: 23.6,
      precip: 0.6,
      normal: { precip: [0.0, 0.6, 9.9] },
    },
    {
      datetime: "2022-03-31",
      temp: 23.6,
      precip: 0.4,
      normal: { precip: [0.0, 0.4, 4.1] },
    },
    {
      datetime: "2022-04-01",
      temp: 23.6,
      precip: 0.6,
      normal: { precip: [0.0, 0.6, 6.1] },
    },
    {
      datetime: "2022-04-02",
      temp: 23.5,
      precip: 1.8,
      normal: { precip: [0.0, 1.8, 21.9] },
    },
    {
      datetime: "2022-04-03",
      temp: 23.5,
      precip: 0.9,
      normal: { precip: [0.0, 0.9, 11.9] },
    },
    {
      datetime: "2022-04-04",
      temp: 23.2,
      precip: 2.6,
      normal: { precip: [0.0, 2.6, 39.6] },
    },
    {
      datetime: "2022-04-05",
      temp: 23.3,
      precip: 1.8,
      normal: { precip: [0.0, 1.8, 20.1] },
    },
    {
      datetime: "2022-04-06",
      temp: 23.0,
      precip: 1.5,
      normal: { precip: [0.0, 1.5, 26.4] },
    },
    {
      datetime: "2022-04-07",
      temp: 22.8,
      precip: 1.2,
      normal: { precip: [0.0, 1.2, 11.9] },
    },
    {
      datetime: "2022-04-08",
      temp: 23.2,
      precip: 3.9,
      normal: { precip: [0.0, 3.9, 22.4] },
    },
    {
      datetime: "2022-04-09",
      temp: 23.2,
      precip: 1.1,
      normal: { precip: [0.0, 1.1, 14.0] },
    },
    {
      datetime: "2022-04-10",
      temp: 22.9,
      precip: 3.4,
      normal: { precip: [0.0, 3.4, 54.0] },
    },
    {
      datetime: "2022-04-11",
      temp: 23.0,
      precip: 0.3,
      normal: { precip: [0.0, 0.3, 5.6] },
    },
    {
      datetime: "2022-04-12",
      temp: 23.3,
      precip: 0.6,
      normal: { precip: [0.0, 0.6, 10.9] },
    },
    {
      datetime: "2022-04-13",
      temp: 22.5,
      precip: 0.8,
      normal: { precip: [0.0, 0.8, 13.0] },
    },
    {
      datetime: "2022-04-14",
      temp: 22.5,
      precip: 1.1,
      normal: { precip: [0.0, 1.1, 8.9] },
    },
    {
      datetime: "2022-04-15",
      temp: 22.8,
      precip: 0.4,
      normal: { precip: [0.0, 0.4, 7.1] },
    },
    {
      datetime: "2022-04-16",
      temp: 22.3,
      precip: 2.2,
      normal: { precip: [0.0, 2.2, 44.0] },
    },
    {
      datetime: "2022-04-17",
      temp: 22.2,
      precip: 0.9,
      normal: { precip: [0.0, 0.9, 7.1] },
    },
    {
      datetime: "2022-04-18",
      temp: 22.5,
      precip: 1.1,
      normal: { precip: [0.0, 1.1, 11.9] },
    },
    {
      datetime: "2022-04-19",
      temp: 22.6,
      precip: 1.8,
      normal: { precip: [0.0, 1.8, 37.1] },
    },
    {
      datetime: "2022-04-20",
      temp: 21.9,
      precip: 5.4,
      normal: { precip: [0.0, 5.4, 82.8] },
    },
    {
      datetime: "2022-04-21",
      temp: 22.0,
      precip: 3.0,
      normal: { precip: [0.0, 3.0, 28.2] },
    },
    {
      datetime: "2022-04-22",
      temp: 21.4,
      precip: 2.1,
      normal: { precip: [0.0, 2.1, 22.8] },
    },
    {
      datetime: "2022-04-23",
      temp: 21.8,
      precip: 3.8,
      normal: { precip: [0.0, 3.8, 52.2] },
    },
    {
      datetime: "2022-04-24",
      temp: 22.0,
      precip: 1.6,
      normal: { precip: [0.0, 1.6, 14.8] },
    },
    {
      datetime: "2022-04-25",
      temp: 22.0,
      precip: 3.5,
      normal: { precip: [0.0, 3.5, 42.2] },
    },
    {
      datetime: "2022-04-26",
      temp: 21.6,
      precip: 1.7,
      normal: { precip: [0.0, 1.7, 24.9] },
    },
    {
      datetime: "2022-04-27",
      temp: 20.9,
      precip: 0.5,
      normal: { precip: [0.0, 0.5, 8.1] },
    },
    {
      datetime: "2022-04-28",
      temp: 20.4,
      precip: 1.8,
      normal: { precip: [0.0, 1.8, 33.0] },
    },
    {
      datetime: "2022-04-29",
      temp: 20.7,
      precip: 0.5,
      normal: { precip: [0.0, 0.5, 7.9] },
    },
    {
      datetime: "2022-04-30",
      temp: 20.7,
      precip: 2.6,
      normal: { precip: [0.0, 2.6, 49.0] },
    },
    {
      datetime: "2022-05-01",
      temp: 20.6,
      precip: 0.1,
      normal: { precip: [0.0, 0.1, 2.0] },
    },
    {
      datetime: "2022-05-02",
      temp: 20.7,
      precip: 3.8,
      normal: { precip: [0.0, 3.8, 55.9] },
    },
    {
      datetime: "2022-05-03",
      temp: 20.9,
      precip: 1.6,
      normal: { precip: [0.0, 1.6, 22.0] },
    },
    {
      datetime: "2022-05-04",
      temp: 20.9,
      precip: 2.2,
      normal: { precip: [0.0, 2.2, 42.2] },
    },
    {
      datetime: "2022-05-05",
      temp: 20.9,
      precip: 0.3,
      normal: { precip: [0.0, 0.3, 4.8] },
    },
    {
      datetime: "2022-05-06",
      temp: 20.5,
      precip: 0.4,
      normal: { precip: [0.0, 0.4, 7.1] },
    },
    {
      datetime: "2022-05-07",
      temp: 19.5,
      precip: 2.2,
      normal: { precip: [0.0, 2.2, 28.9] },
    },
    {
      datetime: "2022-05-08",
      temp: 19.2,
      precip: 4.6,
      normal: { precip: [0.0, 4.6, 36.6] },
    },
    {
      datetime: "2022-05-09",
      temp: 19.6,
      precip: 0.8,
      normal: { precip: [0.0, 0.8, 8.9] },
    },
    {
      datetime: "2022-05-10",
      temp: 19.4,
      precip: 1.2,
      normal: { precip: [0.0, 1.2, 20.0] },
    },
    {
      datetime: "2022-05-11",
      temp: 20.1,
      precip: 4.3,
      normal: { precip: [0.0, 4.3, 71.1] },
    },
    {
      datetime: "2022-05-12",
      temp: 19.7,
      precip: 1.5,
      normal: { precip: [0.0, 1.5, 30.0] },
    },
    {
      datetime: "2022-05-13",
      temp: 19.8,
      precip: 1.1,
      normal: { precip: [0.0, 1.1, 21.1] },
    },
    {
      datetime: "2022-05-14",
      temp: 19.7,
      precip: 0.6,
      normal: { precip: [0.0, 0.6, 9.9] },
    },
    {
      datetime: "2022-05-15",
      temp: 19.7,
      precip: 1.6,
      normal: { precip: [0.0, 1.6, 30.2] },
    },
    {
      datetime: "2022-05-16",
      temp: 19.2,
      precip: 3.1,
      normal: { precip: [0.0, 3.1, 27.9] },
    },
    {
      datetime: "2022-05-17",
      temp: 18.8,
      precip: 1.4,
      normal: { precip: [0.0, 1.4, 12.9] },
    },
    {
      datetime: "2022-05-18",
      temp: 19.0,
      precip: 5.5,
      normal: { precip: [0.0, 5.5, 63.1] },
    },
    {
      datetime: "2022-05-19",
      temp: 19.1,
      precip: 7.0,
      normal: { precip: [0.0, 7.0, 112.9] },
    },
    {
      datetime: "2022-05-20",
      temp: 19.2,
      precip: 0.4,
      normal: { precip: [0.0, 0.4, 6.1] },
    },
    {
      datetime: "2022-05-21",
      temp: 19.5,
      precip: 1.8,
      normal: { precip: [0.0, 1.8, 29.0] },
    },
    {
      datetime: "2022-05-22",
      temp: 19.2,
      precip: 1.0,
      normal: { precip: [0.0, 1.0, 7.9] },
    },
    {
      datetime: "2022-05-23",
      temp: 18.9,
      precip: 0.5,
      normal: { precip: [0.0, 0.5, 8.9] },
    },
    {
      datetime: "2022-05-24",
      temp: 18.8,
      precip: 0.5,
      normal: { precip: [0.0, 0.5, 10.2] },
    },
    {
      datetime: "2022-05-25",
      temp: 18.5,
      precip: 0.0,
      normal: { precip: [0.0, 0.0, 1.0] },
    },
    {
      datetime: "2022-05-26",
      temp: 18.8,
      precip: 1.9,
      normal: { precip: [0.0, 1.9, 35.1] },
    },
    {
      datetime: "2022-05-27",
      temp: 18.7,
      precip: 0.2,
      normal: { precip: [0.0, 0.2, 2.5] },
    },
    {
      datetime: "2022-05-28",
      temp: 18.6,
      precip: 0.5,
      normal: { precip: [0.0, 0.5, 8.1] },
    },
    {
      datetime: "2022-05-29",
      temp: 18.6,
      precip: 0.3,
      normal: { precip: [0.0, 0.3, 3.0] },
    },
    {
      datetime: "2022-05-30",
      temp: 18.1,
      precip: 0.4,
      normal: { precip: [0.0, 0.4, 6.4] },
    },
    {
      datetime: "2022-05-31",
      temp: 17.9,
      precip: 0.0,
      normal: { precip: [0.0, 0.0, 0.5] },
    },
    {
      datetime: "2022-06-01",
      temp: 18.2,
      precip: 0.2,
      normal: { precip: [0.0, 0.2, 2.5] },
    },
  ],
};