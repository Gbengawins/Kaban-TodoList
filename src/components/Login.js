import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => { 
    const [ username, setUsername ] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => { 
        e.preventDefault();
        //Saving username to localStorage
        localStorage.setItem('userId', username);
        setUsername('');
        navigate("/task");
    };

    return (
        <div className="login__container">
            <form
                onSubmit={ handleLogin }
                className="login__form"
            >
                <label htmlFor="username" className="login__label">Username</label>
                <input
                    type="text"
                    name="username"
                    id="Username"
                    onChange={ (e) => setUsername(e.target.value) }
                    value={ username }
                />
                <button>Sign In</button>
            </form>
        </div>
    )
};

export default Login;