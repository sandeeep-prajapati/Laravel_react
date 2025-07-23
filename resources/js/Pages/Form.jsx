import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Form = () => {
    // State to hold form data and validation errors
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Perform client-side validation
    const validateForm = () => {
        let valid = true;
        const newErrors = { name: '', email: '', message: '' };

        if (!formData.name) {
            newErrors.name = 'Name is required';
            valid = false;
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
            valid = false;
        }

        if (!formData.message) {
            newErrors.message = 'Message is required';
            valid = false;
        } else if (formData.message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters long';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the form before submitting
        if (validateForm()) {
            // If valid, submit the form to Laravel via Inertia
            Inertia.post('/submit-form', formData, {
                onSuccess: () => {
                    console.log('Form submitted successfully');
                },
                onError: (errors) => {
                    console.error('Form submission failed:', errors);
                },
            });
        }
    };

    return (
        <div>
            <h1>Contact Us</h1>

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

                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;