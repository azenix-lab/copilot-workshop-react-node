import React from 'react';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import MainContentWindow from '../components/MainContentWindow';
import './../App.css';

export const HomePage = () => {
    return (
        <div className="App">
            <Header />
            <div className="App-body">
            <SideMenu />
            <MainContentWindow />
            </div>
        </div>
    );
}