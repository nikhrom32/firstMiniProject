import React, {useState} from 'react';
import './Login.css'


const Login = () => {
    const [inputs, setInputs] = useState();


    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }        
    }


    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs =>({...inputs, 
                            [event.target.name]: event.target.value}));
    }

    return (
        <div classNme="center">
            <div className="card">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        className="form-item"
                        placeholder="Username"
                        name="username"
                        type="text"
                        onChange={handleInputChange}
                        value={inputs.username}
                    />
                    <input
                        className="form-item"
                        placeholder="Password"
                        name="password"
                        type="password"
                        onChange={handleInputChange}
                        value={inputs.password}
                    />
                    <input
                        className="form-submit"
                        value="Submit"
                        type="submit"
                    />
                </form>
            </div>
        </div>
    )
}

export default Login;