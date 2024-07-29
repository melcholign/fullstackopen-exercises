const PersonForm = ({name, number, onAddPerson, onChangeName, onChangeNumber}) => {
    return (
        <form onSubmit={onAddPerson}>
        <p>
          Name:{' '}
          <input value={name} onChange={onChangeName} />
        </p>
        <p>
          Number:{' '}
          <input value={number} onChange={onChangeNumber} />
        </p>
        <button type="submit">Add</button>
      </form>
    )
}

export default PersonForm;