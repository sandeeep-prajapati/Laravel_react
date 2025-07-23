import React from 'react';
import { Link } from '@inertiajs/react';

const About = ({ company, year }) => {
    return (
        <div>
            <h1>About Us</h1>
            <p>Company: {company}</p>
            <p>Year Established: {year}</p>
            <Link href="/">Go to Home Page</Link>
        </div>
    );
};

export default About;