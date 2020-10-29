import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryFilter from "./components/CountryFilter";

const App = () => {
    const [countries, setCountries] = useState([]);
    const [newCountry, setNewCountry] = useState("");
    const handleCountryChange = (event) => {
        setNewCountry(event.target.value);
    };
    useEffect(() => {
        axios
            .get("https://restcountries.eu/rest/v2/all")
            .then((response) => setCountries(response.data));
    }, []);
    return (
        <div>
            find countries{" "}
            <input value={newCountry} onChange={handleCountryChange} />{" "}
            <CountryFilter
                countries={countries}
                newCountry={newCountry}
                setNewCountry={setNewCountry}
                setCountries={setCountries}
            />{" "}
        </div>
    );
};

export default App;
