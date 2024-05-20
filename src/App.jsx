import './App.css';
import Header from './components/Header/Header';
import Overview from './components/Overview/Ovrview';
import Summary from './components/Summarycomp/SummarySection';

function App() {
  return <div className='bg-blue '>
    <Header/>
    <Overview/>
    <Summary/>
  </div>;
}

export default App;
