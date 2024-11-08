import React from 'react';
import '../styles.css';

export default function Header(){
    return (
        <div className='header'>
            <img className='logo' src='logo.png' alt="Panta Rhai" />
           <h3 className='app-subtitle'>It's time for popcorn! Find your next movie here  </h3> 
            
        </div>
    );
}

