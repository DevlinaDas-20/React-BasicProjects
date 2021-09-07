import React from 'react';
// import './App.css';
// import Restaurant from './component/Basics/Restaurant';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Hooks from './Hooks/Hooks';
// import ToDo from './TODOAPP/ToDo';
// import Weather from './Weather/Weather';
import WeatherAPI from './Weather/WeatherAPI';

function App() {
  
  return (
    <div className="App" style={{display:'inline-grid'}}>
      {/* <Restaurant /> */}
      {/* <Hooks /> */}
      {/* <ToDo /> */}
      <WeatherAPI />
    </div>
  );
}

export default App;
