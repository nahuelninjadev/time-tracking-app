import './App.css';
import UserCard from './components/UserCard/UserCard';
import ActivityCard from './components/ActivityCard/ActivityCard';
function App() {

  function handleClickMode(mode){
    console.log(mode);
  }

  return (
    <div className="App">
      <div className='container' style={{ minHeight: '300px' }}>
        <div className='row'>
          <div className='col-12 col-md-3 bg-danger'>
            <UserCard onClick={handleClickMode} fullname="Nahuel Salazar" image="Foto" />
          </div>
          <div className='col-12 col-md-9 bg-warning'>
            <div className='row'>
              <div className='col-12 col-md-4 bg-danger'>
                <ActivityCard activity="Work"  mode="d" hours="32" last="0"/>
              </div>
              <div className='col-12 col-md-4 bg-danger'>
                <ActivityCard activity="Play" mode="d" hours="32" last="0"/>
              </div>
              <div className='col-12 col-md-4 bg-danger'>
                <ActivityCard activity="Study" mode="d" hours="32" last="0"/>
              </div>
              <div className='col-12 col-md-4 bg-danger'>
                <ActivityCard activity="Excercise" mode="d" hours="32" last="0"/>
              </div>
              <div className='col-12 col-md-4 bg-danger'>
                <ActivityCard activity="Social" mode="d" hours="32" last="0"/>
              </div>
              <div className='col-12 col-md-4 bg-danger'>
                <ActivityCard activity="Sel Care" mode="d" hours="32" last="0"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
