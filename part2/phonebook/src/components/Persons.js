import React from "react";
import * as personService from "../services/personService";
const Persons = ({ persons, searchItem, setPersons }) => {
    const personsArrayToShow =
        searchItem === ""
            ? persons
            : persons.filter((person) =>
                  person.name.toLowerCase().includes(searchItem)
              );
    const deletePerson = (personName, id) => {
        if (window.confirm(`Delete ${personName}?`)) {
            personService.deletePerson(id).then(() => {
                setPersons(persons.filter((person) => person.id !== id));
            });
        }
    };
    return (
        <div>
            {personsArrayToShow.map((person) => (
                <p key={person.name}>
                    {person.name} {person.number}{" "}
                    <button
                        onClick={() => deletePerson(person.name, person.id)}
                    >
                        Delete
                    </button>
                </p>
            ))}
        </div>
    );
};

export default Persons;
