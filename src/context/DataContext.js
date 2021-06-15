import React, { useState, createContext } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [isLoad, setIsLoad] = useState(false);

    return <DataContext.Provider value={{ data, isLoad, setData, setIsLoad }}>{children}</DataContext.Provider>;
};

export default DataProvider;
