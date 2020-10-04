import React from 'react';

const useroutput = (props) =>{      //stateless component
    return(
        <div>
            <p>hello {props.name}. welcome back to game.we are happy to see you again </p>
        <p>looks like your friend {props.friend} made a good progreess in game. make sure you don't fall
         behind your friend {props.friend} </p>
        </div>
    )
}

export default useroutput;