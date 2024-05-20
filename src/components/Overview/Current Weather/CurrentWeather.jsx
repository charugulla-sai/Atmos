import cloudy from '../../../img/cloudy.png';

export default function CurrnetWeather() {
  return (
    <div className="w-full ">
      <div className="text-gray-50 bg-[#ffffff2b] mx-auto min-w-[240px] sm:max-w-[240px] sm:min-w-0 h-full  flex flex-col justify-center items-center sm:items-start p-4 gap-6 rounded-md">
        <div className="weather_title_box ">
          <h2 className="font-bold">Current Weather</h2>
          <p className="text-[12px] text-[#ffffffb9]">11:58 PM</p>
        </div>
        <div className="weather_details_box flex gap-9">
          <div className="weather_img_box max-h-20 max-w-20">
            <img className="w-full h-full" src={cloudy} alt="weather image" />
          </div>
          <div className="weather_temp_box ">
            <p className="text-[54px] font-semibold relative">
              24{' '}
              <span className="absolute top-0 text-[18px] right-0 font-normal">
                &deg;C
              </span>
            </p>
            <p className="text-sm text-[#ffffffd4] mt-[-12px]">Heavy Rain</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-col gap-2 items-center justify-center ">
            <div className="icon_box w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-[90%] h-[90%]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
                />
              </svg>
            </div>
            <p className="text-[12px]">6 km/h</p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="icon_box h-5 w-5">
              <svg
                className="Icon--icon--2aW0V Icon--actionTheme--1kPn8 DetailsTable--icon--24dnM w-full h-full fill-none stroke-white stroke-[1.5px]"
                theme="action"
                set="current-conditions"
                name="humidity"
                data-testid="Icon"
                viewBox="0 0 24 24"
              >
                <title>Humidity</title>
                <path
                  fillRule="evenodd"
                  d="M11.743 17.912a4.182 4.182 0 0 1-2.928-1.182 3.972 3.972 0 0 1-.614-4.962.743.743 0 0 1 .646-.349c.234 0 .476.095.66.275l4.467 4.355c.385.376.39.998-.076 1.275a4.216 4.216 0 0 1-2.155.588M11.855 4c.316 0 .61.14.828.395.171.2.36.416.562.647 1.857 2.126 4.965 5.684 4.965 8.73 0 3.416-2.85 6.195-6.353 6.195-3.505 0-6.357-2.78-6.357-6.195 0-3.082 2.921-6.406 4.854-8.605.242-.275.47-.535.673-.772A1.08 1.08 0 0 1 11.855 4"
                ></path>
              </svg>
            </div>
            <p className="text-[12px]">6 km/h</p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="icon_box w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-full h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            <p className="text-[12px]">6 km/h</p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="icon_box w-5 h-5">
              <svg
                className="WeatherDetailsListItem--icon--1En_X Icon--icon--2aW0V Icon--darkTheme--1PZ-8 w-full h-full fill-none stroke-white stroke-[1.5px]"
                set="current-conditions"
                name="pressure"
                theme="dark"
                data-testid="Icon"
                viewBox="0 0 24 24"
              >
                <title>Barometric Pressure</title>
                <path d="M8.462 18.293l-.29-.002c-.6-.004-1.043-.007-1.259-.007-1.119 0-1.182-1.015-.34-1.734l.196-.164.508-.425 1.543-1.292c1.014-.846 1.74-1.45 2.073-1.723.735-.601 1.305-.596 2.033.022.387.329.959.805 2.207 1.841a377.936 377.936 0 0 1 2.18 1.816c.796.67.742 1.66-.295 1.66h-2.382v1.77c0 .83-.393 1.223-1.258 1.223h-2.994c-.809 0-1.258-.42-1.258-1.207v-1.773l-.664-.005zm0-12.807l-.29.002c-.6.004-1.043.006-1.259.006-1.119 0-1.182 1.016-.34 1.734l.196.164.508.426 1.543 1.29a348.68 348.68 0 0 0 2.073 1.724c.735.601 1.305.596 2.033-.022.387-.328.959-.805 2.207-1.84a377.937 377.937 0 0 0 2.18-1.817c.796-.67.742-1.659-.295-1.659h-2.382v-1.77c0-.832-.393-1.224-1.258-1.224h-2.994c-.809 0-1.258.42-1.258 1.207V5.48l-.664.005z"></path>
              </svg>
            </div>
            <p className="text-[12px]">6 km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}
