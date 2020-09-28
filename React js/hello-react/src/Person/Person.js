import React from 'react';

import  './Person.css'; 
//don't need component because we don't use class to extend component
const person = props => {       //stateless or representational component
    return(
    <div className="Person">
         <h2>hii i'am {props.name}</h2>
        <p onClick={props.click}>{props.children}</p>   
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
    //used props.children to acesss the contents passed through opening and closing tag of Person
};

export default person;