import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const createIdGenerator = (persons) => {
  let maxId = persons.reduce((max, person) => Math.max(max, person.id), 0);
  return () => ++maxId;
}

let generateId;

function App() {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterKey, setFilterKey] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        const persons = response.data;
        generateId = createIdGenerator(persons);
        setPersons(persons);
      })

  }, []);

  const handleAddPerson = (e) => {
    e.preventDefault();

    const hasDuplicate = persons.some(person => person.name === newName);

    if (hasDuplicate) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons([...persons, { name: newName, number: newNumber, id: generateId() }]);
      setNewName('');
      setNewNumber('');
    }

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

      <Persons persons={persons} filterKey={filterKey} />

    </div>
  )
}

export default App
