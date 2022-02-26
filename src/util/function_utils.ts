import { Cultura } from "../contexts/CulturaContext";

interface DataTest {
    days: Days[];
}
interface Days {
    datetime: string;
    temp: number;
}

interface GraficoData {
    avgTempList: number[],
    grausDias: number[],
    lastDay: Date,
}

export function calculateGrausDias(avgTemp: number[], basalTemp: number, thermalSum: number) {
    const grausDias = []
    let accumulatedGrausDias = 0
    for (let index = 0; index < avgTemp.length && accumulatedGrausDias < thermalSum; index++) {
        const currentTemp = avgTemp[index];
        const currentDiff = currentTemp - basalTemp
        accumulatedGrausDias += currentDiff
        grausDias.push(accumulatedGrausDias)
    }
    return grausDias
}

export function convertToOneDecimalPlace(value: number) {
    return +value.toFixed(1)
}

export function getSpecificCultura(culturas: Cultura[], culturaId: string): Cultura | undefined {
    var cultura: Cultura | undefined
    culturas.forEach((currentCultura) => {
        if (currentCultura.id == culturaId) {
            cultura = currentCultura
            return
        }
    })
    return cultura
}

const defaultRange = 5

export async function calculate(cultura: Cultura) {
    const startDate = new Date(cultura.dataInicio)
    const currentFinalDate = new Date(startDate.getTime() + (1000 * 60 * 60 * 24 * defaultRange))
    const data = await getData(startDate, currentFinalDate)
    const dataTest: DataTest = data
    const avgTempList = getAvgTempList(dataTest)
    const grausDias = calculateGrausDias(avgTempList, 10, 900)
    const finalDate = new Date(startDate.getTime() + (1000 * 60 * 60 * 24 * grausDias.length))
    const graficoData: GraficoData = { avgTempList: avgTempList, grausDias: grausDias, lastDay: finalDate }
}

