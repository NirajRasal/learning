import React from 'react';
//don't need component because we don't use class to extend component
const person = props => {
    return(
    <div>
         <h2>hii i'am {props.name}</h2>
        <p>{props.children}</p>   
    </div>
    )
    //used this.children to acesss the contents passed through opening and closing tag of Person
};

export default person;