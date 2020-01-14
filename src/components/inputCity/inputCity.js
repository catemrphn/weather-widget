import React, {useRef} from 'react';
import './inputCity_style.css'

function InputCity(props) {
    const currCity = useRef();

    const something=(event)=> {
        if (event.keyCode === 13) {
            props.onButtonPress(currCity.current.value)
        }
    }

    return (
        <div className='input'>
            <div className='input__container'>
                <input onKeyDown={(e) => something(e) } type='text' ref={currCity} required />
                <label>Введите название города</label>
            </div>
            <input className='input__submit' type='button' onClick={() => {props.onButtonPress(currCity.current.value)}}  value='Submit'/>
        </div>
    );
}

export default InputCity;
