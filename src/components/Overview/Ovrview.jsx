import { useEffect } from 'react';
import CurrnetWeather from './Current Weather/CurrentWeather';
import Map from './Map/Map';
import PopularCities from './Popular Cities/PopularCities';

export default function Overview() {
  return (
    <div className="lg:grid gap-2 lg:grid-cols-12 px-4 mx-auto max-w-[1100px] flex sm:flex-nowrap flex-wrap justify-center">
      <CurrnetWeather />
      <Map />
      <PopularCities />
    </div>
  );
}
