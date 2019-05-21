import React, { useState, useEffect } from "react";
import AuthService from './AuthService';


const MagicButton = (props) => {
    // const [bColor, setBColor] = useState('');

    // // const setGreen = useCallback(() => setBColor('green'), [bColor]);
    // // const setRed = useCallback(() => setBColor('red'), [bColor]);
    // const setColor = useCallback(() => setBColor(props.length < 4 ? 'red' : 'green'), [props.length]);

    //setColor();

    return (
        <button
            type="submit"
            style={{ color: props.color }}
            onClick={event => props.onClick(event)}
        >
            {props.color}
        </button>
    );
}


const Login = (props) => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        return () => { //works when component IS GOING to rerender
            if (Auth.loggedIn()) {
                return props.history.replace('/');
            };
        }
    });

    const Auth = new AuthService();

    const changeLabel = (event) => {
        event.preventDefault();
        setName(event.target.value);
    }

    const changePass = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
    }

    const sendLoginInfo = async (event) => {
        event.preventDefault();

        try {
            const query = await Auth.login(name, password)
        }
        catch (error) {
            alert(error);
        }
    }

    return (
        <form>
            <input
                placeholder="Name"
                onChange={event => changeLabel(event)}
            />
            <br />
            <input
                placeholder="Password"
                onChange={event => changePass(event)}
            />
            <MagicButton
                color={name.length < 4 ? 'red' : 'green'}
                onClick={sendLoginInfo}
            />
            <br />
        </form>
    )
}

export default Login;