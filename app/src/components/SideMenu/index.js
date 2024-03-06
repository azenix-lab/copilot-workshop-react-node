import React from "react";
import './SideMenu.css';
import NavButton from "../NavButton";
import UserMenu from "../UserMenu";
import BlogMenu from "../BlogMenu";

const SideMenu = () => (
    <>
    <nav className="App-nav">
        <h2>Menu</h2>
        <UserMenu />
        
        <h2>Navigation</h2>
        <NavButton path="/">Home</NavButton>
        <NavButton>Search</NavButton>

        <div className="App-Blog-List">
        <BlogMenu />
    </div>
    </nav>
    </>

);

export default SideMenu;