const Character = (props) => {
    return (
        <>
            <div><Link to={`/characters/${props.character.id}`}>props.character.name</Link></div>
        </>
    )
};

export default Character;