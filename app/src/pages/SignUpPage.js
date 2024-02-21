import React from 'react';
import SignUp from '../components/Signup';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';

export const SignUpPage = () =>{
    return (
        <div className="App">
            <Header />
            <div className="App-body">
                <SideMenu />
                <div className="signup-page">
                    <h1>Welcome to Our Site</h1>
                    <p>Please sign up to continue:</p>
                    <SignUp />
                </div>
            </div>
        </div>
    );
}
