import Forecast from './Forecast/Forecast/Forecast';
import SummaryChart from './SummaryChart/SummaryChart';

export default function Summary() {
  return (
    <div className='flex max-w-[1100px] mx-auto p-4 gap-5'>
      <Forecast />
      <SummaryChart />
    </div>
  );
}
