import React from 'react';
import { Link } from '@inertiajs/react';

const Home = ({ message, user }) => {
    return (
        <div>
            <h1>{message}</h1>
            <p>Welcome, {user.name} ({user.email})</p>
            <Link href="/about">Go to About Page</Link>
        </div>
    );
};

export default Home;