import Film from './Film.jsx';
import { useState, useEffect } from 'react'
import {useParams, Link} from "react-router-dom"

const CharacterProfile = (props) => {

    const [character, setCharacter] = useState([]);
    const [charFilms, setCharFilms] = useState([]);
    let {id} = useParams();
    
      useEffect(() => {
        const fetchCharacterByID = async () => {
          try {
            const response = await fetch(`${BASE_URL}/api/characters/${id}`);
            if (!response.ok) {
              throw new Error('character not fetched');
            }
            const json_response = await response.json();
            setCharacter(json_response);
          }
          catch (err) {
            console.error('error occured fetching character', error);
          }
        };

        const fetchCharacterFilmAssociation = async () => {
            try {
              const response = await fetch(`${BASE_URL}/api/characters/${id}/films`);
              if (!response.ok) {
                throw new Error('character-film associations not fetched');
              }
              const json_response = await response.json();
              setCharFilms(json_response);
            }
            catch (err) {
              console.error('error occured fetching character-film associations', error);
            }
          };


        fetchCharacterFilmAssociation()
        fetchCharacterByID();
      }, []);
    

    const filteredFilms = props.films.filter(film => 
        charFilms.some(cf => cf.film_id === film.id)
    );

    const planet = props.planets.find(planet => planet.id === character.homeworld);

    return (
        <>
            <h1>{character.name}</h1>
            <p>Height: {character.height} cm</p>
            <p>Mass:  {character.mass} kg</p>
            <p>Born: {character.birth_year} </p>

            <h2>Homeworld</h2>
            <p><Link to={`/planets/${planet.id}`}>{planet.name}</Link></p>

            <h2>Films appeared in</h2>
            <ul>{
                    filteredFilms.map((film) => (
                        <Film key={film._id} film={film} />
                    ))
                }
            </ul>
        </>
    )
};

export default CharacterProfile;

