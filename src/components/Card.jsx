import React from 'react'
import './Card.css'
import crewImg from '../img/crew.jfif';
import { Link } from 'react-router-dom'


const Card = ({ id, name, speed, color}) =>  {


    const colorMap = {
        red: '#c51111',
        blue: '#132ed1',
        green: '#117f2d',
        yellow: '#f5f557',
        pink: '#ed54ba',
        purple: '#6b2fbb',
        black: '#3f474e',
        white: '#d6e0f0',
        orange: '#ef7d0d',
    };
    
    const backgroundColor = colorMap[color.toLowerCase()] || '#f5f5f5';

  return (
      <div className='Card' style={{backgroundColor}}>
        <img className="crewmateImg" src={crewImg} />
        <div className='crewmateInfo'>
            <h2 className='crewName'>{name}</h2>
            <p className='crewSpeed'>Speed: {speed}</p>
            <p className='crewColor'>Color: {color}</p>
            

        </div>
      </div>
  );
};

export default Card;