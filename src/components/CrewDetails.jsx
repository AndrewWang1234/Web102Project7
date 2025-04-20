import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import { Link } from 'react-router-dom'

const CrewDetails = () => {
    const { id } = useParams();
    const [crew, setCrew] = useState(null);

    useEffect(() => {
        const fetchCrew = async () => {
            const { data, error } = await supabase
                .from('crewmates')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error('Error fetching crew:', error);
                // Handle the error appropriately (e.g., show an error message)
            } else {
                setCrew(data);
            }
        };

        fetchCrew();
    }, [id]);

    if (!crew) {
        return <div>Loading...</div>;  // Show loading indicator while crew is being fetched
    }


    return (
        <div className="crewmate-details">
            <h1>Name: {crew.name}</h1>
            <p>Speed: {crew.speed} mph</p>
            <p>Color: <span style={{color:crew.color}}>{crew.color}</span></p>
            <Link to={'edit/'+ id}>Edit Crewmate</Link>
        </div>
    )
};

export default CrewDetails;