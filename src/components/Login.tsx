import React, { useState, useEffect, MouseEvent, ChangeEvent } from "react";
import AuthService from './AuthService';



interface MagicButtonProps {
    isDisabled: boolean
    onClick(event: MouseEvent): void
}

const MagicButton = (props: MagicButtonProps) => {
    // const [bColor, setBColor] = useState('');

    // // const setGreen = useCallback(() => setBColor('green'), [bColor]);
    // // const setRed = useCallback(() => setBColor('red'), [bColor]);
    // const setColor = useCallback(() => setBColor(props.length < 4 ? 'red' : 'green'), [props.length]);

    //setColor();

    const [text, setText] = useState('default')


    return (
        <button
            type="submit"
            disabled={props.isDisabled}
            onClick={event => props.onClick(event)}
        >
            {text}
        </button>
    );
}


const Login = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('Ready')

    useEffect(() => {
        return () => { //works when component IS GOING to rerender
            if (Auth.loggedIn()) {
                setStatus('logged In')
            };
        }
    }, []);

    const Auth = new AuthService();

    const changeLabel = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setName(event.target.value);
    } 

    const changePass = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setPassword(event.target.value);
    }

    const sendLoginInfo = async (event: MouseEvent) => {
        event.preventDefault();
        Auth.login(name, password)
    }

    return (
        <form>
            <input
                placeholder="Name"
                onChange={changeLabel}
            />
            <br />
            <input
                placeholder="Password"
                onChange={event => changePass(event)}
            />
            <MagicButton
                isDisabled={name.length < 4}
                onClick={event => {sendLoginInfo(event); setStatus('waiting')}}
            />
            <br />
            <p className="status">{status}</p>
        </form>
    )
}

export default Login;