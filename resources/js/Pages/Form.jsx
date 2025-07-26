import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Form = () => {
    // Set initial form data state
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    // Set initial error state
    const [errors, setErrors] = useState({
        name: '',
        email: ''
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Submit the form data using Inertia
        Inertia.post('/submit-form', formData, {
            onSuccess: () => {
                Inertia.visit('/form-success');
            },
            onError: (validationErrors) => {
                // Handle validation errors from the backend
                setErrors(validationErrors);
            }
        });
    };

    return (
        <div>
            <h1>Submit Form</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;