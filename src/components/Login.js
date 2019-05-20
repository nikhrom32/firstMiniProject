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
            <MagicButton color={text.length < 4 ? 'red' : 'green'} />
            <p>{text}</p>
        </form>
    )
}

export default Login;