import React, { useState } from "react";
// import {Switch, Route} from "react-router-dom";


const MagicButton = (props) => {
    const [bColor, setBColor] = useState('black');

    if (props.length < 4)
        setBColor('red');
    else
        setBColor('green');
    return (
        <button style={{color: bColor}}>{bColor}</button>
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
            <MagicButton length={text.length}/>
            <p>{text}</p>
        </form>
    )
}

export default Login;