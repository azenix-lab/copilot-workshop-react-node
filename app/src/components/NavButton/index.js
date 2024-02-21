// src/components/NavButton.js

import React from 'react';
import './NavButton.css';

const NavButton = ({ children }) => (
  <button className="nav-button">{children}</button>
);

export default NavButton;