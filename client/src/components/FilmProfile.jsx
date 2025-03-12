import Film from './Film.jsx';
import { useState, useEffect } from 'react'
import {useParams, Link} from "react-router-dom"

const FilmProfile = (props) => {

    // fetch to get character by id
    // fetch film to character relationship here 
    // 

    const [film, setFilms] = useState([]);
    // const [charFilms, setCharFilms] = useState([]);
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
    

    const filteredCharacters = props.films.filter(film => 
        charFilms.some(cf => cf.film_id === film.id)
    );

    const planet = props.planets.find(planet => planet.id === film.homeworld);

    return (
        <>
            <h1 id="name">{film.title}</h1>
            <p> {film.opening_crawl} </p>
            <p>Episode: {film.episode} </p>
            <p>Director:  {film.director} </p>
            <p>Release Date: {film.release_date} </p>

            <h2>Planets</h2>
            <p><Link to={`/characters/${planet.id}`}>{planet.name}</Link></p>

            <h2>Characters From {film.title}</h2>
            <ul>{
                    filteredCharacters.map((film) => (
                        <Film key={film._id} film={film} />
                    ))
                }
            </ul>

            <h2>Films appeared in</h2>
            <ul>{
                    filteredCharacters.map((film) => (
                        <Film key={film._id} film={film} />
                    ))
                }
            </ul>
        </>
    )
};

export default FilmProfile;

//`/character.html?id=${id}`