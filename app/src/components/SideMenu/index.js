import React from "react";
import './SideMenu.css';
import NavButton from "../NavButton";

const SideMenu = () => (
    <>
    <nav className="App-nav">
        <h2>Navigation</h2>
        <NavButton>Home</NavButton>
        <NavButton>Search</NavButton>

        <div className="App-Blog-List">
        <h2>Blog List</h2>
        <p>Blog 1</p>
        <p>Blog 2</p>
        <p>Blog 3</p>
    </div>
    </nav>
    </>

);

export default SideMenu;