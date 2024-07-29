const Filter = ({ filterKey, onChange }) => {
    return (
        < div >
            <strong>Filter</strong> show with{' '}
            < input value={filterKey} onChange={onChange} />
        </div >
    )
}

export default Filter;