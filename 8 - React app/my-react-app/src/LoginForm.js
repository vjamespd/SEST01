import React, {useState} from "react";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login submitted');
    };
    return (
        <from onSubmit = {handleSubmit}>
            <div>
                <label htmlFor="email">Email
                </label>
                <input type="email" id="email" value={email}
                onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="password">Password
                </label>
                <input type="password" id="password" value={password}
                onChange={(e) => setPassword(e.target.value)}></input>
                <button type="submit">Login</button>
            </div>
        </from>
    );
};

export default LoginForm;