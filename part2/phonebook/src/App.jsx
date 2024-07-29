import { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const INITIAL_PERSONS = [
  { name: 'Arto Hellas', number: '040-123456', id: 1 },
  { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
]

const getNextId = (() => {
  let currentId = INITIAL_PERSONS.length;

  return function () {
    return ++currentId;
  };

})();

function App() {

  const [persons, setPersons] = useState(INITIAL_PERSONS);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterKey, setFilterKey] = useState('');

  const handleAddPerson = (e) => {
    e.preventDefault();

    const hasDuplicate = persons.some(person => person.name === newName);

    if (hasDuplicate) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons([...persons, { name: newName, number: newNumber, id: getNextId() }]);
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
