// src/components/LogoutButton.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../services/authSlice';

function LogoutButton({ children, path }) 
{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(logOut());
        navigate(path);
    };
    return (
        <button className="nav-button" onClick={handleClick}>{children}</button>
    );
};

export default LogoutButton;