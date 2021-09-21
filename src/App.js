import React from 'react';
// import './App.css';
// import Restaurant from './component/Basics/Restaurant';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Hooks from './Hooks/Hooks';
// import ToDo from './TODOAPP/ToDo';
// import Weather from './Weather/Weather';
import WeatherAPI from './Weather/WeatherAPI';
//import MainForm from './ModalComponent/MainForm';
import MainForm from './RepeatableblockComponent/MainForm'

function App() {
  const WeatherAPI_Key = process.env.REACT_APP_WEATHER_API_KEY;
  return (
    <div className="App" style={{display:'inline-grid'}}>
      {/* <Restaurant /> */}
      {/* <Hooks /> */}
      {/* <ToDo /> */}
      <WeatherAPI weatherAPIprop={WeatherAPI_Key} />
      {/* <MainForm /> */}
      {/* <MainForm /> */}
    </div>
  );
}

export default App;
