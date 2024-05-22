import { PureComponent } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function SummaryChart({ forcastDay, date }) {
  const data = forcastDay.map((hour) => {
    return {
      exactTime: hour.time.substring(11),
      todayDate: hour.time.substring(0, 11),
      ...hour,
    };
  });
  console.log(data);

  return (
    <div className="w-full min-h-[260px] grow bg-[#ffffff2b] rounded-md relative">
      <p className="absolute top-[10%] left-[50%] translate-x-[-50%] text-white">{date}</p>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          // width={500}
          // height={400}
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <defs>
            <linearGradient id="heatIndexC" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f9a620" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f9a620" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="willItRain" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="green" stopOpacity={0.8} />
              <stop offset="95%" stopColor="green" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="humidity" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00b7ff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#00b7ff" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="visibility" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffffffe2" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ffffffe2" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="exactTime" />
          {/* <YAxis /> */}
          <Tooltip />
          <Area
            type="monotone"
            dataKey="humidity"
            // stackId="1"
            stroke="#00b7ff"
            fillOpacity={1}
            fill="url(#humidity)"
          />
          <Area
            type="monotone"
            dataKey="heatindex_c"
            // stackId="1"
            stroke="#f9a620"
            fillOpacity={1}
            fill="url(#heatIndexC)"
          />
          <Area
            type="monotone"
            dataKey="will_it_rain"
            // stackId="1"
            stroke="green"
            fillOpacity={1}
            fill="url(#willItRain)"
          />

          <Area
            type="monotone"
            dataKey="vis_km"
            // stackId="1"
            stroke="#ffffffe2"
            fillOpacity={1}
            fill="url(#visibility)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
