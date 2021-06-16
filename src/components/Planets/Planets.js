import { useContext } from "react";

import Loader from "../Loader/Loader";
import Planet from "./Planet";

import useFetch from "../../hooks/useFetch";

import { DataContext } from "../../context/DataContext";

import "./css/planets.css";

const Planets = ({ API }) => {
    const { isLoad } = useContext(DataContext);

    useFetch(API);

    return <ul className="planets-list">{isLoad ? <Planet /> : <Loader />}</ul>;
};

export default Planets;
