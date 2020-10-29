import React from "react";
import Button from "./Button";
import SingleCountryFilter from "./SingleCountryFilter";
const CountryFilter = ({
    countries,
    newCountry,
    setNewCountry,
    setCountries,
}) => {
    if (newCountry === "") {
        return <> </>;
    } else {
        const countriesToShow = countries.filter((country) =>
            country.name.toLowerCase().includes(newCountry.toLowerCase())
        );

        if (countriesToShow.length > 10) {
            return <div> Too many matches, specify another filter </div>;
        } else if (countriesToShow.length === 1) {
            const currentCountry = countriesToShow[0];
            return <SingleCountryFilter currentCountry={currentCountry} />;
        }
        return (
            <div>
                {countriesToShow.map((country) => {
                    return (
                        <div key={country.alpha2Code}>
                            <p> {country.name} </p>
                            <Button
                                country={country}
                                setNewCountry={setNewCountry}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
};

export default CountryFilter;