async function getData(startDate: Date, finalDate: Date) {
    const privateKey = "AXQA82N32LPULYZQLZJNUUAFF";
    const city = "Florianopolis"
    const start = startDate.toISOString().split('T')[0]
    const final = finalDate.toISOString().split('T')[0]

    const query = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${start}/${final}?unitGroup=metric&include=days&key=${privateKey}&contentType=json`
    return result
}

function getAvgTempList(data: DataTest) {
    const days = data.days
    const avgTempList = days.map((day) => day.temp)
    return avgTempList
}

const result = {"queryCost":6,"latitude":-27.5976,"longitude":-48.548,"resolvedAddress":"Florianópolis, SC, Brasil","address":"Florianopolis","timezone":"America/Sao_Paulo","tzoffset":-3.0,"days":[{"datetime":"2022-02-01","datetimeEpoch":1643684400,"tempmax":29.0,"tempmin":21.2,"temp":25.1,"feelslikemax":31.4,"feelslikemin":21.2,"feelslike":25.7,"dew":21.1,"humidity":79.4,"precip":0.9,"precipprob":100.0,"precipcover":null,"preciptype":["rain"],"snow":0.0,"snowdepth":0.0,"windgust":16.6,"windspeed":24.1,"winddir":177.7,"pressure":1011.2,"cloudcover":52.7,"visibility":11.7,"solarradiation":293.0,"solarenergy":20.9,"uvindex":0.0,"severerisk":30.0,"sunrise":"05:46:54","sunriseEpoch":1643705214,"sunset":"19:08:22","sunsetEpoch":1643753302,"moonphase":0.0,"conditions":"Rain, Partially cloudy","description":"Partly cloudy throughout the day with storms possible.","icon":"rain","stations":["SBFL","83899099999"],"source":"obs"},{"datetime":"2022-02-02","datetimeEpoch":1643770800,"tempmax":31.0,"tempmin":23.0,"temp":26.4,"feelslikemax":35.1,"feelslikemin":23.0,"feelslike":28.0,"dew":22.4,"humidity":79.3,"precip":1.4,"precipprob":100.0,"precipcover":null,"preciptype":["rain"],"snow":0.0,"snowdepth":0.0,"windgust":18.4,"windspeed":22.3,"winddir":192.5,"pressure":1013.7,"cloudcover":57.3,"visibility":11.7,"solarradiation":347.9,"solarenergy":25.3,"uvindex":0.0,"severerisk":30.0,"sunrise":"05:47:42","sunriseEpoch":1643791662,"sunset":"19:07:49","sunsetEpoch":1643839669,"moonphase":0.01,"conditions":"Rain, Partially cloudy","description":"Partly cloudy throughout the day with storms possible.","icon":"rain","stations":["SBFL","83899099999"],"source":"obs"},{"datetime":"2022-02-03","datetimeEpoch":1643857200,"tempmax":31.0,"tempmin":24.0,"temp":26.9,"feelslikemax":35.5,"feelslikemin":24.0,"feelslike":28.4,"dew":22.5,"humidity":77.7,"precip":0.7,"precipprob":100.0,"precipcover":null,"preciptype":["rain"],"snow":0.0,"snowdepth":0.0,"windgust":21.6,"windspeed":33.5,"winddir":162.5,"pressure":1012.5,"cloudcover":51.2,"visibility":10.8,"solarradiation":347.7,"solarenergy":25.1,"uvindex":0.0,"severerisk":30.0,"sunrise":"05:48:29","sunriseEpoch":1643878109,"sunset":"19:07:14","sunsetEpoch":1643926034,"moonphase":0.03,"conditions":"Rain, Partially cloudy","description":"Partly cloudy throughout the day with storms possible.","icon":"rain","stations":["SBFL","83899099999"],"source":"obs"},{"datetime":"2022-02-04","datetimeEpoch":1643943600,"tempmax":28.0,"tempmin":25.0,"temp":26.2,"feelslikemax":31.3,"feelslikemin":25.0,"feelslike":27.1,"dew":23.0,"humidity":82.5,"precip":6.9,"precipprob":100.0,"precipcover":null,"preciptype":["rain"],"snow":0.0,"snowdepth":0.0,"windgust":16.6,"windspeed":25.9,"winddir":226.7,"pressure":1009.1,"cloudcover":82.8,"visibility":11.5,"solarradiation":164.3,"solarenergy":11.9,"uvindex":0.0,"severerisk":30.0,"sunrise":"05:49:17","sunriseEpoch":1643964557,"sunset":"19:06:38","sunsetEpoch":1644012398,"moonphase":0.07,"conditions":"Rain, Partially cloudy","description":"Partly cloudy throughout the day with storms possible.","icon":"rain","stations":["SBFL","83899099999"],"source":"obs"},{"datetime":"2022-02-05","datetimeEpoch":1644030000,"tempmax":33.0,"tempmin":24.0,"temp":27.4,"feelslikemax":38.1,"feelslikemin":24.0,"feelslike":29.1,"dew":23.3,"humidity":80.1,"precip":17.4,"precipprob":100.0,"precipcover":null,"preciptype":["rain"],"snow":0.0,"snowdepth":0.0,"windgust":22.7,"windspeed":24.1,"winddir":238.8,"pressure":1005.1,"cloudcover":62.4,"visibility":11.4,"solarradiation":268.3,"solarenergy":19.4,"uvindex":0.0,"severerisk":10.0,"sunrise":"05:50:04","sunriseEpoch":1644051004,"sunset":"19:06:01","sunsetEpoch":1644098761,"moonphase":0.11,"conditions":"Rain, Partially cloudy","description":"Partly cloudy throughout the day with late afternoon rain.","icon":"rain","stations":["SBFL","83899099999"],"source":"obs"},{"datetime":"2022-02-06","datetimeEpoch":1644116400,"tempmax":30.0,"tempmin":23.0,"temp":25.8,"feelslikemax":34.1,"feelslikemin":23.0,"feelslike":26.6,"dew":21.4,"humidity":77.4,"precip":6.7,"precipprob":100.0,"precipcover":null,"preciptype":["rain"],"snow":0.0,"snowdepth":0.0,"windgust":15.1,"windspeed":27.7,"winddir":144.9,"pressure":1008.8,"cloudcover":74.1,"visibility":11.7,"solarradiation":332.1,"solarenergy":24.0,"uvindex":0.0,"severerisk":30.0,"sunrise":"05:50:50","sunriseEpoch":1644137450,"sunset":"19:05:23","sunsetEpoch":1644185123,"moonphase":0.15,"conditions":"Rain, Partially cloudy","description":"Partly cloudy throughout the day with storms possible.","icon":"rain","stations":["SBFL","83899099999"],"source":"obs"}],"stations":{"SBFL":{"distance":8062.0,"latitude":-27.67,"longitude":-48.55,"useCount":0,"id":"SBFL","name":"SBFL","quality":50,"contribution":0.0},"83899099999":{"distance":8116.0,"latitude":-27.67,"longitude":-48.547,"useCount":0,"id":"83899099999","name":"HERCILIO LUZ, BR","quality":50,"contribution":0.0}}}
