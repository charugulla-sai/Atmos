import cloudy from '../../../../img/cloudy.png';
export default function Forecast() {
  return (
    <>
      <div className="">
        <div className="text-gray-50 bg-[#ffffff2b] mx-auto sm:max-w-[240px] h-[280px] flex flex-col justify-center items-center p-4 gap-6 rounded-md">
          <div className="weather_title_box flex gap-7 items-center justify-start">
            <h2 className="font-bold">Popular Cities</h2>
            <p className="text-[12px] text-[#ffffffb9] underline">View more</p>
          </div>

          <div className="flex gap-4  flex-col">
            <div className="flex gap-5 items-center  justify-between">
              <div className="icon_box w-5 h-5 ">
                <img className="w-full h-full" src={cloudy} />
              </div>
              <p className="text-[14px]">24&deg; / 22&deg;</p>
              <p className="text-[12px] text-[#ffffff96]">20 May, Mon</p>
            </div>
            <div className="flex gap-5 items-center justify-between ">
              <div className="icon_box h-5 w-5">
                <img className="w-full h-full" src={cloudy} />
              </div>
              <p className="text-[14px]">24&deg; / 22&deg;</p>
              <p className="text-[12px] text-[#ffffff96]">20 May, Mon</p>
            </div>
            <div className="flex gap-5 items-center justify-between">
              <div className="icon_box h-5 w-5">
                <img className="w-full h-full" src={cloudy} />
              </div>
              <p className="text-[14px]">24&deg; / 22&deg;</p>
              <p className="text-[12px] text-[#ffffff96]">20 May, Mon</p>
            </div>
            <div className="flex gap-5 items-center justify-between">
              <div className="icon_box w-5 h-5">
                <img className="w-full h-full" src={cloudy} />
              </div>
              <p className="text-[14px]">24&deg; / 22&deg;</p>
              <p className="text-[12px] text-[#ffffff96]">20 May, Mon</p>
            </div>
            <div className="flex gap-5 items-center justify-between">
              <div className="icon_box w-5 h-5">
                <img className="w-full h-full" src={cloudy} />
              </div>
              <p className="text-[14px]">24&deg; / 22&deg;</p>
              <p className="text-[12px] text-[#ffffff96]">20 May, Mon</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
