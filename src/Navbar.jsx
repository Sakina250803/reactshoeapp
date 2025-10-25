import React from 'react';
import './SimpleButton.css';


export default function NavBar() {
return (
<nav className="navbar">
<button className="simple-btn">Home</button>
<button className="simple-btn">About</button>
<button className="simple-btn">Contact</button>
</nav>
);
}