import { useContext } from "react";

import Planet from "./Planet";

import useFetch from "../../hooks/useFetch";

import { DataContext } from "../../context/DataContext";

import "./css/planets.css";

const Planets = ({ API }) => {
    const { isLoad } = useContext(DataContext);

    useFetch(API);

    return <ul className="planets-list">{isLoad ? <Planet /> : "Loading..."}</ul>;
};

export default Planets;
