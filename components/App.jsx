import React, { useState, useEffect } from "react";
function App = () => {

        const[characters, setCharacters] = useState([]);

        useEffect(()) => {
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
            }
        }
    return (
<>
        
</>
    )
};

export default App;