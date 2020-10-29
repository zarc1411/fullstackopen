import React from "react";
import * as personService from "../services/personService";
const PersonForm = ({
    persons,
    newName,
    newNumber,
    handleNameChange,
    handleNumberChange,
    setPersons,
    setNewName,
    setNewNumber,
    setMessage,
    setErrorMessage,
}) => {
    const addPerson = (event) => {
        event.preventDefault();
        const nameIndex = persons.findIndex(
            (person) => person.name === newName
        );
        const person = persons.find((person) => person.name === newName);
        if (nameIndex !== -1) {
            if (
                window.confirm(
                    `${newName} is already added to phonebook, replace the old number with a new one?`
                )
            ) {
                const changedPerson = { ...person, number: newNumber };
                personService
                    .updateNumber(person.id, changedPerson)
                    .then((changedObject) => {
                        setPersons(
                            persons.map((currentPerson) =>
                                currentPerson.id !== person.id
                                    ? currentPerson
                                    : changedObject
                            )
                        );
                        setMessage(`Added ${changedObject.name}`);
                    })
                    .catch((error) => {
                        setErrorMessage(
                            `Information of ${changedPerson.name} has already been removed from the server`
                        );
                        setTimeout(() => {
                            setErrorMessage(null);
                        }, 5000);
                    });
            }
        } else if (newName !== "" && newNumber !== "") {
            const newObject = {
                name: newName,
                number: newNumber,
            };
            personService.create(newObject).then((returnedObject) => {
                setPersons(persons.concat(returnedObject));
                setMessage(`Added ${returnedObject.name}`);
                setTimeout(() => {
                    setMessage(null);
                }, 5000);
            });
            setNewName("");
            setNewNumber("");
        }
    };

    return (
        <form onSubmit={addPerson}>
            <div>
                name : <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
                number :{" "}
                <input value={newNumber} onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
};

export default PersonForm;
