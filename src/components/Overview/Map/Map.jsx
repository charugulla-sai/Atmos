import React, { useEffect, useState } from 'react';

export default function Map({lat,long}) {
  const [iframeHTML, setIframeHTML] = useState('');

  useEffect(() => {
    if ('geolocation' in navigator) {
      // Get the current position
      navigator.geolocation.getCurrentPosition(
        function (position) {
          // Extract latitude and longitude from the position object
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        },
        function (error) {
          // Handle errors, if any
          console.error('Error getting geolocation:', error);
        }
      );
    } else {
      // Geolocation is not supported
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    // Construct the iframe HTML string with the updated latitude and longitude
    const iframeString = `
      <div class="w-[100%] h-[100%] rounded-md overflow-hidden ">
        <iframe class="w-full h-full" src="https://maps.google.com/maps?q=${lat},${long}&hl=es&z=13&amp;output=embed"></iframe>
      </div>
    `;
    // Store the iframe HTML string in the state
    setIframeHTML(iframeString);
  }, [lat, long]);

  return <div className='map_component md:col-span-6 w-full sm:grow order-last sm:order-2 h-[280px]' dangerouslySetInnerHTML={{ __html: iframeHTML }} />;
}
