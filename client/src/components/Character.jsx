const Character = (props) => {
    return (
        <>
            <div><Link to="/{props.character.name}">props.character.name</Link></div>
        </>
    )
};

export default Character;