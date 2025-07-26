import React from 'react';

const FormSuccess = ({ name, email }) => {
    return (
        <div>
            <h1>Form Submitted Successfully</h1>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default FormSuccess;