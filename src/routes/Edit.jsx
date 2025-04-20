import { supabase } from '../client'
import {useParams} from 'react-router-dom'
import React, {useState, useEffect} from 'react';
import crewImage from '../img/crew.jfif';


const Edit = ({data}) => {
    const {id} = useParams();
    const [crew, setCrew] = useState({id: null, name: "", speed: "", color: ""});

        
    useEffect(() => {
        const fetchCrew = async () => {
            const { data, error} = await supabase
                .from('crewmates')
                .select('*')
                .eq('id',id)
                .single();
            
                if (error) {
                    console.error("Error fetching crewmate data:", error);
                } else {
                    setCrew(data);
                }
        };
        fetchCrew();
    }, [id])

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCrew ( (prev) => {
            return {
                ...prev, 
                [name]:value,
            }
        })
    }    

    const updateCrew = async(event) => {
        event.preventDefault();
        await supabase
            .from('crewmates')
            .update({name: crew.name, speed: crew.speed, color: crew.color})
            .eq('id', id);
            window.location = "/gallery";
    }

    const deleteCrew = async (event) => {
        event.preventDefault();
        await supabase
            .from('crewmates')
            .delete()
            .eq('id', id);
            window.location = "/gallery";
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

                

                <input type="submit" value="Submit" onClick={updateCrew}/>
                <button className="deleteButton" onClick={deleteCrew}>Delete</button>
            </form>
        </div>  
    )
}
export default Edit;