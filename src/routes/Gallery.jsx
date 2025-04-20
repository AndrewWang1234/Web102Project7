import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';
import Card from '../components/Card';

const Gallery = (props) => {

    const [crews, setCrew] = useState([]);
    
    useEffect(() => {
        const fetchCrews = async () => {
            const {data} = await supabase
                .from('crewmates')
                .select();

                setCrew(data)
        }
        fetchCrews();
    }, [props]);

    return (
        <div className="Gallery">
            {
                crews && crews.length > 0 ?
                crews.map((crew,index) => 
                   <Link to={`/crewmate/${crew.id}`} key={crew.id}>
                        <Card key={crew.id} name={crew.name} speed={crew.speed} color={crew.color}/>
                   </Link>
                ) : 
                <div>
                    <h2>"You haven't made a crewmate yet!"</h2>
                    <Link to="/create"> Create one Here</Link>
                </div>
            }
        </div>        
    );
}

export default Gallery;