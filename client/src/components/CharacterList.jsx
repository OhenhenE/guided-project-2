import Character from './Character.jsx'

const CharacterList =  (props) => {
    return (
        <>
                <div> 
                    {
                        props.data.map((character) => (
                            <Character key={character._id} data={character} />
                        ))
                    }
                </div>
        </>
    );
};

export default CharacterList;