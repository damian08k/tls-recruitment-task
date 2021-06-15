import React, { Fragment } from "react";

import DataProvider from "./context/DataContext";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Planets from "./components/Planets/Planets";
import SearchBar from "./components/SearchBar/Searchbar";

const API = "https://swapi.dev/api/planets";

const App = () => {
    return (
        <Fragment>
            <Header />
            <DataProvider>
                <SearchBar />
                <Planets API={API} />
                <Footer />
            </DataProvider>
        </Fragment>
    );
};

export default App;
