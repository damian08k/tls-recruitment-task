import Planet from "./Planet";

import useFetch from "../../hooks/useFetch";

import "./css/planets.css";

const Planets = ({ API }) => {
    useFetch(API);

    return (
        <ul className="planets-list">
            <Planet />
        </ul>
    );
};

export default Planets;
