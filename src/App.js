import './App.css';
import UserCard from './components/UserCard/UserCard';
import ActivityCard from './components/ActivityCard/ActivityCard';
import { useEffect, useState } from 'react';
const dataJson = require('./data/data.json');
function App() {

  const [mode, setMode] = useState('daily');
  const handleClickMode = mode => setMode(mode);

  useEffect(() => {
    document.title = "Timetracking Dashboard";
  }, [])

  return (
    <div className="App">
      <div className='d-flex w-100 mb-2 mb-md-0 justify-content-center align-items-center coder'>
        Coded by <a className='ms-1 text-decoration-none text-white' rel="noopener noreferrer" href='https://www.linkedin.com/in/nahuel-salazar-4201501a6/' target="_blank"> Nahuel Salazar</a> 
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-3'>
            <UserCard onClick={handleClickMode} fullname="Nahuel Salazar" image="Foto" mode={mode} />
          </div>
          <div className='col-12 col-md-9'>
            <div className='row h-100'>
              {
                dataJson.map((e, i) => {
                  return (
                    <div key={i} className={`col-12 col-md-4 ${i > 2 ? 'mt-2' : 'mt-2 mt-md-0'}`}>
                      <ActivityCard  
                        activity={e.title} 
                        mode={mode} 
                        hours={e.timeframes[mode].current} 
                        last={e.timeframes[mode].previous} 
                      />
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
