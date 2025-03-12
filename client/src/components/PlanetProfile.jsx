import Character from './Character.jsx';
import Film from './Film.jsx';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const FilmProfile = (props) => {

    const [planet, setPlanet] = useState([]);
    const [planFilms, setPlanFilms] = useState([]);

    let { id } = useParams();

    useEffect(() => {
        const fetchPlanetByID = async () => {
            try {
                const response = await fetch(`${BASE_URL}/api/planets/${id}`);
                if (!response.ok) {
                    throw new Error('planet not fetched');
                }
                const json_response = await response.json();
                setPlanet(json_response);
            }
            catch (err) {
                console.error('error occured fetching planet', error);
            }
        };

        const fetchPlanetFilmAssociation = async () => {
            try {
                const response = await fetch(`${BASE_URL}/api/planets/${id}/films`);
                if (!response.ok) {
                    throw new Error('planet-film associations not fetched');
                }
                const json_response = await response.json();
                setPlanFilms(json_response);
            }
            catch (err) {
                console.error('error occured fetching planet-film associations', error);
            }
        };

        fetchPlanetFilmAssociation();
        fetchPlanetByID();
    }, []);


    const filteredCharacters = props.characters.filter(character =>
        character.homeworld === planet_id
    );

    const filteredFilms = props.films.filter(film =>
        planFilms.some(pf => pf.film_id === film.id)
    );

    return (
        <>
            <h1>{planet.name}</h1>
            <p>Climate: {planet.climate} </p>
            <p>Terrain:  {planet.terrain} kg</p>
            <p>Population: {planet.population} </p>

            <h2>Characters From Here:</h2>
            <ul>
                {
                    filteredCharacters.map((character) => (
                        <Character key={character._id} character={character} />
                    ))
                }
            </ul>

            <h2>Films Seen In:</h2>
            <ul>
                {
                    filteredFilms.map((film) => (
                        <Film key={film._id} film={film} />
                    ))
                }
            </ul>
        </>
    )
};

export default FilmProfile;