const Course = ({ course }) => {
    return (
        <div>
            <Header text={course.name} />
            <Content parts={course.parts} />
        </div>
    );
}

const Header = ({ text }) => {
    return (
        <h1>{text}</h1>
    );
}

const Content = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0);

    return (
        <div>
            <div>
                {parts.map((part) => (
                    <Part key={part.id} part={part} />
                ))}
            </div>
            <p><strong>Total of {total} exercises.</strong></p>
        </div>
    );
};

const Part = ({ part }) => {
    return (
        <p>{part.name}: {part.exercises} exercises.</p>
    );
};

export default Course;