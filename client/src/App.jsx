import { useState, useEffect } from 'react'
import './App.css'

import Search from './components/Search.jsx'
import CharacterList from './components/CharacterList.jsx'
import CharacterProfile from './components/CharacterProfile.jsx';
import FilmProfile from './components/FilmProfile.jsx';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

BASE_URL = 'http://localhost:3000/'

function App() {
  const [characters, setCharacters] = useState([]);
  const [films, setFilms] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/characters`);
        if (!response.ok) {
          throw new Error('characters not fetched');
        }
        const json_response = await response.json();
        setCharacters(json_response);
      }
      catch (err) {
        console.error('error occured fetching characters', error);
      }
    };


    const fetchFilms = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/films`);
        if (!response.ok) {
          throw new Error('Films not fetched');
        }
        const json_response = await response.json();
        setFilms(json_response);
      }
      catch (err) {
        console.error('error occured fetching films', error);
      }
    };

    const fetchPlanets = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/planets`);
        if (!response.ok) {
          throw new Error('Planets not fetched');
        }
        const json_response = await response.json();
        setPlanets(json_response);
      }
      catch (err) {
        console.error('error occured fetching planets', error);
      }
    };

    fetchCharacters();
    fetchFilms();
    fetchPlanets();
  }, []);


  return (
    <>
      <h1>Star Wars Universe Lookup</h1>
      <Routes>
        <Route exact path="/" element={
          <>
            <Search />
            <CharacterList characters={characters}/>
          </>
        } />
        <Route path="/character/:id" element={<CharacterProfile planets={planets} films={films}/>} />
      </Routes>
      <Search />
      <CharacterList />
    </>
  )
}

export default App
