import React from "react";

import simplePlanet from "../../assets/SimplePlanet.svg";

import "./css/planet.css";

const Planet = () => {
    return (
        <li className="planet">
            <img src={simplePlanet} alt="Simple Planet" className="planet__img" />
            <h2 className="planet__name">Planet Name</h2>
            <ul className="planet-info">
                <li className="planet-info__element">
                    <p className="planet-info__info-name">Rotation Period:</p>
                    <span className="planet-info__value">23</span>
                </li>
                <li className="planet-info__element">
                    <p className="planet-info__info-name">Climate:</p>
                    <span className="planet-info__value">temp</span>
                </li>
                <li className="planet-info__element">
                    <p className="planet-info__info-name">Gravity:</p>
                    <span className="planet-info__value">gravity</span>
                </li>
                <li className="planet-info__element">
                    <p className="planet-info__info-name">Created:</p>
                    <span className="planet-info__value">date...</span>
                </li>
                <li className="planet-info__element">
                    <a href="#" className="planet-info__more-info-link">
                        More Information
                    </a>
                </li>
            </ul>
        </li>
    );
};

export default Planet;
