const Film = (props) => {
    return (
        <>
            <li><Link to={`/films/${props.film.id}`}>{props.film.name}</Link></li>
        </>
    )
};

export default Film;

//`/character.html?id=${id}`