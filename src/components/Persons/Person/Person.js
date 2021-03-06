import classes from './Person.module.css'

const person = (props) => {
    return(
        <div className = {classes.Person}>
            <p onClick = {props.click}>Hello, I'm {props.name} and i'm {props.age} years old.</p>
            <p> {props.children}</p>
            <input type="text" onChange = {props.changed}  placeholder={props.name}/>      
        </div>
    )
}

export default person;