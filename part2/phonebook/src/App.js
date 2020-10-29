import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import * as personService from "../src/services/personService";
import Notification from "./components/Notification";

const App = () => {
    const [persons, setPersons] = useState([]);
    useEffect(() => {
        personService.getAll().then((initialNotes) => setPersons(initialNotes));
    }, []);

    const [newName, setNewName] = useState(""); //controlling the form element
    const [newNumber, setNewNumber] = useState("");
    const [searchItem, setSearchItem] = useState("");
    const [message, setMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    };

    const handleSearchItemChange = (event) => {
        const currentSearchItem = event.target.value;
        setSearchItem(currentSearchItem.toLowerCase());
    };

    return (
        <div>
            <h2>PhoneBook</h2>
            <Notification message={message} errorMessage={errorMessage} />
            <Filter
                searchItem={searchItem}
                handleSearchItemChange={handleSearchItemChange}
            />
            <h2>add a new</h2>
            <PersonForm
                persons={persons}
                newName={newName}
                handleNameChange={handleNameChange}
                newNumber={newNumber}
                handleNumberChange={handleNumberChange}
                setPersons={setPersons}
                setNewName={setNewName}
                setNewNumber={setNewNumber}
                setMessage={setMessage}
                setErrorMessage={setErrorMessage}
            />

            <h2>Numbers</h2>
            <Persons
                persons={persons}
                searchItem={searchItem}
                setPersons={setPersons}
            />
        </div>
    );
};
export default App;
