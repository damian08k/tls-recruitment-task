import React, { useState, createContext } from "react";

export const SearchbarContext = createContext();

const SearchbarProvider = ({ children }) => {
    const [searchValue, setSearchValue] = useState("");
    const [searchData, setSearchData] = useState([]);

    return (
        <SearchbarContext.Provider value={{ searchValue, searchData, setSearchValue, setSearchData }}>
            {children}
        </SearchbarContext.Provider>
    );
};

export default SearchbarProvider;
