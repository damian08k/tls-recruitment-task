import React from "react";

import simplePlanet from "../../assets/SimplePlanet.svg";

import "./css/planet.css";

const Planet = ({ dataCollection }) => {
    const dataCondition = dataCollection.hasOwnProperty("results") ? dataCollection.results : dataCollection;
    const dataResult = dataCondition;

    const planetElement = dataResult.map(({ name, rotation_period, climate, gravity, created, url }) => {
        const createdDate = new Date(created);
        const createDay = createdDate.getDate();
        const createMonth = createdDate.toLocaleString("en-US", { month: "long" });
        const createYear = createdDate.getFullYear();

        return (
            <li className="planet" key={name}>
                <img src={simplePlanet} alt="Simple Planet" className="planet__img" />
                <h2 className="planet__name">{name}</h2>
                <ul className="planet-info">
                    <li className="planet-info__element">
                        <p className="planet-info__info-name">Rotation Period:</p>
                        <span className="planet-info__value">{rotation_period}</span>
                    </li>
                    <li className="planet-info__element">
                        <p className="planet-info__info-name">Climate:</p>
                        <span className="planet-info__value">{climate}</span>
                    </li>
                    <li className="planet-info__element">
                        <p className="planet-info__info-name">Gravity:</p>
                        <span className="planet-info__value">{gravity}</span>
                    </li>
                    <li className="planet-info__element">
                        <p className="planet-info__info-name">Created:</p>
                        <span className="planet-info__value">{`${createDay} ${createMonth} ${createYear}`}</span>
                    </li>
                    <li className="planet-info__element">
                        <a href={url} className="planet-info__more-info-link">
                            More Information
                        </a>
                    </li>
                </ul>
            </li>
        );
    });

    return planetElement;
};

export default Planet;
