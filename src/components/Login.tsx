import React, { useState, useEffect, MouseEvent, ChangeEvent } from "react";
import AuthService from './AuthService';
import { Button } from 'antd';
import { Redirect } from 'react-router-dom'



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
    const [toNews, setToNews] = useState(false)

    useEffect(() => {
        return () => { //works when component IS GOING to rerender
            if (Auth.loggedIn()) {
                setStatus('logged In')
            };
        }
    }, [status]);

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
        if (password !== '') {
            Auth.login(name, password)
            setStatus('')
        }
        else
            setStatus("Password can't be empty.")
    }

    const showNews = (event: MouseEvent) => {
        event.preventDefault();
        setToNews(true)
    }

    if (toNews)
        return <Redirect to='/news' />
    else
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
                    onClick={event => { setStatus('waiting'); sendLoginInfo(event) }}
                />
                <br />
                <Button
                    onClick={event => showNews(event)}>
                    NEWS
            </Button>
                <p className="status">{status}</p>
            </form>

        )
}

export default Login;