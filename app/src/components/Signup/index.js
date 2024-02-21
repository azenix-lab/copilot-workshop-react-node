import React, { useState } from 'react';
import apiCall from '../../utils/api';
import { useDispatch } from 'react-redux';
import { logIn } from '../../services/authSlice';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const role = 'user';

    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await apiCall('http://localhost:3001/api/users/signup', 'POST', { name, email, password, role });
            const token = response.token;
            const userData = response.user;
            dispatch(logIn({ user: userData, token }));
            

        } catch (error) {
            console.error(error);
        }

    };
    // Sign up Form
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email: <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
                Name: <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </label>
            <label>
                Password <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <input type="submit" value="signup"></input>
        </form>
    );
}

export default SignUp;