import React from 'react';
import './MainContentWindow.css';
import BlogList from '../BlogList';

const MainContentWindow = () => (
    <main className="App-main">
        <h2>Main Content Window</h2>
        <BlogList />
    </main>
);

export default MainContentWindow;