import React, {useState} from 'react';
import './App.css';
import InputCity from './components/inputCity/inputCity';
import Widget from "./components/widget/widget";
import axios from "axios";
import Loader from './components/loader/loader';


function App(props) {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  function onButtonPress(props) {
      setLoading(true);
          axios.get(
          'https://cors-anywhere.herokuapp.com/http://openweathermap.org/data/2.5/weather?q='+props+'&appid=b6907d289e10d714a6e88b30761fae22').then((response) => {
              setLoading(false);
              setCities(cities => [...cities, response.data]);
          });
  }


  function deleteCities(cityId) {
      setCities(cities.filter((city) => city.id !== cityId));
  }

  return (
      <div className='wrapper'>
          <h1>Weather widget</h1>
          {loading ? <Loader/> : ''}
          <InputCity  onButtonPress={onButtonPress} />
          <div className='widgets_wrapper'>{
              cities.map((el) => <Widget name={el.name} key={el.id} cityId={el.id} temp={el.main.temp} weather={el.weather[0].description} icon={el.weather[0].icon} deleteCities={deleteCities} />)
            }
          </div>
      </div>
  );
}

export default App;
