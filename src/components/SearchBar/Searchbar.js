import { useEffect, useContext } from "react";

import { DataContext } from "../../context/DataContext";
import { SearchbarContext } from "../../context/SearchbarContext";

import "./searchbar.css";

const SearchBar = () => {
    const { searchValue, setSearchValue, setSearchData } = useContext(SearchbarContext);
    const { data, isLoad } = useContext(DataContext);

    const handleInputChange = evt => setSearchValue(evt.target.value);

    useEffect(() => {
        if (isLoad) {
            const currentInputValue = searchValue.toLowerCase();
            const dataResults = data.results;
            const currentData = [];

            for (let i = 0; i < dataResults.length; i++) {
                if (dataResults[i].name.toLowerCase().startsWith(currentInputValue)) {
                    currentData.push(dataResults[i]);
                }
            }

            setSearchData(currentData);
        }
    }, [searchValue, setSearchData, data, isLoad]);

    return (
        <input
            type="text"
            className="search-bar"
            placeholder="Search planets by their name"
            aria-label="Search Planet by name"
            value={searchValue}
            onChange={handleInputChange}
            disabled={!isLoad}
        />
    );
};

export default SearchBar;
