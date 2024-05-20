import React, { useEffect, useState } from 'react';

export default function Map() {
  const [lat, setLat] = useState(17.4343);
  const [long, setLong] = useState(78.3792);
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
      <div class="sm:w-[100%] h-[100%] rounded-md overflow-hidden ">
        <iframe class="w-full h-full" src="https://maps.google.com/maps?q=${lat},${long}&hl=es&z=13&amp;output=embed"></iframe>
      </div>
    `;
    // Store the iframe HTML string in the state
    setIframeHTML(iframeString);
  }, [lat, long]);

  return <div className='sm:col-span-2 w-full hidden sm:block' dangerouslySetInnerHTML={{ __html: iframeHTML }} />;
}
