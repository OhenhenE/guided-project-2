const Planet = () => {
    return (
        <>
            <div><Link to={`/planets/${props.planet.id}`}>{props.planet.name}</Link></div>
        </>
    )
};

export default Planet;