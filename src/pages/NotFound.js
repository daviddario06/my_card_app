import React from 'react';
import Image from '../images/j69nf.jpg';
import '../styles/NotFound.css'

const NotFound = () => (
    <div className = "notFound">
        <img src = {Image} className = "imagen" alt = ""></img>
        <a href = "/" className = "home"> Home</a>
    </div>
)
export default NotFound