function Student(props){
    return(
        <div className="student">
            <h1>Name: {props.name}</h1>
            <h2>Age: {props.age}</h2>
            <button className="button">Click Me</button>
        </div>
    );
    Student.propTypes={
        name:PropTypes.string,
        age:PropTypes.number
    }
    Student.defaultProps={
        name:"Guest",
        age:0
    }
}
export default Student;