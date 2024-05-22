import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News';
import Overview from './components/Overview/Ovrview';
import Summary from './components/Summarycomp/SummarySection';

function App() {
  return (
    <div className="bg-blue min-h-[100vh] ">
      <Header />
      <Overview />
      <Summary />
      <News />
    </div>
  );
}

export default App;
