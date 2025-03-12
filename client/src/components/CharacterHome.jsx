import {Link} from "react-router-dom";

const CharacterHome = (props) => {
    return (
        <>
            <div><Link to={`/characters/${props.character.id}`}>{props.character.name}</Link></div>
        </>
    )
};

export default CharacterHome;

//`/character.html?id=${id}`