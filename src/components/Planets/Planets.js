import { useContext } from "react";

import Loader from "../Loader/Loader";
import Planet from "./Planet";

import { DataContext } from "../../context/DataContext";
import { SearchbarContext } from "../../context/SearchbarContext";

import useFetch from "../../hooks/useFetch";

import "./css/planets.css";

const Planets = ({ API }) => {
    const { searchValue, searchData } = useContext(SearchbarContext);
    const { data, isLoad } = useContext(DataContext);

    useFetch(API);

    const showAllOrSearchingPlanets = searchValue ? (
        <Planet dataCollection={searchData} />
    ) : (
        <Planet dataCollection={data} />
    );

    // console.log(searchData);

    return <ul className="planets-list">{isLoad ? showAllOrSearchingPlanets : <Loader />}</ul>;
};

export default Planets;
