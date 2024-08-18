import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons';

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterKey, setFilterKey] = useState('');

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
      });

  }, []);

  const handleAddPerson = (e) => {
    e.preventDefault();

    const duplicatePerson = persons.find(person => person.name === newName);

    if (!duplicatePerson) {
      const newPerson = {
        name: newName,
        number: newNumber,
      };

      addPerson(newPerson);

      return;
    }

    const update = window.confirm(`${duplicatePerson.name} is already added to the phonebook, replace the old number with a new one?`);

    if (update) {
      const updatedPerson = {
        ...duplicatePerson,
        number: newNumber,
      }

      updatePerson(updatedPerson.id, updatedPerson);
    }

  }

  const updatePerson = (id, updatedPerson) => {
    personService
      .update(id, updatedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person =>
          person.id !== id ? person : returnedPerson
        ));
        setNewName('');
        setNewNumber('');
      });
  }

  const addPerson = (newPerson) => {
    personService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons([...persons, returnedPerson]);
        setNewName('');
        setNewNumber('');
      })
  }

  const deletePerson = (id) => {
    personService
      .remove(id)
      .catch(error => {
        console.log('The selected person has already been deleted from the server');
      })
      .finally(() => {
        setPersons(persons.filter(person =>
          person.id != id
        ));
      });
  }

  return (
    <div>
      <h1>Phonebook</h1>

      <Filter filterKey={filterKey} onChange={e => setFilterKey(e.target.value)} />

      <h2>Add a New Number</h2>

      <PersonForm
        name={newName}
        number={newNumber}
        onAddPerson={handleAddPerson}
        onChangeName={e => setNewName(e.target.value)}
        onChangeNumber={e => setNewNumber(e.target.value)}
      />

      <h2>Numbers</h2>

      <Persons
        persons={persons}
        filterKey={filterKey}
        deletePerson={deletePerson}
      />

    </div>
  )
}

export default App
