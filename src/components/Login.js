import React, { useState } from "react";
// import {Switch, Route} from "react-router-dom";


const MagicButton = (props) => {
    return (
        <button style={{color: props.bColor}}>{props.bColor}</button>
    );
}


const Login = (props) => {
    const [text, setText] = useState('')

    const changeLabel = (event) => {
        event.preventDefault();
        setText(event.target.value);
    }
    
    

    return (
        <form>
            <input 
                placeholder="Name"
                onChange={event => changeLabel(event)}
            />
            <MagicButton bColor={text.length < 4 ? 'red' : 'green'}/>
            <p>{text}</p>
        </form>
    )
}

export default Login;