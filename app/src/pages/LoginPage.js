import React from 'react';
import Login from '../components/Login';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';

export const LoginPage = () =>{
    return (
        <div className="App">
            <Header />
            <div className="App-body">
                <SideMenu />
                <div className="login-page">
                    <h1>Welcome to Our Site</h1>
                    <p>Please log in to continue:</p>
                    <Login />
                </div>
            </div>
        </div>
    );
}
