import React from 'react';
import { Link } from 'react-router-dom';
//Style
import './ErrorBoundary.css'

const ErrorBoundary = () => {
    return (
    <div className="gn-error">
        <h1>We couldn't find the news you are looking for.</h1>
        <h2>Check other ones. Let's go back</h2>
        
        <Link to='/' className="gn-error-link">Home</Link>
    </div>
    )
}

export default ErrorBoundary;