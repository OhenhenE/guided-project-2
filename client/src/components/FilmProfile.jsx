import Character from './Character.jsx';
import Planet from './Planet.jsx';
import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";

const FilmProfile = (props) => {

    const [film, setFilm] = useState([]);
    const [charFilms, setCharFilms] = useState([]);
    const [planFilms, setPlanFilms] = useState([]);

    let { id } = useParams();

    useEffect(() => {
        const fetchFilmByID = async () => {
            try {
                const response = await fetch(`${BASE_URL}/api/films/${id}`);
                if (!response.ok) {
                    throw new Error('film not fetched');
                }
                const json_response = await response.json();
                setFilm(json_response);
            }
            catch (err) {
                console.error('error occured fetching film', error);
            }
        };

        const fetchCharacterFilmAssociation = async () => {
            try {
                const response = await fetch(`${BASE_URL}/api/films/${id}/characters`);
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

        const fetchPlanetFilmAssociation = async () => {
            try {
                const response = await fetch(`${BASE_URL}/api/films/${id}/planets`);
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


        fetchCharacterFilmAssociation();
        fetchPlanetFilmAssociation();
        fetchFilmByID();
    }, []);


    const filteredCharacters = props.characters.filter(character =>
        charFilms.some(cf => cf.character_id === character.id)
    );

    const filteredPlanets = props.planets.filter(planet =>
        planFilms.some(pf => pf.planet_id === planet.id)
    );

    return (
        <>
            <h1>{film.title}</h1>
            <p>Episode: {film.episode_id} </p>
            <p>Director:  {film.director} kg</p>
            <p>Release Date: {film.release_date} </p>

            <h2>Characters Featured:</h2>
            <ul>
                {
                    filteredCharacters.map((character) => (
                        <Character key={character._id} character={character} />
                    ))
                }
            </ul>

            <h2>Planets Revealed:</h2>
            <ul>
                {
                    filteredPlanets.map((planet) => (
                        <Planet key={planet._id} planet={planet} />
                    ))
                }
            </ul>
        </>
    )
};

export default FilmProfile;