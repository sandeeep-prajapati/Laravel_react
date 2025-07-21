import { Link } from '@inertiajs/react';
import React from 'react';

const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <p>This is the About page.</p>
            <Link href="/">Go to Home Page</Link>
        </div>
    );
};

export default About;