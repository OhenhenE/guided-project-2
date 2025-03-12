const Search = () => {
    return (
        <>
            <label htmlFor="searchString">Who you looking for? <span>
                (Regular expressions are cool here)
            </span></label>
            <input autoComplete="off" />
        </>
    )
};

export default Search;