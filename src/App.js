import './App.css';
import UserCard from './components/UserCard/UserCard';
import ActivityCard from './components/ActivityCard/ActivityCard';
import { useState } from 'react';
const dataJson = require('./data/data.json');
function App() {

  const [mode, setMode] = useState('daily');

  function handleClickMode(mode) {
    setMode(mode)
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-3'>
            <UserCard onClick={handleClickMode} fullname="Nahuel Salazar" image="Foto" />
          </div>
          <div className='col-12 col-md-9 bg-warning'>
            <div className='row h-100'>
              {
                dataJson.map((e, i) => {
                  return (
                    <div key={i} className='col-12 col-md-4'>
                      <ActivityCard  activity={e.title} mode={e.timeframes[mode]} hours={e.timeframes[mode].current} last={e.timeframes[mode].previous} />
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
