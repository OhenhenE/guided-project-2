import Character from './Character.jsx'

const CharacterList =  (props) => {
    return (
        <>
                <div> 
                    {
                        props.characters.map((character) => (
                            <Character key={character._id} character={character} />
                        ))
                    }
                </div>
        </>
    );
};

export default CharacterList;