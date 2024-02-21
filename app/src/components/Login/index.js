import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiCall from '../../utils/api';
import { useDispatch } from 'react-redux';
import { logIn } from '../../services/authSlice';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await apiCall('http://localhost:3001/api/auth/login', 'POST', { email, password });
            const token = response.token;
            const userData = response.userData;
            dispatch(logIn({ user: userData, token }));
            navigate('/');
        }
        catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email: <input type="text" value={email} onChange={e => setEmail(e.target.value)}></input>
            </label>
            <label>
                Password: <input type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
            </label>
            <input type="submit" value="login"></input>
        </form>
    );
}

export default Login;