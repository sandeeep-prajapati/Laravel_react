import React from 'react';

const FormSuccess = ({ name, email, message }) => {
    return (
        <div>
            <h1>Form Submitted Successfully</h1>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Message: {message}</p>
        </div>
    );
};

export default FormSuccess;