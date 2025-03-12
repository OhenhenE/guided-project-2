import CharacterHome from './CharacterHome.jsx'

const CharacterList =  (props) => {
    return (
        <>
                <div> 
                    {
                        props.characters.map((character) => (
                            <CharacterHome key={character._id} character={character} />
                        ))
                    }
                </div>
        </>
    );
};

export default CharacterList;