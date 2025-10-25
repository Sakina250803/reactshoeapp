import React from 'react';
import './SimpleButton.css';


export default function SimpleButton({ children, onClick, disabled = false }) {
return (
<button className="simple-btn" onClick={onClick} disabled={disabled}>
{children}
</button>
);
}