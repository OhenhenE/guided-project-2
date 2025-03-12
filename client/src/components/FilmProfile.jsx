import Film from './Film.jsx';
import { useState, useEffect } from 'react'
import {useParams, Link} from "react-router-dom"

const FilmProfile = (props) => {

    const [film, setFilms] = useState([]);
    const [filmCharacters, setfilmCharacters] = useState([]);
    let {id} = useParams();
    
      useEffect(() => {
        const fetchFilmByID = async () => {
          try {
            const response = await fetch(`${BASE_URL}/api/films/${id}`);
            if (!response.ok) {
              throw new Error('film not fetched');
            }
            const json_response = await response.json();
            setFilms(json_response);
          }
          catch (err) {
            console.error('error occured fetching character', error);
          }
        };

        const fetchCharacterFilmAssociation = async () => {
            try {
              const response = await fetch(`${BASE_URL}/api/films/${id}/characters`);
              if (!response.ok) {
                throw new Error('character-film associations not fetched');
              }
              const json_response = await response.json();
              setfilmCharacters(json_response);
            }
            catch (err) {
              console.error('error occured fetching character-film associations', error);
            }
          };


        fetchCharacterFilmAssociation();
        fetchFilmByID();
      }, []);
    

    const filteredCharacters = props.films.filter(film => 
        filmCharacters.some(cf => cf.film_id === film.id)
    );

   // const planet = props.planets.find(planet => planet.id === film.homeworld);

    return (
        <>
            <h1 id="name">{film.title}</h1>
            <p> {film.opening_crawl} </p>
            <p>Episode: {film.episode} </p>
            <p>Director:  {film.director} </p>
            <p>Release Date: {film.release_date} </p>

            <h2>Characters From {film.title}</h2>
            <ul>{
                    filteredCharacters.map((film) => (
                        <Film key={film._id} film={film} />
                    ))
                }
            </ul>

            <h2>Films appeared in {film.title}</h2>
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