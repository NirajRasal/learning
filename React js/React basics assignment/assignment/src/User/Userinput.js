import React from 'react';

const userinput = (props) =>{   //stateless components
    return(
        <div>
        <p>Enter the Username:</p>
        <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default userinput;