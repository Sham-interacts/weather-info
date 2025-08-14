import React, {useEffect, useState} from 'react';
import Header from './Components/Header'
import InputCity from './Components/InputCity';
import ShowWeather from './Components/ShowWeather';
import './styles.css';

function App() {
const [inputCity, setInputCity] = useState('Bengaluru');
const [cityName, setCityName] = useState('Bengaluru');
const [error, setError] = useState(false);
const [weatherData, setWeatherData] = useState('');

const api_key = 'f5020f49627a2d50be0286ba007d08ba';

const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}`;

async function fetchData (URL){
  const response = await fetch(URL);
  const data = await response.json();
  if(data.cod === '404'){
    setError(true);
  }else{
    console.log(data);
    setWeatherData(data);
  }
}

useEffect(()=>{
  fetchData(URL);
}, [URL]);

  const inputHandler = (e) => {
    setInputCity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setError(false);
    setCityName(inputCity);
  };

  
  return (
    <div>
      <Header/>
      <InputCity cityName={inputCity} inputHandler={inputHandler} submitHandler={submitHandler} />
      {error ? (<h3 className="error"> No data found</h3>

      ): (weatherData.cod ==='400' ? null : (<ShowWeather data={weatherData}/>))}
      
    </div>
  );
}

export default App;
