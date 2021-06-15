import "./searchbar.css";

const SearchBar = () => {
    return (
        <input
            type="text"
            className="search-bar"
            placeholder="Type here to search planets by their name"
            aria-label="Search Planet by name"
        />
    );
};

export default SearchBar;
