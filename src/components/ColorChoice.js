import React from 'react';
import './ColorChoice.css';
import PropTypes from 'prop-types';


const ColorChoice = ({color, origin, colorupdate})=>{

    return(
        <section className={`colorchoice  ${origin}`}>
            <h3 className={color}>{origin}'s color</h3>
            <section className='colorbutton'>
                <button className='button-red' onClick={()=>{colorupdate(origin, 'red')}}></button>
                <button className='button-orange' onClick={()=>{colorupdate(origin, 'orange')}}></button>
                <button className='button-yellow' onClick={()=>{colorupdate(origin, 'yellow')}}></button>
                <button className='button-green' onClick={()=>{colorupdate(origin, 'green')}}></button>
                <button className='button-blue' onClick={()=>{colorupdate(origin, 'blue')}}></button>
                <button className='button-purple' onClick={()=>{colorupdate(origin, 'purple')}}></button>
            </section>
        </section>
    );
};

ColorChoice.propTypes ={
    color: PropTypes.string,
    origin: PropTypes.string,
    colorupdate: PropTypes.func, 
}


export default ColorChoice;