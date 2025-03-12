const Search = () => {
    return (
        <>
            <label for="searchString">Who you looking for? <span>
                (Regular expressions are cool here)
            </span></label>
            <input autocomplete="off" />
        </>
    )
};

export default Search;