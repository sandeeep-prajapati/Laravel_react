import React from 'react';

const Example = ({ title, description, user }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <h2>User Info</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default Example;