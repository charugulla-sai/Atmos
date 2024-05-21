import { useEffect, useState } from 'react';
import CurrnetWeather from './Current Weather/CurrentWeather';
import Map from './Map/Map';
import PopularCities from './Popular Cities/PopularCities';

export default function Overview() {
  const [lat, setLat] = useState(17.4343);
  const [long, setLong] = useState(78.3792);
  return (
    <div className="lg:grid gap-3 lg:grid-cols-12 px-4 mx-auto max-w-[1100px] flex sm:flex-nowrap flex-wrap justify-center">
      <CurrnetWeather setLat={setLat} setLong={setLong} />
      <Map lat={lat} long={long} />
      <PopularCities />
    </div>
  );
}
