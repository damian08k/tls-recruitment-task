import React, { Fragment } from "react";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Planets from "./components/Planets/Planets";
import SearchBar from "./components/SearchBar/Searchbar";

const App = () => {
    return (
        <Fragment>
            <Header />
            <SearchBar />
            <Planets />
            <Footer />
        </Fragment>
    );
};

export default App;
