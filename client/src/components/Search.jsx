const Search = () => {
    return (
        <>
            <label for="searchString">Who you looking for? <span class="small">
                (Regular expressions are cool here)
            </span></label>
            <input id="searchString" oninput="filterCharacters()" autocomplete="off" />
        </>
    )
};

export default Search;