import { useState } from 'react';
import cloudy from '../../../../img/cloudy.png';
export default function Forecast({
  forecast,
  setForecastDays,
  setForecastDay,
  setDate,
}) {
  return (
    <>
      <div className="min-w-[240px]">
        <div className="text-gray-50 bg-[#ffffff2b] mx-auto sm:max-w-[240px] max-h-[260px]  flex flex-col justify-between items-center p-2 gap-6 rounded-md">
          <div className="weather_title_box flex gap-7 items-center justify-start">
            <h2 className="font-bold">Forecast</h2>
            <div className="text-[12px] text-[#fff] flex gap-1 bg-[#ffffff42] p-1 rounded-md">
              <input
                type="submit"
                className=" px-2 py-1 rounded-md focus:bg-[#20204584]  outline-none"
                value="5d"
                onClick={() => setForecastDays(5)}
                autoFocus
              />
              <button
                onClick={() => setForecastDays(10)}
                className=" px-2 py-1  rounded-md focus:bg-[#20204584] active:bg-[#20204584]"
              >
                10d
              </button>
            </div>
          </div>

          <div className="forecast_days flex gap-4 max-h-[260px] flex-col justify-between pr-[6px] overflow-y-scroll ">
            {forecast.map((forecastDay, index) => (
              <div
                key={forecastDay.date}
                onClick={() => {
                  setForecastDay(forecastDay.hour);
                  setDate(forecastDay.date);
                }}
                className="flex gap-5 cursor-pointer items-center justify-between hover:bg-[#191d4f65] p-[4px] rounded-md"
              >
                <div className="icon_box h-5 w-5">
                  <img className="w-full h-full" src={cloudy} />
                </div>
                <p className="text-[14px]">
                  {forecastDay.day.maxtemp_c}&deg; / {forecastDay.day.mintemp_c}
                  &deg;
                </p>
                <p className="text-[12px] text-[#ffffff96]">
                  {forecastDay.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
