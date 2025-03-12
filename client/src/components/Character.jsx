import {Link} from "react-router-dom";

const Character = (props) => {
    return (
        <>
            <li><Link to={`/characters/${props.character.id}`}>{props.character.name}</Link></li>
        </>
    )
};

export default Character;

//`/character.html?id=${id}`