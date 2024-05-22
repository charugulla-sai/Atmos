import { useEffect, useState } from 'react';
import Forecast from './Forecast/Forecast/Forecast';
import SummaryChart from './SummaryChart/SummaryChart';
import axios from 'axios';

export default function Summary() {
  const [forecast, setForeCast] = useState([]);
  const [forcastDays, setForecastDays] = useState(5);
  const [forcastDay, setForecastDay] = useState([]);
  const [date, setDate] =useState()
  

  useEffect(() => {
    async function getCurrentReport() {
      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/forecast.json?key=4b03e9f34a364637ba424857242005&q=nizampatnam&days=${forcastDays}&aqi=yes&alerts=no`
        );
        setForeCast(response.data.forecast.forecastday);
        setDate(response.data.forecast.forecastday[0].date)
      } catch (err) {
        console.log(err);
      }
    }
    getCurrentReport();
  }, [forcastDays]);
  return (
    <div className="flex max-w-[1100px] mx-auto p-4 gap-3 mb-8">
      <Forecast forecast={forecast} setForecastDays={setForecastDays} setForecastDay={setForecastDay} setDate={setDate}/>
      <SummaryChart date={date} forcastDay={forcastDay} />
    </div>
  );
}
