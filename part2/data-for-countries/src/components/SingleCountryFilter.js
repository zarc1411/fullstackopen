import React, { useEffect, useState } from "react";
import axios from "axios";
const SingleCountryFilter = ({ currentCountry }) => {
    const [weatherDetails, setWeatherDetails] = useState({});
    const params = {
        access_key: process.env.REACT_APP_API_KEY,
        query: currentCountry.capital,
    };
    useEffect(() => {
        axios
            .get("http://api.weatherstack.com/current", { params })
            .then((response) => {
                setWeatherDetails(response.data);
            });
    }, []);
    if (weatherDetails.current !== undefined) {
        return (
            <div>
                <h1>{currentCountry.name}</h1>
                <p>Capital {currentCountry.capital}</p>
                <p>Population {currentCountry.population}</p>
                <h2>Languages</h2>
                <ul>
                    {currentCountry.languages.map((language) => {
                        return <li key={language.name}>{language.name}</li>;
                    })}
                </ul>
                <img src={currentCountry.flag} width="8%" alt="flag" />
                <div>
                    <h2>Weather details in {currentCountry.capital}</h2>
                    <p>
                        <b>temperature:</b> {weatherDetails.current.temperature}{" "}
                        celcius
                    </p>
                    <img src={weatherDetails.current.weather_icons[0]}></img>
                    <p>
                        <b>wind:</b> {weatherDetails.current.wind_speed}mph
                        direction {weatherDetails.current.wind_dir}
                    </p>
                </div>
            </div>
        );
    } else {
        return <></>;
    }
};
export default SingleCountryFilter;
