import React from 'react';
import './Create.css'
import {useState} from 'react';
import { supabase } from '../client'
import crewImage from '../img/cremates.jpg'

const Create = () => {

    const createCrew = async (event) => {
        event.preventDefault();
        await supabase
            .from('crewmates')
            .insert({name: crew.name, speed: crew.speed, color: crew.color})
            .select();
        window.location = "/";
    }


    const [crew, setCrew] = useState({name: "", speed: "", color: ""});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCrew( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }



    return (
        <div className='create-container'>
            <h1>Create a New Crewmate</h1>
            <img src={crewImage} alt="Crewmates"></img>
            <form className='crewmate-form' >
                <label htmlFor="Name">Name</label>
                <input type="text" id="name" name="name" onChange={handleChange} value={crew.name}/>

                <label htmlFor="speed">Speed (mph)</label>
                <input type="number" id="speed" name="speed" onChange={handleChange} value={crew.speed}/>

                <fieldset className='color-options'>
                    <legend>Color</legend>
                    {["red", "green", "blue", "purple", "yellow", "orange", "pink"].map(color => (
                        <div className='radio-option' key={color}>
                            <input type="radio" id={color} name="color" value={color} onChange={handleChange} checked={crew.color === color}/>
                            <label htmlFor={color} style={{ color: color }}>{color[0].toUpperCase() + color.slice(1)}</label>
                        </div>
                    ))}
                </fieldset>

                

                <input type="submit" value="Submit" onClick={createCrew}/>
            </form>
        </div>        
    );
}

export default Create;