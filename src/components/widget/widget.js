import React from 'react';
import './widget_style.css';

function Widget(props) {
    const iconWeather = 'http://openweathermap.org/img/wn/' + props.icon + '.png';
    return (
        <div className='widget-wrapper'>
            <div className="close-widget" onClick={() => {props.deleteCities(props.cityId)}}>
                <span></span>
                <span></span>
            </div>
            <p className='cities-name'>{props.name}</p>
            <p>{props.temp}</p>
            <img src={iconWeather} alt='weather-logo' />
            <p>{props.weather}</p>
        </div>
    );
}

export default Widget;
