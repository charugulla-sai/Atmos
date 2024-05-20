import { useEffect } from 'react';
import CurrnetWeather from './Current Weather/CurrentWeather';
import Map from './Map/Map';
import PopularCities from './Popular Cities/PopularCities';

export default function Overview() {
  return (
    <div className="grid gap-3 sm:grid-cols-4 grid-cols-2 px-4 mx-auto">
      <CurrnetWeather />
      <Map />
      <PopularCities />
    </div>
  );
}
