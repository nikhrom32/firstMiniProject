import React, { useState } from "react";


const MagicButton = (props) => {
    // const [bColor, setBColor] = useState('');
    
    // // const setGreen = useCallback(() => setBColor('green'), [bColor]);
    // // const setRed = useCallback(() => setBColor('red'), [bColor]);
    // const setColor = useCallback(() => setBColor(props.length < 4 ? 'red' : 'green'), [props.length]);
    
    //setColor();

    return (
        <button style={{ color: props.color}}>{props.color}</button>
    );
}


const Login = (props) => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const changeLabel = (event) => {
        event.preventDefault();
        setName(event.target.value);
    }

    const changePass = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
    }

    const sendLoginInfo = () => {
               
    }

    return (
        <form>
            <input
                placeholder="Name"
                onChange={event => changeLabel(event)}
            />
            <br/>
            <input
                placeholder="Password"
                onChange={event => changePass(event)}
            />
            <MagicButton 
                color={name.length < 4 ? 'red' : 'green'}
                onClick
            />            
            <br/>
        </form>
    )
}

export default Login;