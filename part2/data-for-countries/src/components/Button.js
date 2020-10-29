import React from "react";

const Button = ({ country, setNewCountry, setCountries }) => {
    const handleButton = () => {
        setNewCountry(country.name);
    };
    return (
        <div>
            <button onClick={handleButton}>Show</button>
        </div>
    );
};

export default Button;
