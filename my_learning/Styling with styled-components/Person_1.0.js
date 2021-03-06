// import './Person.css'
// import React from 'react';
// import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    text-align: center;
    padding: 16px;

    @media (min-width: 500px){
        width: 450px;
    }
`;

const person = (props) => {
    return(
        <StyledDiv>
            <p onClick = {props.click}>Hello, I'm {props.name} and i'm {props.age} years old.</p>
            <p> {props.children}</p>
            <input type="text" onChange = {props.changed}  placeholder={props.name}/>      
        </StyledDiv>
    )
}

export default person;