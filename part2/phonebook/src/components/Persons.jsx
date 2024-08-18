const Persons = ({ persons, filterKey, deletePerson }) => {
    const filteredPersons = persons.filter(person =>
        person.name
            .toLowerCase()
            .includes(filterKey.toLowerCase())
    );

    const handleDeletePerson = (person) => {
        const confirm = window.confirm(`Delete ${person.name}?`);
        if (confirm) {
            deletePerson(person.id);
        }
    }

    return (
        <div>
            {filteredPersons.map(person =>
                <Person
                    key={person.id}
                    person={person}
                    onDeletePerson={() => handleDeletePerson(person)}
                />
            )}
        </div>
    );
}

const Person = ({ person, onDeletePerson }) => {
    return (
        <div>
            {person.name}, {person.number}
            {' '}
            <button onClick={onDeletePerson}>
                Delete
            </button>
        </div>
    );
}

export default Persons;