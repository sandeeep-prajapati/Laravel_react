import React from 'react';

const SimplePage = ({ message }) => {
    return (
        <div>
            <h1>{message}</h1>
            <p>This is a simple page rendered with Inertia.js and React.</p>
        </div>
    );
};

export default SimplePage;