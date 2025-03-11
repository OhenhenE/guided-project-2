import {  useState, useEffect } from 'react'
import './App.css'

import Search from './components/Search.jsx'
import CharacterList from './components/CharacterList.jsx'

function App() {
  const[characters, setCharacters] = useState([]);
  
  useEffect() => {
      const fetchCharacters = async () => {
          try {
              const response = await fetch('/characters.json');
              if (!response.ok) {
                  throw new Error('characters not fetched');
              }
              const json_response = await response.json();
              setCharacters(json_response);
          }
          catch (err) {
              console.error('error occured fetching characters', error);
          }
      }, ([])
  }

  return (
    <>
      <h1>Star Wars Universe Lookup</h1>
      <Search />
      <CharacterList />
    </>
  )
}

export default App
