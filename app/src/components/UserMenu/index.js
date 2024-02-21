import React from 'react';
import { useSelector } from 'react-redux';
import NavButton from '../NavButton';
import LogoutButton from "../LogoutButton";


function UserMenu() {
    const user = useSelector((state) => state.auth.user);

    if(user)
    {
        return (
            <div>
                <h3>Welcome, {user.name}</h3>
                <LogoutButton path="/">Log Out</LogoutButton>
            </div>
        );
    }
    else
    {
        return (
            <div>
                <NavButton path="/login">Log In</NavButton>
                <NavButton path="/signup">Sign Up</NavButton>
            </div>
        );
    }
}

export default UserMenu;